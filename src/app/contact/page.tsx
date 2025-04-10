import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Reach out for a free estimate or emergency electrical service in Curaçao"
        bgImage="/images/contact-header.jpg"
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-[#d19829] mb-6"></div>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Have a question or need an estimate? Fill out the form and our
                electrical experts will get back to you promptly. We provide
                reliable electrical solutions throughout Curaçao.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center text-[#d19829]">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      Phone
                    </h3>
                    <p className="text-lg">+5999 5297671</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center text-[#d19829]">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      WhatsApp
                    </h3>
                    <p className="text-lg">+5999 5297671</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Message us anytime for quick responses
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center text-[#d19829]">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      Email
                    </h3>
                    <p className="text-lg">info@truehomeelectric.com</p>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center text-[#d19829]">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      Location
                    </h3>
                    <p className="text-lg">Willemstad, Curaçao</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving all areas in Curaçao
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19829]/10 rounded-full flex items-center justify-center text-[#d19829]">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-800">
                      Hours
                    </h3>
                    <p className="text-lg">Monday - Friday: 8am - 6pm</p>
                    <p className="text-lg">Saturday: 9am - 2pm</p>
                    <p className="text-lg">
                      Sunday: Closed (Emergency service available)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Send Us a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Service Area
            </h2>
            <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              We proudly serve all areas in Curaçao, providing reliable
              electrical solutions to homes and businesses.
            </p>
          </div>

        

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              We provide electrical services throughout Curaçao, including these
              popular areas:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Willemstad</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Jan Thiel</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Punda</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Otrobanda</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Mambo Beach</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Santa Barbara</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Saliña</span>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <span className="font-medium">Banda Abou</span>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Not Sure If We Serve Your Area?
            </h3>
            <p className="text-gray-700 mb-6">
              Contact us today to confirm service availability and schedule a
              free estimate for your electrical needs.
            </p>
            <a
              href="tel:+59995297671"
              className="px-6 py-3 bg-[#d19829] text-white rounded-md font-medium hover:bg-[#c08820] transition-colors inline-flex items-center"
            >
              <FaPhone className="mr-2" />
              Call +5999 5297671
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
