import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1590769620285-6966e6e0f929"
          alt="Electrician working on panel"
          fill
          priority
          className="object-cover brightness-40"
        />
        <div className="absolute inset-0 bg-[#062c37]/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Reliable Electrical Solutions for Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#f2e2c4]">
            Professional electrical services with licensed experts available
            24/7 in Curaçao
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium text-lg hover:bg-[#c08820] transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 bg-white text-[#062c37] rounded-md font-medium text-lg hover:bg-[#f2e2c4] transition-colors"
            >
              Our Services
            </Link>
          </div>

          {/* Emergency Call Box */}
          <div className="mt-12 bg-[#d19829]/90 p-5 rounded-lg inline-flex items-center shadow-lg">
            <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-[#062c37]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-white/90">
                24/7 Emergency Service
              </p>
              <p className="text-xl font-bold">+5999 5297671</p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center space-x-6">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
              <p className="text-sm font-medium">Licensed & Insured</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
              <p className="text-sm font-medium">Same-Day Service</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
              <p className="text-sm font-medium">100% Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
