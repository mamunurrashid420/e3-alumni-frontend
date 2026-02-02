import { useEffect, useState } from 'react'
import { apiClient } from '@/api/client'
import type { HonorBoardEntry } from '@/types/api'

export function HonorBoard() {
  const [items, setItems] = useState<HonorBoardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiClient
      .getHonorBoard()
      .then((res) => {
        setItems(res.data)
      })
      .catch(() => setError('Failed to load data'))
      .finally(() => setLoading(false))
  }, [])

  const presidentEntries = items.filter((e) => e.role === 'President')
  const secretaryEntries = items.filter((e) => e.role === 'GeneralSecretary')

  const renderCardGrid = (title: string, entries: HonorBoardEntry[]) => (
    <div className="mb-10 last:mb-0">
      <h2 className="text-lg font-semibold text-black mb-4">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {entries.map((row) => (
          <article
            key={row.id}
            className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="flex justify-center pt-6 pb-2">
              {row.photo ? (
                <img
                  src={row.photo}
                  alt=""
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-gray-100"
                />
              ) : (
                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center text-black/60 text-2xl font-medium">
                  {row.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="px-4 pb-4 text-center space-y-1 text-black">
              <h3 className="font-semibold text-black">{row.name}</h3>
              {row.member_id && (
                <p className="text-sm text-black">Member ID: {row.member_id}</p>
              )}
              {row.durations && (
                <p className="text-sm text-black">{row.durations}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-custom text-white px-6 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Honor Board</h1>
            <p className="text-sm sm:text-base mt-1 opacity-90">
              President and General Secretary
            </p>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            {loading && (
              <div className="flex justify-center py-12">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-primary-custom rounded-full animate-spin" />
              </div>
            )}
            {error && (
              <p className="text-center py-8 text-red-600">{error}</p>
            )}
            {!loading && !error && items.length === 0 && (
              <p className="text-center py-8 text-black">No entries to display.</p>
            )}
            {!loading && !error && items.length > 0 && (
              <>
                {renderCardGrid('President', presidentEntries)}
                {renderCardGrid('General Secretary', secretaryEntries)}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
