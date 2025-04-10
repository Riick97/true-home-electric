import Image from "next/image";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#062c37]">
              Your Trusted Local Electrical Experts
            </h2>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              With over 7 years of experience, True Home Electric provides
              professional, reliable electrical solutions for homes and
              businesses in Curaçao. Our licensed and insured team is dedicated
              to quality workmanship and customer satisfaction on every project.
            </p>

            {/* Service Highlights */}
            <div className="mb-8 grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#d19829] rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Residential</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#d19829] rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Commercial</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#d19829] rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Emergency</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#d19829] rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-medium">Installations</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-[#062c37] text-white rounded-md font-medium hover:bg-[#0a3e4e] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium hover:bg-[#c08820] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-[450px] rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/hero1.png"
              alt="Electrician working"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#062c37]/80 to-transparent py-4 px-5">
              <p className="text-white font-medium">
                Edraidel Angela, Master Electrician
              </p>
              <p className="text-[#f2e2c4] text-sm">7+ Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
