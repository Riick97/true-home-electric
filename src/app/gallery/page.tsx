import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function Gallery() {
  const projects = [
    {
      title: "Commercial Office Lighting Upgrade",
      description:
        "Complete lighting retrofit for a 10,000 sq ft office space, replacing outdated fluorescent fixtures with energy-efficient LED lighting.",
      category: "Commercial",
      location: "Willemstad Business Center",
      images: [
        "/images/gallery/commercial1.png",
      ],
    },
    {
      title: "Home Electrical Panel Upgrade",
      description:
        "Upgraded an outdated 100A electrical panel to a modern 200A panel with enhanced safety features and capacity for future expansion.",
      category: "Residential",
      location: "Jan Thiel",
      images: [
        "/images/gallery/residential1.png",
      ],
    },
  
  ];

  return (
    <>
      <PageHeader
        title="Project Gallery"
        description="Browse our recent electrical projects and installations across Curaçao"
        bgImage="/images/gallery-header.png"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Recent Projects
            </h2>
            <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Take a look at some of our recent electrical installations and
              projects across residential, commercial, and industrial settings
              in Curaçao.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <div className="inline-block px-4 py-1 bg-[#d19829]/10 text-[#d19829] rounded-full mb-4 font-medium">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center text-gray-500 mb-6">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    {/* <button className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium hover:bg-[#c08820] transition-colors inline-flex items-center">
                      View Project Details
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
                    </button> */}
                  </div>
                  <div className="grid grid-cols-2 gap-3 p-3">
                    {project.images.slice(0, 4).map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="relative aspect-square group overflow-hidden rounded-lg"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#062c37]/0 group-hover:bg-[#062c37]/20 transition-all duration-300 flex items-center justify-center">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-[#d19829]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center mt-12">
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium hover:bg-gray-200 transition-colors inline-flex items-center">
              Load More Projects
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#d19829]/90 to-[#d19829]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Need Similar Electrical Work?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Contact us today to discuss your project and get a free estimate
              for any electrical work in Curaçao.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium text-lg hover:bg-[#c08820] transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium text-lg hover:bg-gray-200 transition-colors border border-gray-200"
              >
                View Our Services
              </Link>
            </div>

            <div className="mt-8 flex justify-center items-center flex-wrap gap-6">
              <div className="flex items-center">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-gray-700">Licensed & Insured</span>
              </div>

              <div className="flex items-center">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-700">Quick Turnaround</span>
              </div>

              <div className="flex items-center">
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span className="text-gray-700">Competitive Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
