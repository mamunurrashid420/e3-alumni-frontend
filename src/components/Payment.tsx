import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/api/client'
import { toast } from 'sonner'
import type { Payment as PaymentType } from '@/types/api'

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
  const [payments, setPayments] = useState<PaymentType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPayments = async () => {
      try {
        setIsLoading(true)
        // Note: Current backend API only allows super admins to view payments
        // Members cannot view their own payments through the API yet
        // This will show an empty state for now
        setPayments([])
        setError('Payment history is currently only available to administrators.')
      } catch (err: any) {
        setError(err?.message || 'Failed to load payments')
        toast.error('Failed to load payment history')
      } finally {
        setIsLoading(false)
      }
    }

    loadPayments()
  }, [])

  const filteredPayments = payments.filter((payment) =>
    payment.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.payment_purpose?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    payment.member_id?.toLowerCase().includes(searchQuery.toLowerCase())
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
        <Link to="/make-payment">
          <Button className="bg-[#3B60C9] hover:bg-[#3B60C9]/90 text-white">
            Make payment
          </Button>
        </Link>
      </div>

      {/* Error or Info Message */}
      {error && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Payment Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {isLoading ? (
          <div className="px-6 py-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#3B60C9]"></div>
            <p className="mt-4 text-sm text-gray-600">Loading payments...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider w-12">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Payment Purpose
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                    Date
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
                        {payment.payment_purpose.replace(/_/g, ' ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        ৳{payment.payment_amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            payment.status === 'APPROVED'
                              ? 'bg-green-100 text-green-800'
                              : payment.status === 'REJECTED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {new Date(payment.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-sm text-gray-500">
                      {error ? 'Payment history is not available' : 'No payments found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
