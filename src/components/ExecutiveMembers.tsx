import executiveMembersPdf from '@/assets/documents/executive-members.pdf'

export function ExecutiveMembers() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#3B60C9] text-white px-6 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Executive Members</h1>
            <p className="text-sm sm:text-base mt-1 opacity-90">
              List of Executive Committee Members
            </p>
          </div>
          <div className="p-4 sm:p-6">
            <div className="w-full h-[600px] sm:h-[800px] lg:h-[900px] border border-gray-300 rounded-lg overflow-hidden">
              <iframe
                src={executiveMembersPdf}
                className="w-full h-full"
                title="Executive Members PDF"
              />
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={executiveMembersPdf}
                download="executive-members.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B60C9] text-white rounded-lg hover:bg-[#2d4ba3] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
