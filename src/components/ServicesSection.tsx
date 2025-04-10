import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Residential",
      description: "Complete electrical solutions for your home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      link: "/services#residential",
    },
    {
      title: "Commercial",
      description: "Keep your business running smoothly",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      link: "/services#commercial",
    },
    {
      title: "Emergency",
      description: "24/7 emergency electrical services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      link: "/services#emergency",
    },
    {
      title: "Installations",
      description: "New fixtures, panels, and systems",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      link: "/services#installations",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Electrical Services
          </h2>
          <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            From simple repairs to complex installations, our team of licensed
            electricians has you covered with reliable electrical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <span
              // href={service.span}
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 bg-[#d19829]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d19829]/20 transition-colors text-[#d19829]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#d19829] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>

              {/* <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-[#d19829] inline-flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div> */}
            </span>
          ))}
        </div>

        {/* <div className="text-center mt-14">
          <Link
            href="/services"
            className="px-8 py-3 bg-[#d19829] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div> */}

        {/* Trust Banner */}
        <div className="mt-20 bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-16 h-16 bg-[#d19829]/10 rounded-full flex items-center justify-center mr-4 text-[#d19829]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-600">
                We stand behind all our electrical work
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
          >
            Schedule Service
          </Link>
        </div>
      </div>
    </section>
  );
}
