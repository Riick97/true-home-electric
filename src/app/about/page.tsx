import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function About() {
  const team = [
    {
      name: "Edraidel Angela",
      role: "Founder & Master Electrician",
      image: "/images/team1.png",
      bio: "With over 7 years of experience, Edraidel founded True Home Electric with a vision to provide reliable electrical solutions with integrity and exceptional customer service throughout Curaçao.",
    },
  ];

  return (
    <>
      <PageHeader
        title="About True Home Electric"
        description="Your trusted local electrical contractor in Curaçao since 2010"
        bgImage="/images/about-header.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-[#d19829] mb-6"></div>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                Founded in 2010 by Master Electrician Edraidel Angela, True Home
                Electric began as a small residential electrical service in
                Curaçao. With a commitment to quality workmanship and
                exceptional customer service, we quickly gained a reputation as
                the island's most reliable electrical contractor.
              </p>
              <p className="text-lg mb-4 text-gray-700 leading-relaxed">
                As our reputation grew, so did our company. Today, we're proud
                to have a team of skilled electricians serving both residential
                and commercial clients throughout Curaçao. While we've grown in
                size, we've maintained our founding principles: integrity,
                quality, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: to provide safe, reliable electrical
                solutions at fair prices, with a level of professionalism that
                exceeds our customers' expectations.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/andre.png"
                alt="True Home Electric team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062c37]/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Trusted Since 2010</h3>
                <p>Serving homes and businesses across Curaçao</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Why Choose True Home Electric?
            </h2>
            <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#d19829]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d19829]">
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
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Our team consists of fully licensed electricians with proper
                insurance and bonding, ensuring your property is protected
                during all electrical work.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#d19829]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d19829]">
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
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Fast Response
              </h3>
              <p className="text-gray-600">
                With our 24/7 emergency service, we're always available to
                address urgent electrical issues and minimize disruption to your
                home or business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#d19829]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d19829]">
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
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                We stand behind our work with a 100% satisfaction guarantee, and
                we're not satisfied until you're completely happy with the
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Our team of licensed electricians brings decades of combined
              experience to every project, big or small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
              >
                <div className="relative h-128">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-[#d19829] font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Certifications & Affiliations
              </h2>
              <div className="w-20 h-1 bg-[#d19829] mb-6"></div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#d19829]/10 rounded-full flex items-center justify-center mr-4 mt-1 text-[#d19829] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  <div>
                    <span className="font-bold text-gray-800">
                      Licensed Master Electricians
                    </span>
                    <p className="text-gray-600 mt-1">
                      All our work is performed or supervised by licensed master
                      electricians with extensive experience.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#d19829]/10 rounded-full flex items-center justify-center mr-4 mt-1 text-[#d19829] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  <div>
                    <span className="font-bold text-gray-800">
                      Curaçao Chamber of Commerce Member
                    </span>
                    <p className="text-gray-600 mt-1">
                      Registered business ensuring we stay up-to-date with local
                      regulations and industry standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#d19829]/10 rounded-full flex items-center justify-center mr-4 mt-1 text-[#d19829] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  <div>
                    <span className="font-bold text-gray-800">
                      5-Star Customer Rating
                    </span>
                    <p className="text-gray-600 mt-1">
                      Maintaining the highest standards of business ethics and
                      customer satisfaction across Curaçao.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#d19829]/10 rounded-full flex items-center justify-center mr-4 mt-1 text-[#d19829] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  <div>
                    <span className="font-bold text-gray-800">
                      Fully Insured and Bonded
                    </span>
                    <p className="text-gray-600 mt-1">
                      Comprehensive liability insurance and bonding for your
                      peace of mind on every project we undertake.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 mx-auto text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <p className="mt-3 font-medium text-gray-800">
                    Master Electrician License
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 mx-auto text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="mt-3 font-medium text-gray-800">
                    Chamber of Commerce
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40">
                <div className="text-center">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-[#d19829]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 font-medium text-gray-800">
                    5-Star Customer Rating
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-40">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 mx-auto text-[#d19829]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="mt-3 font-medium text-gray-800">
                    Fully Insured
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#d19829]/90 to-[#d19829]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Ready to Work with True Home Electric?
            </h2>
            <p className="text-xl mb-8 text-gray-600">
              Contact us today to discuss your electrical project or schedule a
              service call.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium text-lg hover:bg-[#c08820] transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md font-medium text-lg hover:bg-gray-200 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
