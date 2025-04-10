import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const services = [
    {
      id: "residential",
      title: "Residential Services",
      description:
        "Complete electrical solutions for your home, from repairs to full installations.",
      image: "/images/residential.png",
      items: [
        "Electrical repairs and troubleshooting",
        "Lighting installation and upgrades",
        "Circuit breaker panel upgrades",
        "Whole house surge protection",
        "Smart home wiring and automation",
        "Ceiling fan installation",
        "GFCI outlet installation",
        "Home electrical safety inspections",
      ],
    },
    {
      id: "commercial",
      title: "Commercial Services",
      description:
        "Keep your business running smoothly with our professional commercial electrical services.",
      image: "/images/commercial.png",
      items: [
        "Commercial lighting design and installation",
        "Office electrical wiring and repairs",
        "Electrical system upgrades",
        "Emergency backup systems",
        "Energy efficiency audits and solutions",
        "Code compliance updates",
        "Machinery and equipment wiring",
        "Preventative maintenance programs",
      ],
    },
    {
      id: "emergency",
      title: "Emergency Services",
      description:
        "Available 24/7 for all your electrical emergencies in Curaçao.",
      image: "/images/emergency.png",
      items: [
        "Power outage troubleshooting",
        "Electrical fire safety inspections",
        "Circuit breaker tripping issues",
        "Electrical failure diagnostics",
        "Storm damage repairs",
        "Electrical hazard elimination",
        "Emergency lighting installation",
        "24/7 rapid response service",
      ],
    },
    {
      id: "specialty",
      title: "Specialty Services",
      description: "Specialized electrical solutions for unique requirements.",
      image: "/images/specialty.png",
      items: [
        "EV charging station installation",
        "Solar panel system wiring",
        "Generator installation and wiring",
        "Home theater and audio system wiring",
        "Outdoor lighting design and installation",
        "Pool and spa electrical systems",
        "Security and surveillance system wiring",
        "Smart home technology integration",
      ],
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Electrical Services"
        description="Professional electrical solutions for residential and commercial clients in Curaçao"
        bgImage="/images/services-header.png"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Comprehensive Electrical Solutions
            </h2>
            <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              From simple repairs to complex installations, our team of licensed
              electricians provides a full range of reliable electrical services
              throughout Curaçao to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                items={service.items}
                image={service.image}
              />
            ))}
          </div>

          <div className="mt-16 p-8 bg-gray-50 rounded-lg border border-gray-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="w-20 h-20 bg-[#d19829]/10 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:w-3/4 text-center md:text-left md:pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Custom Electrical Services
                </h3>
                <p className="text-gray-700">
                  Don't see exactly what you need? We offer customized
                  electrical solutions tailored to your specific requirements.
                  Contact us to discuss your unique project needs, and our
                  skilled electricians will develop a personalized approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#d19829]/90 to-[#d19829]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Not Sure What You Need?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Our experts are ready to help diagnose your electrical issues and
              recommend the right solution for your home or business in Curaçao.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium text-lg hover:bg-[#c08820] transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="tel:+59995297671"
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium text-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
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

            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Fast Response</h3>
                <p className="text-sm text-gray-600">
                  Same-day service available
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#d19829]"
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
                <h3 className="font-medium text-gray-800">Licensed Experts</h3>
                <p className="text-sm text-gray-600">
                  Fully trained and certified
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800">Upfront Pricing</h3>
                <p className="text-sm text-gray-600">
                  No hidden fees or surprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
