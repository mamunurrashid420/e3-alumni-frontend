import { useState, useEffect } from 'react'
import { apiClient } from '@/api/client'
import type { Download } from '@/types/api'
import { Download as DownloadIcon } from 'lucide-react'

export function Downloads() {
  const [downloads, setDownloads] = useState<Download[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    apiClient
      .getDownloads()
      .then((res) => {
        if (!cancelled) setDownloads(res.data)
      })
      .catch(() => {
        if (!cancelled) setError('Failed to load downloads.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="w-full">
      <section className="w-full py-6 md:py-8 lg:py-10 bg-gradient-to-br from-[#3B60C9]/10 to-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
          <div className="flex flex-col items-center text-center gap-3 md:gap-4">
            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#3B60C9] text-white mb-2">
              <DownloadIcon className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-black">
              Downloads
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-3xl text-black">
              Download documents and files shared by the alumni association
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-6 md:py-8 lg:py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <div className="w-10 h-10 border-4 border-gray-200 border-t-[#3B60C9] rounded-full animate-spin" />
              <p className="text-black">Loading downloads...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10">
              <p className="text-black">{error}</p>
            </div>
          ) : downloads.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-black">No downloads available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {downloads.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 p-6 md:p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
                  style={{
                    background: '#FFFFFF',
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: '#3B60C9' }}
                  >
                    <DownloadIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-black line-clamp-3">{item.description}</p>
                  )}
                  {item.file_url ? (
                    <a
                      href={item.file_url}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                      style={{ background: '#3B60C9' }}
                    >
                      <DownloadIcon className="w-4 h-4" />
                      Download
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
