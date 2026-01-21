import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className=" text-lg">Get in touch with the Ex-Students Association Of Textile Engineering College,Barishal (ESAT-B).</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="bg-[#3B60C9] rounded-full p-3">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Address</h3>
              <p className=" leading-relaxed">
                Hossain Tower, 5th Floor, Sector #7, Uttara, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Hotline Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="bg-[#3B60C9] rounded-full p-3">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Hotline</h3>
              <p className="">
                <a href="tel:+8801772125014" className="hover:text-[#3B60C9] transition-colors">
                  +880 1772-125014
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="bg-[#3B60C9] rounded-full p-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="">
                <a href="https://wa.me/8801322918182" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B60C9] transition-colors">
                  +880 1322-918182
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-start gap-4">
            <div className="bg-[#3B60C9] rounded-full p-3">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="">
                <a href="mailto:aiftinfo@gmail.com" className="hover:text-[#3B60C9] transition-colors">
                  aiftinfo@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
