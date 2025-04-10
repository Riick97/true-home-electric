import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYelp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  src="/logo_black.png"
                  alt="True Home Electric Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-wide text-gray-800">
                  THE
                </span>
                <span className="text-sm text-gray-600">
                  True Home Electric
                </span>
              </div>
            </div>
            <p className="mb-4 text-gray-600">
              Your trusted local electrician providing reliable electrical
              solutions for residential and commercial clients in Curaçao.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-[#d19829] hover:text-[#c08820] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-[#d19829] hover:text-[#c08820] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-[#d19829] hover:text-[#c08820] transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className="flex items-center mb-2 text-gray-700">
              <FaPhone className="mr-2 text-[#d19829]" />
              <span>+5999 5297671</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="mr-2 text-[#d19829]" />
              <span>info@truehomeelectric.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <span
                  
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Residential Services
                </span>
              </li>
              <li>
                <span
                  
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Commercial Services
                </span>
              </li>
              <li>
                <span
                  
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Emergency Services
                </span>
              </li>
              <li>
                <span
                  
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Specialty Installations
                </span>
              </li>
              <li>
                <span
                  
                  className="text-gray-600 hover:text-[#d19829] transition-colors"
                >
                  Repairs & Troubleshooting
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Business Hours
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#d19829]/10 rounded-lg border border-[#d19829]/20">
              <h4 className="font-bold mb-2 text-gray-800">
                24/7 Emergency Service
              </h4>
              <p className="text-gray-600">
                Available for urgent electrical issues outside of normal
                business hours.
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} True Home Electric. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-500 mr-2">
              Made with ⚡ in Curaçao
            </span>
            <span className="text-4xl ">
            🇨🇼
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
