import { useState, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, Upload, Star, GraduationCap } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Registration() {
  const [sscFile, setSscFile] = useState<File | null>(null)
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [paymentReceiptFile, setPaymentReceiptFile] = useState<File | null>(null)
  const [signatureFile, setSignatureFile] = useState<File | null>(null)
  const [membershipType, setMembershipType] = useState('')
  const [paymentYears, setPaymentYears] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)
  
  const sscFileInputRef = useRef<HTMLInputElement>(null)
  const photoFileInputRef = useRef<HTMLInputElement>(null)
  const paymentReceiptFileInputRef = useRef<HTMLInputElement>(null)
  const signatureFileInputRef = useRef<HTMLInputElement>(null)

  const handleSscFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSscFile(e.target.files[0])
    }
  }

  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0])
    }
  }

  const handleSscDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSscFile(e.dataTransfer.files[0])
    }
  }

  const handlePhotoDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPhotoFile(e.dataTransfer.files[0])
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

  const handleSignatureFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSignatureFile(e.target.files[0])
    }
  }

  const handleSignatureDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSignatureFile(e.dataTransfer.files[0])
    }
  }

  // Calculate total amount based on membership type and years
  const calculateTotalAmount = () => {
    if (!membershipType || !paymentYears) return 0
    
    const years = parseInt(paymentYears) || 0
    const baseAmounts: Record<string, number> = {
      'associate': 10000,
      'regular': 5000,
      'lifetime': 50000,
      'honorary': 0
    }
    
    const baseAmount = baseAmounts[membershipType.toLowerCase()] || 0
    return baseAmount * years
  }

  const totalAmount = calculateTotalAmount()

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
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter full name"
                    required
                  />
                </div>

                {/* Father's Name */}
                <div>
                  <label htmlFor="fatherName" className="block text-sm font-medium mb-2">
                    Father's Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fatherName"
                    type="text"
                    placeholder="Enter father's name"
                    required
                  />
                </div>

                {/* SSC/Matric Year */}
                <div>
                  <label htmlFor="yearOfPassing" className="block text-sm font-medium mb-2">
                    SSC/Matric Year <span className="text-red-500">*</span>
                  </label>
                  <Select id="yearOfPassing" required>
                    <option value="">Select year</option>
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

                {/* SSC Certificate/Marksheet */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    SSC Certificate/Marksheet (Optional) <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#3B60C9] transition-colors",
                      sscFile && "border-[#3B60C9] bg-blue-50"
                    )}
                    onDrop={handleSscDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => sscFileInputRef.current?.click()}
                  >
                    <input
                      ref={sscFileInputRef}
                      type="file"
                      className="hidden"
                      accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                      onChange={handleSscFileChange}
                    />
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-1">
                      {sscFile ? sscFile.name : "Upload any Files or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Doc, Pdf, Excel Sheet, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>

                {/* Present Address */}
                <div>
                  <label htmlFor="presentAddress" className="block text-sm font-medium mb-2">
                    Present Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="presentAddress"
                    type="text"
                    placeholder="Enter present address"
                    required
                  />
                </div>

                {/* Email address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Profession */}
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium mb-2">
                    Profession <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="profession"
                    type="text"
                    placeholder="Enter profession"
                    required
                  />
                </div>

                {/* Institute Name with Workplace */}
                <div>
                  <label htmlFor="instituteName" className="block text-sm font-medium mb-2">
                    Institute Name with Workplace <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="instituteName"
                    type="text"
                    placeholder="Enter institute name with workplace"
                    required
                  />
                </div>

                {/* Blood Group */}
                <div>
                  <label htmlFor="bloodGroup" className="block text-sm font-medium mb-2">
                    Blood Group <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="bloodGroup"
                    type="text"
                    placeholder="Enter blood group"
                    required
                  />
                </div>

                {/* Number of years for payment */}
                <div>
                  <label htmlFor="paymentYears" className="block text-sm font-medium mb-2">
                    Number of years for payment
                  </label>
                  <Select 
                    id="paymentYears"
                    value={paymentYears}
                    onChange={(e) => setPaymentYears(e.target.value)}
                  >
                    <option value="">Select options</option>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((year) => (
                      <option key={year} value={year}>
                        {year} {year === 1 ? 'year' : 'years'}
                      </option>
                    ))}
                  </Select>
                </div>

                {/* Payment Mode */}
                <div>
                  <label htmlFor="paymentMode" className="block text-sm font-medium mb-2">
                    Payment Mode <span className="text-red-500">*</span>
                  </label>
                  <Select id="paymentMode" required>
                    <option value="">Select payment mode</option>
                    <option value="bkash">bKash</option>
                    <option value="nagad">Nagad</option>
                    <option value="rocket">Rocket</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="cash">Cash</option>
                  </Select>
                </div>

                {/* Payment Receipt */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Payment Receipt (Optional) <span className="text-red-500">*</span>
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
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Name (বাংলা) */}
                <div>
                  <label htmlFor="nameBengali" className="block text-sm font-medium mb-2">
                    Name (বাংলা) <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="nameBengali"
                    type="text"
                    placeholder="বাংলায় নাম লিখুন"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-2">
                    Gender
                  </label>
                  <Select id="gender">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </div>

                {/* Highest Degree Obtained */}
                <div>
                  <label htmlFor="highestDegree" className="block text-sm font-medium mb-2">
                    Highest Degree Obtained <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="highestDegree"
                    type="text"
                    placeholder="Write here"
                    required
                  />
                </div>

                {/* Beautiful Formal Pic */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Beautiful Formal Pic of You <span className="text-red-500">*</span>
                  </label>
                  <div
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#3B60C9] transition-colors",
                      photoFile && "border-[#3B60C9] bg-blue-50"
                    )}
                    onDrop={handlePhotoDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => photoFileInputRef.current?.click()}
                  >
                    <input
                      ref={photoFileInputRef}
                      type="file"
                      className="hidden"
                      accept=".png,.jpg,.jpeg"
                      onChange={handlePhotoFileChange}
                    />
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-1">
                      {photoFile ? photoFile.name : "Upload any Files or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, JPEG up to 10MB
                    </p>
                  </div>
                </div>

                {/* Permanent Address */}
                <div>
                  <label htmlFor="permanentAddress" className="block text-sm font-medium mb-2">
                    Permanent Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="permanentAddress"
                    type="text"
                    placeholder="Enter permanent address"
                    required
                  />
                </div>

                {/* Phone number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                {/* Designation (Optional) */}
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium mb-2">
                    Designation (Optional)
                  </label>
                  <Input
                    id="designation"
                    type="text"
                    placeholder="Enter designation"
                  />
                </div>

                {/* T-Shirt Size */}
                <div>
                  <label htmlFor="tshirtSize" className="block text-sm font-medium mb-2">
                    T-Shirt Size <span className="text-red-500">*</span>
                  </label>
                  <Select id="tshirtSize" required>
                    <option value="">Select T-shirt size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                    <option value="xxxl">XXXL</option>
                  </Select>
                </div>

                {/* Membership Type */}
                <div>
                  <label htmlFor="membershipType" className="block text-sm font-medium mb-2">
                    Membership Type <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    id="membershipType" 
                    required
                    value={membershipType}
                    onChange={(e) => setMembershipType(e.target.value)}
                  >
                    <option value="">Select package</option>
                    <option value="associate">Associate</option>
                    <option value="regular">Regular</option>
                    <option value="lifetime">Lifetime</option>
                    <option value="honorary">Honorary</option>
                  </Select>
                </div>

                {/* Total Amount to be paid */}
                {totalAmount > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <p className="text-xs text-gray-600 mb-1">Total Amount to be paid</p>
                    {membershipType && paymentYears && (
                      <p className="text-xs text-gray-600 mb-2">
                        {membershipType.charAt(0).toUpperCase() + membershipType.slice(1)} membership for {paymentYears} {parseInt(paymentYears) === 1 ? 'year' : 'years'}: {totalAmount / parseInt(paymentYears)} x {paymentYears}
                      </p>
                    )}
                    <p className="text-lg font-bold text-green-700">
                      Total = {totalAmount.toLocaleString()} ৳
                    </p>
                  </div>
                )}

                {/* Transaction ID */}
                <div>
                  <label htmlFor="transactionId" className="block text-sm font-medium mb-2">
                    Transaction ID <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="transactionId"
                    type="text"
                    placeholder="Enter payment transaction ID"
                    required
                  />
                </div>

                {/* Signature */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Signature
                  </label>
                  <div
                    className={cn(
                      "border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer hover:border-[#3B60C9] transition-colors",
                      signatureFile && "border-[#3B60C9] bg-blue-50"
                    )}
                    onDrop={handleSignatureDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => signatureFileInputRef.current?.click()}
                  >
                    <input
                      ref={signatureFileInputRef}
                      type="file"
                      className="hidden"
                      accept=".doc,.docx,.pdf,.xls,.xlsx,.png,.jpg,.jpeg"
                      onChange={handleSignatureFileChange}
                    />
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-sm text-gray-600 mb-1">
                      {signatureFile ? signatureFile.name : "Upload any Files or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Doc, Pdf, Excel Sheet, PNG, JPG up to 10MB
                    </p>
                  </div>
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
