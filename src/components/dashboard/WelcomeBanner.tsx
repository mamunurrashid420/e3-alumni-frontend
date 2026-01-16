export function WelcomeBanner() {
  return (
    <div className="bg-[#3B60C9] rounded-lg p-8 text-white relative overflow-hidden mb-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-20 w-32 h-32 rounded-full bg-white" />
        <div className="absolute bottom-8 right-40 w-24 h-24 rounded-full bg-white" />
        <div className="absolute top-12 left-32 w-16 h-16 rounded-full bg-white" />
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-4">Hello, Lyana Stark!</h2>
        <p className="text-white/90 text-lg leading-relaxed max-w-3xl">
          Welcome to your dashboard. You can update your information here. You
          can also check your notification and explore related events from this
          page. We allow you to download your{' '}
          <a
            href="#"
            className="underline font-semibold hover:text-white/80 transition-colors"
          >
            Membership Certificate
          </a>{' '}
          here.
        </p>
      </div>
    </div>
  )
}
