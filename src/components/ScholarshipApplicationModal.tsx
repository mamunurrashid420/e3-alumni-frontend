import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { apiClient } from '@/api/client'
import type { Scholarship } from '@/types/api'
import { toast } from 'sonner'

interface ScholarshipApplicationModalProps {
  open: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function ScholarshipApplicationModal({
  open,
  onClose,
  onSuccess,
}: ScholarshipApplicationModalProps) {
  const [scholarships, setScholarships] = useState<Scholarship[]>([])
  const [loadingScholarships, setLoadingScholarships] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    scholarship_id: '',
    applicant_name: '',
    applicant_email: '',
    applicant_phone: '',
    applicant_address: '',
    class_or_grade: '',
    school_name: '',
    parent_or_guardian_name: '',
    statement: '',
  })
  const [academicProofFile, setAcademicProofFile] = useState<File | null>(null)
  const [otherDocFile, setOtherDocFile] = useState<File | null>(null)

  useEffect(() => {
    if (open) {
      setLoadingScholarships(true)
      apiClient
        .getScholarships()
        .then((res) => setScholarships(res.data))
        .catch(() => toast.error('Failed to load scholarships'))
        .finally(() => setLoadingScholarships(false))
    }
  }, [open])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.scholarship_id || !form.applicant_name || !form.applicant_phone) {
      toast.error('Please fill required fields: Scholarship, Name, Phone')
      return
    }
    setSubmitting(true)
    try {
      const fd = new FormData()
      fd.append('scholarship_id', form.scholarship_id)
      fd.append('applicant_name', form.applicant_name)
      fd.append('applicant_phone', form.applicant_phone)
      if (form.applicant_email) fd.append('applicant_email', form.applicant_email)
      if (form.applicant_address) fd.append('applicant_address', form.applicant_address)
      if (form.class_or_grade) fd.append('class_or_grade', form.class_or_grade)
      if (form.school_name) fd.append('school_name', form.school_name)
      if (form.parent_or_guardian_name)
        fd.append('parent_or_guardian_name', form.parent_or_guardian_name)
      if (form.statement) fd.append('statement', form.statement)
      if (academicProofFile) fd.append('academic_proof_file', academicProofFile)
      if (otherDocFile) fd.append('other_document_file', otherDocFile)

      await apiClient.submitScholarshipApplication(fd)
      toast.success('Application submitted successfully')
      setForm({
        scholarship_id: '',
        applicant_name: '',
        applicant_email: '',
        applicant_phone: '',
        applicant_address: '',
        class_or_grade: '',
        school_name: '',
        parent_or_guardian_name: '',
        statement: '',
      })
      setAcademicProofFile(null)
      setOtherDocFile(null)
      onClose()
      onSuccess?.()
    } catch (err: unknown) {
      const msg = err && typeof err === 'object' && 'message' in err ? String((err as { message: string }).message) : 'Failed to submit'
      toast.error(msg)
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold text-black mb-2">Apply for Scholarship</h3>
        <p className="text-sm text-gray-600 mb-4">Fill in your details below.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">
              Scholarship <span className="text-red-600">*</span>
            </label>
            <Select
              value={form.scholarship_id}
              onValueChange={(v) => setForm((f) => ({ ...f, scholarship_id: v }))}
              required
              disabled={loadingScholarships}
            >
              <SelectTrigger>
                <SelectValue placeholder={loadingScholarships ? 'Loading...' : 'Select scholarship'} />
              </SelectTrigger>
              <SelectContent className="z-600">
                {scholarships.map((s) => (
                  <SelectItem key={s.id} value={String(s.id)}>
                    {s.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">
              Name <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.applicant_name}
              onChange={(e) => setForm((f) => ({ ...f, applicant_name: e.target.value }))}
              placeholder="Full name"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">
              Phone <span className="text-red-600">*</span>
            </label>
            <Input
              value={form.applicant_phone}
              onChange={(e) => setForm((f) => ({ ...f, applicant_phone: e.target.value }))}
              placeholder="e.g. 01712345678"
              required
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Email</label>
            <Input
              type="email"
              value={form.applicant_email}
              onChange={(e) => setForm((f) => ({ ...f, applicant_email: e.target.value }))}
              placeholder="email@example.com"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Address</label>
            <textarea
              rows={2}
              value={form.applicant_address}
              onChange={(e) => setForm((f) => ({ ...f, applicant_address: e.target.value }))}
              placeholder="Your address"
              className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Class / Grade</label>
            <Input
              value={form.class_or_grade}
              onChange={(e) => setForm((f) => ({ ...f, class_or_grade: e.target.value }))}
              placeholder="e.g. Class 8"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">School name</label>
            <Input
              value={form.school_name}
              onChange={(e) => setForm((f) => ({ ...f, school_name: e.target.value }))}
              placeholder="School name"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Parent / Guardian</label>
            <Input
              value={form.parent_or_guardian_name}
              onChange={(e) => setForm((f) => ({ ...f, parent_or_guardian_name: e.target.value }))}
              placeholder="Name"
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Statement (optional)</label>
            <textarea
              rows={3}
              value={form.statement}
              onChange={(e) => setForm((f) => ({ ...f, statement: e.target.value }))}
              placeholder="Why you need this scholarship"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Academic proof (PDF/image)</label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setAcademicProofFile(e.target.files?.[0] ?? null)}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black-700 mb-1">Other document (optional)</label>
            <Input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setOtherDocFile(e.target.files?.[0] ?? null)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit application'}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} disabled={submitting}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
