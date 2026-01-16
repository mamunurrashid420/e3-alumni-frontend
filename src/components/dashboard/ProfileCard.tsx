import { Edit } from 'lucide-react'

export function ProfileCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-black">Profile</h3>
        <button className="text-black/70 hover:text-[#3B60C9] transition-colors">
          <Edit className="w-5 h-5" />
        </button>
      </div>

      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-2xl font-bold text-black/70">LS</span>
        </div>
        <h4 className="text-lg font-bold text-black mb-1">Lyana Stark</h4>
        <p className="text-sm text-black/70 mb-1">Data Analyst</p>
        <p className="text-sm text-black/60">Batch: 1998</p>
      </div>
    </div>
  )
}
