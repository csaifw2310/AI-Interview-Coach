export default function AuthLayout({
  title,
  subtitle,
  children
}) {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center p-5">

      <div className="w-full max-w-5xl bg-white rounded-[35px] overflow-hidden shadow-2xl flex">

        <div className="hidden md:flex w-[45%] bg-[#343762] text-white flex-col items-center justify-center px-10">

          <div className="flex flex-col items-center">
  {/* Logo Icon */}
  <div className="mb-4">
    <div className="relative w-20 h-20">
      {/* Outer Circle */}
      <div className="absolute inset-0 rounded-full border-4 border-white"></div>

      {/* AI Circuit Lines */}
      <div className="absolute -left-6 top-4 w-6 h-[2px] bg-white"></div>
      <div className="absolute -left-6 top-8 w-6 h-[2px] bg-white"></div>
      <div className="absolute -left-6 top-12 w-6 h-[2px] bg-white"></div>

      <div className="absolute -left-8 top-[14px] w-2 h-2 rounded-full bg-white"></div>
      <div className="absolute -left-8 top-[30px] w-2 h-2 rounded-full bg-white"></div>
      <div className="absolute -left-8 top-[46px] w-2 h-2 rounded-full bg-white"></div>

      {/* Person Icon */}
      <div className="absolute left-1/2 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>

      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-8 h-10 rounded-t-full bg-white"></div>
    </div>
  </div>

  {/* Brand Name */}
  <h1 className="text-3xl font-bold text-white text-center">
    AI Interview Coach
  </h1>

  {/* Slogan */}
  <p className="mt-2 text-sm text-white/80 text-center">
    Prepare Smart. Practice Confident. Succeed Faster.
  </p>
</div>
<br />

          <h3 className="text-4xl font-semibold text-center leading-tight mb-7">
            {title}
          </h3>

          <p className="text-center text-gray-300 leading-8 max-w-sm">
            {subtitle}
          </p>

        </div>

        <div className="w-full md:w-[55%] px-10 py-14">
          {children}
        </div>

      </div>

    </div>
  );
}