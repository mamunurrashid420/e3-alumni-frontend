import { useState, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, Upload, Star, GraduationCap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Registration() {
  const [studentshipProofFile, setStudentshipProofFile] = useState<File | null>(null)
  const [paymentReceiptFile, setPaymentReceiptFile] = useState<File | null>(null)
  const [membershipType, setMembershipType] = useState('')
  const [paymentYears, setPaymentYears] = useState('')
  const [yearlyFee, setYearlyFee] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  
  const studentshipProofFileInputRef = useRef<HTMLInputElement>(null)
  const paymentReceiptFileInputRef = useRef<HTMLInputElement>(null)

  const handleStudentshipProofFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setStudentshipProofFile(e.target.files[0])
    }
  }

  const handleStudentshipProofDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setStudentshipProofFile(e.dataTransfer.files[0])
    }
  }

  const handlePaymentReceiptFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentReceiptFile(e.target.files[0])
    }
  }

  const handlePaymentReceiptDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPaymentReceiptFile(e.dataTransfer.files[0])
    }
  }

  // Calculate total amount based on membership type, yearly fee, and years
  const calculateTotalAmount = () => {
    if (!yearlyFee || !paymentYears) return 0
    
    const years = parseInt(paymentYears) || 0
    const fee = parseInt(yearlyFee) || 0
    return fee * years
  }

  const totalAmount = calculateTotalAmount()

  // Get yearly fee options based on membership type
  const getYearlyFeeOptions = () => {
    switch (membershipType) {
      case 'general':
        return [{ value: '500', label: '500 (General)' }]
      case 'lifetime':
        return [{ value: '10000', label: '10,000 (Lifetime)' }]
      case 'associate':
        return [{ value: '300', label: '300 (Associate)' }]
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Background Image with Overlay */}
      <div className="hidden lg:flex lg:w-[40%] relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80)'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col p-8 w-full">
          {/* Go Back Link */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors self-start mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go back</span>
          </Link>

          {/* Logo and School Info */}
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <div className="w-20 h-20 rounded-full border-4 border-[#3B60C9] bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <div className="text-[#3B60C9] text-sm font-bold text-center leading-tight">
                  JSAA
                </div>
              </div>
            </div>
            <h1 className="text-white text-3xl font-bold uppercase text-center mb-2">
              JAHAPUR SECONDARY SCHOOL
            </h1>
            <p className="text-white text-lg uppercase text-center">
              ALUMNI ASSOCIATION
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="flex-1 lg:w-[60%] bg-white relative overflow-y-auto">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <GraduationCap className="w-32 h-32 text-gray-400" strokeWidth={1} />
        </div>
        <div className="absolute top-20 right-20">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-40 right-32">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-60 right-16">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute top-80 right-28">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>

        {/* Form Content */}
        <div className="relative z-10 p-8 lg:p-12 max-w-5xl mx-auto">
          {/* Mobile Go Back Link */}
          <Link 
            to="/" 
            className="lg:hidden flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go back</span>
          </Link>

          {/* Title and Subtitle */}
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold  mb-2">
              Create Your Account
            </h1>
            <p className="text-sm lg:text-base">
              Register your information to join Alumni
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* 01. Membership Type */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    01. Membership Type <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="membershipType"
                        value="general"
                        checked={membershipType === 'general'}
                        onChange={(e) => {
                          setMembershipType(e.target.value)
                          setYearlyFee('') // Reset yearly fee when membership type changes
                        }}
                        className="w-4 h-4 text-[#3B60C9] border-gray-300 focus:ring-[#3B60C9]"
                        required
                      />
                      <span className="text-sm text-gray-700">General Member</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="membershipType"
                        value="lifetime"
                        checked={membershipType === 'lifetime'}
                        onChange={(e) => {
                          setMembershipType(e.target.value)
                          setYearlyFee('') // Reset yearly fee when membership type changes
                        }}
                        className="w-4 h-4 text-[#3B60C9] border-gray-300 focus:ring-[#3B60C9]"
                        required
                      />
                      <span className="text-sm text-gray-700">Lifetime Member</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="membershipType"
                        value="associate"
                        checked={membershipType === 'associate'}
                        onChange={(e) => {
                          setMembershipType(e.target.value)
                          setYearlyFee('') // Reset yearly fee when membership type changes
                        }}
                        className="w-4 h-4 text-[#3B60C9] border-gray-300 focus:ring-[#3B60C9]"
                        required
                      />
                      <span className="text-sm text-gray-700">Associate Member</span>
                    </label>
                  </div>
                </div>

                {/* 02. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    02. Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                {/* 04. Father's Name */}
                <div>
                  <label htmlFor="fatherName" className="block text-sm font-medium mb-2">
                    04. Father's Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fatherName"
                    type="text"
                    placeholder="Enter father's name"
                    required
                  />
                </div>

                {/* 05. Mother's Name */}
                <div>
                  <label htmlFor="motherName" className="block text-sm font-medium mb-2">
                    05. Mother's Name
                  </label>
                  <Input
                    id="motherName"
                    type="text"
                    placeholder="Enter mother's name"
                  />
                </div>

                {/* 07. Year of Passing/Batch - JSC Year */}
                <div>
                  <label htmlFor="jscYear" className="block text-sm font-medium mb-2">
                    07. Year of Passing/Batch* - JSC Year:
                  </label>
                  <Select id="jscYear">
                    <option value="">Select JSC year</option>
                    {Array.from({ length: 50 }, (_, i) => {
                      const year = new Date().getFullYear() - i
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    })}
                  </Select>
                </div>

                {/* 07. Year of Passing/Batch - SSC Year */}
                <div>
                  <label htmlFor="sscYear" className="block text-sm font-medium mb-2">
                    07. Year of Passing/Batch* - SSC Year:
                  </label>
                  <Select id="sscYear" required>
                    <option value="">Select SSC year</option>
                    {Array.from({ length: 50 }, (_, i) => {
                      const year = new Date().getFullYear() - i
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    })}
                  </Select>
                </div>

                {/* 10. Highest Educational Degree */}
                <div>
                  <label htmlFor="highestDegree" className="block text-sm font-medium mb-2">
                    10. Highest Educational Degree
                  </label>
                  <Input
                    id="highestDegree"
                    type="text"
                    placeholder="Enter highest educational degree"
                  />
                </div>

                {/* 11. Present Address */}
                <div>
                  <label htmlFor="presentAddress" className="block text-sm font-medium mb-2">
                    11. Present Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="presentAddress"
                    type="text"
                    placeholder="Enter present address"
                    required
                  />
                </div>

                {/* 13. Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    13. Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                {/* 15. Profession */}
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium mb-2">
                    15. Profession <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="profession"
                    type="text"
                    placeholder="Enter profession"
                    required
                  />
                </div>

                {/* 17. Institute Name/Workplace */}
                <div>
                  <label htmlFor="instituteName" className="block text-sm font-medium mb-2">
                    17. Institute Name/Workplace
                  </label>
                  <Input
                    id="instituteName"
                    type="text"
                    placeholder="Enter institute name/workplace"
                  />
                </div>

                {/* 18. Blood Group */}
                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium mb-2">
                    18. Blood Group <span className="text-red-500">*</span>
                  </label>
                  <Select id="bloodGroup" required>
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </Select>
                </div>

                {/* 22. Yearly Fee (In Taka) */}
                <div>
                  <label htmlFor="yearlyFee" className="block text-sm font-medium mb-2">
                    22. Yearly Fee (In Taka) <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    id="yearlyFee"
                    required
                    value={yearlyFee}
                    onChange={(e) => setYearlyFee(e.target.value)}
                    disabled={!membershipType}
                  >
                    <option value="">Select yearly fee</option>
                    {getYearlyFeeOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>

                {/* 24. Total Paid Amount with Receipt */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    24. Total Paid Amount with Receipt <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#3B60C9] transition-colors",
                      paymentReceiptFile && "border-[#3B60C9] bg-blue-50"
                    )}
                    onDrop={handlePaymentReceiptDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => paymentReceiptFileInputRef.current?.click()}
                  >
                    <input
                      ref={paymentReceiptFileInputRef}
                      type="file"
                      className="hidden"
                      accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                      onChange={handlePaymentReceiptFileChange}
                    />
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-1">
                      {paymentReceiptFile ? paymentReceiptFile.name : "Upload any Files or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Doc, Pdf, Excel Sheet, PNG, JPG up to 10MB
                    </p>
                  </div>
                  {totalAmount > 0 && (
                    <div className="mt-2 bg-green-50 border border-green-200 rounded-md p-3">
                      <p className="text-sm font-semibold text-green-700">
                        Total Amount: {totalAmount.toLocaleString()} ৳
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* 03. Name (Bangla) */}
                <div>
                  <label htmlFor="nameBengali" className="block text-sm font-medium mb-2">
                    03. Name (Bangla) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nameBengali"
                    type="text"
                    placeholder="বাংলায় নাম লিখুন"
                    required
                  />
                </div>

                {/* 06. Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-2">
                    06. Gender <span className="text-red-500">*</span>
                  </label>
                  <Select id="gender" required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </div>

                {/* 09. Studentship Proof Copy */}
                <div>
                  <label htmlFor="studentshipProofType" className="block text-sm font-medium mb-2">
                    09. Studentship Proof Copy
                  </label>
                  <Select id="studentshipProofType" className="mb-2">
                    <option value="">Select proof type</option>
                    <option value="jsc">JSC</option>
                    <option value="eight">Eight</option>
                    <option value="ssc">SSC</option>
                    <option value="metric">Metric Certificate</option>
                    <option value="marksheet">Marksheet</option>
                    <option value="others">Others</option>
                  </Select>
                  <div
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#3B60C9] transition-colors",
                      studentshipProofFile && "border-[#3B60C9] bg-blue-50"
                    )}
                    onDrop={handleStudentshipProofDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => studentshipProofFileInputRef.current?.click()}
                  >
                    <input
                      ref={studentshipProofFileInputRef}
                      type="file"
                      className="hidden"
                      accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                      onChange={handleStudentshipProofFileChange}
                    />
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-1">
                      {studentshipProofFile ? studentshipProofFile.name : "Upload any Files or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Doc, Pdf, Excel Sheet, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>

                {/* 12. Permanent Address */}
                <div>
                  <label htmlFor="permanentAddress" className="block text-sm font-medium mb-2">
                    12. Permanent Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="permanentAddress"
                    type="text"
                    placeholder="Enter permanent address"
                    required
                  />
                </div>

                {/* 14. Mobile/Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    14. Mobile/Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter mobile/phone number"
                    required
                  />
                </div>

                {/* 16. Designation */}
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium mb-2">
                    16. Designation
                  </label>
                  <Input
                    id="designation"
                    type="text"
                    placeholder="Enter designation"
                  />
                </div>

                {/* 19. T-shirt Size */}
                <div>
                  <label htmlFor="tshirtSize" className="block text-sm font-medium mb-2">
                    19. T-shirt Size <span className="text-red-500">*</span>
                  </label>
                  <Select id="tshirtSize" required>
                    <option value="">Select T-shirt size</option>
                    <option value="xxxl">XXXL</option>
                    <option value="xxl">XXL</option>
                    <option value="xl">XL</option>
                    <option value="l">L</option>
                    <option value="m">M</option>
                    <option value="s">S</option>
                  </Select>
                </div>

                {/* 20. Entry Fee */}
                <div>
                  <label htmlFor="entryFee" className="block text-sm font-medium mb-2">
                    20. Entry Fee
                  </label>
                  <Input
                    id="entryFee"
                    type="number"
                    placeholder="Enter entry fee amount"
                  />
                </div>

                {/* 23. Number of years for payment */}
                <div>
                  <label htmlFor="paymentYears" className="block text-sm font-medium mb-2">
                    23. Number of years for payment
                  </label>
                  <Select 
                    id="paymentYears"
                    value={paymentYears}
                    onChange={(e) => setPaymentYears(e.target.value)}
                  >
                    <option value="">Select number of years</option>
                    <option value="1">1 Year</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                  </Select>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#3B60C9] border-gray-300 rounded focus:ring-[#3B60C9]"
                  required
                />
                <span className="text-sm text-gray-700">
                  Above information is correct. I must abide by the rules & regulations of this association. I will not demand my paid amount as entry fee of membership even after cancellation/rejection/withdrawal of membership. I agree to the above terms and conditions.
                </span>
              </label>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-[#3B60C9] hover:underline font-medium">
                  Login
                </Link>
              </p>
              <Button
                type="submit"
                className="bg-[#3B60C9] hover:bg-[#2d4fa8] text-white px-8 py-2 rounded-md transition-colors"
              >
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
