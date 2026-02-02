import { useEffect, useState } from 'react'
import { apiClient } from '@/api/client'
import type { BatchRepresentative } from '@/types/api'

export function BatchRepresentatives() {
  const [items, setItems] = useState<BatchRepresentative[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    apiClient
      .getBatchRepresentatives()
      .then((res) => {
        setItems(res.data)
      })
      .catch(() => setError('Failed to load data'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary-custom text-white px-6 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Batch Representatives</h1>
            <p className="text-sm sm:text-base mt-1 opacity-90">
              Batch representatives by SSC batch
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
              <p className="text-center py-8 text-black">No representatives to display.</p>
            )}
            {!loading && !error && items.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((row) => (
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
                      {row.ssc_batch && (
                        <p className="text-sm font-medium text-black">{row.ssc_batch}</p>
                      )}
                      {row.mobile_number && (
                        <p className="text-sm text-black">
                          <a href={`tel:${row.mobile_number}`} className="hover:underline">
                            {row.mobile_number}
                          </a>
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
