import { Button } from '@/components/ui/button'

interface Member {
  id: string
  name: string
  title: string
  kuId: string
  membershipNo: string
  membershipStatus: 'General Member' | 'Life Member' | 'Executive Member'
}

const demoMembers: Member[] = [
  {
    id: '1',
    name: 'Rakibul Islam',
    title: 'Lecturer',
    kuId: 'Ms240807',
    membershipNo: 'GM005403',
    membershipStatus: 'General Member',
  },
  {
    id: '2',
    name: 'Fatima Ahmed',
    title: 'Software Engineer',
    kuId: 'Ms230512',
    membershipNo: 'LM002145',
    membershipStatus: 'Life Member',
  },
  {
    id: '3',
    name: 'Mohammad Hasan',
    title: 'Doctor',
    kuId: 'Ms220301',
    membershipNo: 'EM001234',
    membershipStatus: 'Executive Member',
  },
  {
    id: '4',
    name: 'Ayesha Rahman',
    title: 'Teacher',
    kuId: 'Ms250609',
    membershipNo: 'GM005404',
    membershipStatus: 'General Member',
  },
  {
    id: '5',
    name: 'Karim Uddin',
    title: 'Business Analyst',
    kuId: 'Ms240115',
    membershipNo: 'LM002146',
    membershipStatus: 'Life Member',
  },
  {
    id: '6',
    name: 'Nusrat Jahan',
    title: 'Engineer',
    kuId: 'Ms230825',
    membershipNo: 'GM005405',
    membershipStatus: 'General Member',
  },
  {
    id: '7',
    name: 'Shahidul Islam',
    title: 'Professor',
    kuId: 'Ms210420',
    membershipNo: 'EM001235',
    membershipStatus: 'Executive Member',
  },
  {
    id: '8',
    name: 'Rashida Begum',
    title: 'Nurse',
    kuId: 'Ms250101',
    membershipNo: 'GM005406',
    membershipStatus: 'General Member',
  },
  {
    id: '9',
    name: 'Tariqul Hasan',
    title: 'Accountant',
    kuId: 'Ms240708',
    membershipNo: 'LM002147',
    membershipStatus: 'Life Member',
  },
  {
    id: '10',
    name: 'Sultana Khatun',
    title: 'Lawyer',
    kuId: 'Ms230203',
    membershipNo: 'GM005407',
    membershipStatus: 'General Member',
  },
  {
    id: '11',
    name: 'Abdul Kader',
    title: 'Manager',
    kuId: 'Ms220615',
    membershipNo: 'EM001236',
    membershipStatus: 'Executive Member',
  },
  {
    id: '12',
    name: 'Nasima Akter',
    title: 'Designer',
    kuId: 'Ms250312',
    membershipNo: 'GM005408',
    membershipStatus: 'General Member',
  },
]

const getStatusButtonColor = (status: Member['membershipStatus']) => {
  switch (status) {
    case 'General Member':
      return 'bg-[#3B60C9] hover:bg-[#2d4ba3]'
    case 'Life Member':
      return 'bg-green-600 hover:bg-green-700'
    case 'Executive Member':
      return 'bg-purple-600 hover:bg-purple-700'
    default:
      return 'bg-[#3B60C9] hover:bg-[#2d4ba3]'
  }
}

export function Membership() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-7xl">
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-semibold" style={{ color: '#021E40' }}>
            Membership
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: '#021E40' }}>
            Our Members
          </h1>
        </div>
        <p className="text-sm md:text-base leading-relaxed md:leading-[26px]" style={{ color: '#021E40' }}>
          Meet our distinguished alumni members who are making a difference in their respective fields and contributing to the growth of our community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {demoMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-100"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Member Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-[#021E40] mb-1 truncate">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-[#021E40] mb-2">
                  {member.title}
                </p>
                <div className="space-y-1 mb-3">
                  <p className="text-xs sm:text-sm text-[#021E40]">
                    <span className="text-[#021E40]">KU ID :</span>{' '}
                    <span className="text-[#021E40] font-medium">{member.kuId}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#021E40]">
                    <span className="text-[#021E40]">Membership No :</span>{' '}
                    <span className="text-[#021E40] font-medium">{member.membershipNo}</span>
                  </p>
                </div>
                <Button
                  className={`${getStatusButtonColor(member.membershipStatus)} text-white text-xs sm:text-sm px-3 py-1.5 h-auto rounded-md font-medium`}
                >
                  {member.membershipStatus}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
