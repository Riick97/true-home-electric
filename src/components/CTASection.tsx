import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#d19829]/90 to-[#d19829] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#d19829]/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#d19829]/10 rounded-tl-full"></div>

          <svg
            className="w-12 h-12 mx-auto mb-6 text-[#d19829]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>

          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-600">
            Contact us today for a free estimate on your electrical project
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium text-lg hover:bg-[#c08820] transition-colors"
            >
              Request a Free Quote
            </Link>
            <Link
              href="tel:+59995297671"
              className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium text-lg hover:bg-gray-200 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-[#d19829]"
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
              Call +5999 5297671
            </Link>
          </div>

          <div className="mt-8 flex justify-center items-center">
            <span className="text-sm text-gray-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Licensed & Insured
            </span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Fast Response Time
            </span>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-sm text-gray-500 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-green-500"
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
              Satisfaction Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
