import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface PaymentRecord {
  id: number
  paymentTitle: string
  paymentAmount: string
  paymentMethod: string
  transactionId: string
}

const mockPayments: PaymentRecord[] = [
  {
    id: 1,
    paymentTitle: 'South-western Coastal Area and Sundarbans',
    paymentAmount: 'Bkash',
    paymentMethod: 'Storm Surge',
    transactionId: 'Storm Surge',
  },
  {
    id: 2,
    paymentTitle: 'Haor and Flash Floods Area',
    paymentAmount: 'Nagad',
    paymentMethod: 'Flash Flood',
    transactionId: 'Flash Flood',
  },
  {
    id: 3,
    paymentTitle: 'South-eastern Coastal Area',
    paymentAmount: 'Bkash',
    paymentMethod: 'Cyclone',
    transactionId: 'Cyclone',
  },
  {
    id: 4,
    paymentTitle: 'South-western Coastal Area and Sundarbans',
    paymentAmount: 'Nagad',
    paymentMethod: 'Salinity',
    transactionId: 'Salinity',
  },
  {
    id: 5,
    paymentTitle: 'Urban Areas',
    paymentAmount: 'Bkash',
    paymentMethod: 'Urban Flood',
    transactionId: 'Urban Flood',
  },
  {
    id: 6,
    paymentTitle: 'South-western Coastal Area and Sundarbans',
    paymentAmount: 'Bkash',
    paymentMethod: 'Storm Surge',
    transactionId: 'Storm Surge',
  },
  {
    id: 7,
    paymentTitle: 'Haor and Flash Floods Area',
    paymentAmount: 'Nagad',
    paymentMethod: 'Flash Flood',
    transactionId: 'Flash Flood',
  },
  {
    id: 8,
    paymentTitle: 'South-eastern Coastal Area',
    paymentAmount: 'Bkash',
    paymentMethod: 'Cyclone',
    transactionId: 'Cyclone',
  },
  {
    id: 9,
    paymentTitle: 'South-western Coastal Area and Sundarbans',
    paymentAmount: 'Nagad',
    paymentMethod: 'Salinity',
    transactionId: 'Salinity',
  },
  {
    id: 10,
    paymentTitle: 'Urban Areas',
    paymentAmount: 'Bkash',
    paymentMethod: 'Urban Flood',
    transactionId: 'Urban Flood',
  },
]

export function Payment() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPayments = mockPayments.filter((payment) =>
    payment.paymentTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.paymentAmount.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Payment List</h1>

      {/* Action Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
          />
        </div>

        {/* Make Payment Button */}
        <Button className="bg-[#3B60C9] hover:bg-[#3B60C9]/90 text-white">
          Make payment
        </Button>
      </div>

      {/* Payment Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider w-12">
                  #
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Payment Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Payment Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                  Transaction ID
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.length > 0 ? (
                filteredPayments.map((payment, index) => (
                  <tr
                    key={payment.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F9]'}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {payment.paymentTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {payment.paymentAmount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {payment.paymentMethod}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {payment.transactionId}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm">
                    No payments found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
