import { useState, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { Upload, ArrowLeft } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function MakePayment() {
  const [paymentPurpose, setPaymentPurpose] = useState('')
  const [userId] = useState('A-12345678')
  const [fullName] = useState('Md. Hosne Mobarak Rubai')
  const [mobileNumber] = useState('+880 ### ### ##')
  const [donationAmount, setDonationAmount] = useState('')
  const [donationDescription, setDonationDescription] = useState('')
  const [paymentProofFile, setPaymentProofFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      // Validate file type and size
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/png', 'image/jpeg', 'image/jpg']
      const maxSize = 10 * 1024 * 1024 // 10MB
      
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload Doc, Pdf, Excel Sheet, PNG, or JPG files.')
        return
      }
      
      if (file.size > maxSize) {
        alert('File size exceeds 10MB limit.')
        return
      }
      
      setPaymentProofFile(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'image/png', 'image/jpeg', 'image/jpg']
      const maxSize = 10 * 1024 * 1024 // 10MB
      
      if (!validTypes.includes(file.type)) {
        alert('Invalid file type. Please upload Doc, Pdf, Excel Sheet, PNG, or JPG files.')
        return
      }
      
      if (file.size > maxSize) {
        alert('File size exceeds 10MB limit.')
        return
      }
      
      setPaymentProofFile(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const calculateTotalAmount = () => {
    const amount = parseFloat(donationAmount) || 0
    // Assuming VAT/charge is 0% for now, but can be calculated if needed
    return amount
  }

  const totalAmount = calculateTotalAmount()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment submission logic here
    console.log('Payment submitted', {
      paymentPurpose,
      userId,
      fullName,
      mobileNumber,
      donationAmount,
      donationDescription,
      paymentProofFile,
      totalAmount
    })
  }

  return (
    <div className="space-y-6">
      {/* Payment Form Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-1">Payment</h2>
          <p className="text-sm">Select your purpose and make your payment</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Select payment purpose */}
          <div>
            <label htmlFor="paymentPurpose" className="block text-sm font-medium mb-2">
              Select payment purpose
            </label>
            <Select
              id="paymentPurpose"
              value={paymentPurpose}
              onChange={(e) => setPaymentPurpose(e.target.value)}
              className="w-full"
            >
              <option value="">Select option</option>
              <option value="membership">Membership Fee</option>
              <option value="donation">Donation</option>
              <option value="event">Event Registration</option>
              <option value="scholarship">Scholarship Contribution</option>
            </Select>
          </div>

          {/* User ID */}
          <div>
            <label htmlFor="userId" className="block text-sm font-medium mb-2">
              User ID (If any)
            </label>
            <Input
              id="userId"
              type="text"
              value={userId}
              readOnly
              className="bg-gray-50"
            />
          </div>

          {/* Full name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full name
            </label>
            <Input
              id="fullName"
              type="text"
              value={fullName}
              readOnly
              className="bg-gray-50"
            />
          </div>

          {/* Mobile number */}
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium mb-2">
              Mobile number
            </label>
            <Input
              id="mobileNumber"
              type="text"
              value={mobileNumber}
              readOnly
              className="bg-gray-50"
            />
          </div>

          {/* Donation amount */}
          <div>
            <label htmlFor="donationAmount" className="block text-sm font-medium mb-2">
              Donation amount
            </label>
            <Input
              id="donationAmount"
              type="number"
              placeholder="Enter donation amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>

          {/* Donation Description */}
          <div>
            <label htmlFor="donationDescription" className="block text-sm font-medium mb-2">
              Donation Description
            </label>
            <textarea
              id="donationDescription"
              placeholder="Enter donation description"
              value={donationDescription}
              onChange={(e) => setDonationDescription(e.target.value)}
              rows={4}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>

          {/* Total Payable Amount */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Total payable amount</p>
              <p className="text-xs mt-1">Vat/charge included</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-700">{totalAmount.toLocaleString()} ৳</p>
            </div>
          </div>

          {/* Attachment of payment proof */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Attachment of payment proof<span className="text-red-500">*</span>
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
                isDragging
                  ? "border-[#3B60C9] bg-blue-50"
                  : "border-gray-300 hover:border-gray-400 bg-gray-50"
              )}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
              <Upload className="w-12 h-12 mx-auto mb-4" />
              <p className="text-sm font-medium mb-1">
                Upload any Files or drag and drop
              </p>
              <p className="text-xs">
                Doc, Pdf, Excel Sheet, PNG, JPG up to 10MB
              </p>
              {paymentProofFile && (
                <p className="text-sm text-[#3B60C9] mt-2 font-medium">
                  Selected: {paymentProofFile.name}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Button
              type="submit"
              className="w-full bg-[#3B60C9] hover:bg-[#3B60C9]/90 text-white h-12 text-base font-medium"
            >
              Proceed to payment
            </Button>
            <Link
              to="/payment"
              className="text-center text-sm underline"
            >
              Go back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
