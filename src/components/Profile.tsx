import { useState } from 'react'
import { Camera, Edit, Save } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'Cameron Williamson',
    nameInBengali: '',
    fathersName: 'Jacob Jones',
    gender: 'Male',
    sscMatricYear: '1994',
    highestDegree: 'First-Class Honours',
    presentAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
    permanentAddress: '4517 Washington Ave. Manchester, Kentucky 39495',
    email: 'rianasingh3@email.com',
    phone: '(603) 555-0123',
    profession: 'Corporate',
    instituteName: 'Data Entry Officer (DEO)',
    designation: 'Vice-president',
    tShirtSize: 'XL',
    bloodGroup: '+B',
    membershipType: 'Associate member',
    password: '***********',
    idNo: '123456789',
    passingYear: '1994',
    displayEmail: 'Useremail@email.com',
    displayPhone: '##########',
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    // TODO: Implement save functionality
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-black mb-2">User Profile</h1>
        <div className="h-px bg-gray-200 border-dashed border-t border-gray-300"></div>
      </div>

      {/* User Summary Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="border-t-4 border-dashed border-[#3B60C9] pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Section - Profile Picture and Name */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-bold text-black/70">MW</span>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#3B60C9] rounded-full flex items-center justify-center hover:bg-[#2348B2] transition-colors">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-xl font-bold text-black mb-1">
                  Md. Hosne Mobarak Rubai
                </h2>
                <p className="text-sm text-[#3B60C9] font-medium mb-1">
                  ID No: {formData.idNo}
                </p>
                <p className="text-sm text-[#3B60C9] font-medium">
                  Passing year: {formData.passingYear}
                </p>
              </div>
            </div>

            {/* Right Section - Details */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 border-l border-gray-200 pl-6">
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-black/70">Blood group: </span>
                  <span className="text-sm font-medium text-black">{formData.bloodGroup}</span>
                </div>
                <div>
                  <span className="text-sm text-black/70">Membership Type: </span>
                  <span className="text-sm font-medium text-black">{formData.membershipType}</span>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-black/70">Phone: </span>
                  <span className="text-sm font-medium text-black">{formData.displayPhone}</span>
                </div>
                <div>
                  <span className="text-sm text-black/70">Email: </span>
                  <span className="text-sm font-medium text-black">{formData.displayEmail}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Information Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-black mb-2">Professional information</h2>
            <div className="h-px bg-gray-200 border-dashed border-t border-gray-300"></div>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="text-black/70 hover:text-[#3B60C9] transition-colors p-2"
            >
              <Edit className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <Input
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Father's Name
              </label>
              {isEditing ? (
                <Input
                  value={formData.fathersName}
                  onChange={(e) => handleInputChange('fathersName', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.fathersName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                SSC/Matric Year
              </label>
              {isEditing ? (
                <Input
                  value={formData.sscMatricYear}
                  onChange={(e) => handleInputChange('sscMatricYear', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.sscMatricYear}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Present Address
              </label>
              {isEditing ? (
                <Input
                  value={formData.presentAddress}
                  onChange={(e) => handleInputChange('presentAddress', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.presentAddress}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Email address
              </label>
              {isEditing ? (
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Profession
              </label>
              {isEditing ? (
                <Input
                  value={formData.profession}
                  onChange={(e) => handleInputChange('profession', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.profession}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Institute Name with Workplace
              </label>
              {isEditing ? (
                <Input
                  value={formData.instituteName}
                  onChange={(e) => handleInputChange('instituteName', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.instituteName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Blood Group
              </label>
              {isEditing ? (
                <Input
                  value={formData.bloodGroup}
                  onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.bloodGroup}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Password
              </label>
              <div className="flex items-center gap-2">
                {isEditing ? (
                  <>
                    <Input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full"
                    />
                    <Button
                      variant="link"
                      className="text-[#3B60C9] text-sm px-0"
                      onClick={() => {
                        // TODO: Implement change password functionality
                      }}
                    >
                      Change Password
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-black">{formData.password}</p>
                    <Button
                      variant="link"
                      className="text-[#3B60C9] text-sm px-0"
                      onClick={() => {
                        // TODO: Implement change password functionality
                      }}
                    >
                      Change Password
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Name in (বাংলা)
              </label>
              {isEditing ? (
                <Input
                  value={formData.nameInBengali}
                  onChange={(e) => handleInputChange('nameInBengali', e.target.value)}
                  className="w-full"
                  placeholder="Enter name in Bengali"
                />
              ) : (
                <p className="text-sm text-black">
                  {formData.nameInBengali || '—'}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Gender
              </label>
              {isEditing ? (
                <Select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              ) : (
                <p className="text-sm text-black">{formData.gender}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Highest Degree Obtained
              </label>
              {isEditing ? (
                <Input
                  value={formData.highestDegree}
                  onChange={(e) => handleInputChange('highestDegree', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.highestDegree}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Permanent Address
              </label>
              {isEditing ? (
                <Input
                  value={formData.permanentAddress}
                  onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.permanentAddress}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Phone number
              </label>
              {isEditing ? (
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full"
                />
              ) : (
                <p className="text-sm text-black">{formData.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Designation (Optional)
              </label>
              {isEditing ? (
                <Input
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  className="w-full"
                  placeholder="Enter designation"
                />
              ) : (
                <p className="text-sm text-black">{formData.designation}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                T-Shirt Size
              </label>
              {isEditing ? (
                <Select
                  value={formData.tShirtSize}
                  onChange={(e) => handleInputChange('tShirtSize', e.target.value)}
                  className="w-full"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </Select>
              ) : (
                <p className="text-sm text-black">{formData.tShirtSize}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black/70 mb-2">
                Membership Type
              </label>
              {isEditing ? (
                <Select
                  value={formData.membershipType}
                  onChange={(e) => handleInputChange('membershipType', e.target.value)}
                  className="w-full"
                >
                  <option value="Associate member">Associate member</option>
                  <option value="Life member">Life member</option>
                  <option value="Regular member">Regular member</option>
                </Select>
              ) : (
                <p className="text-sm text-black">{formData.membershipType}</p>
              )}
            </div>
          </div>
        </div>

        {/* Save Changes Button */}
        {isEditing && (
          <div className="flex justify-end mt-6">
            <Button
              onClick={handleSave}
              className="bg-[#3B60C9] hover:bg-[#2348B2] text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save changes
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
