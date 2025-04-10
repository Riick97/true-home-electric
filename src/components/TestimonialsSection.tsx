import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      image: "/images/testimonial1.jpg",
      text: "True Home Electric saved the day when our panel started smoking. They arrived within 30 minutes and fixed the issue professionally. Couldn't be happier with their service!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "/images/testimonial2.jpg",
      text: "We've been using True Home Electric for all our office electrical needs for over 5 years. Their team is always prompt, professional, and their work is top-notch.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Property Manager",
      image: "/images/testimonial3.jpg",
      text: "Managing multiple properties requires reliable contractors. True Home Electric has been our go-to for electrical work across all our properties. Dependable and fair pricing.",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Don't just take our word for it - hear from some of our satisfied
            customers about our reliable electrical solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#d19829] flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-[#d19829]"
                        : "text-gray-200"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center border-t pt-4 border-gray-100">
                {/* <div className="w-14 h-14 rounded-full overflow-hidden relative mr-4 border-2 border-[#d19829]/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Call-to-Action */}
        <div className="text-center mt-16">
          <p className="text-lg mb-4 text-gray-700">
            Experience our exceptional electrical services for yourself
          </p>
          {/* <a
            href="https://www.google.com/search?q=true+home+electric+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#d19829] font-medium hover:text-[#c08820] transition-colors"
          >
            Read more reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a> */}
        </div>
      </div>
    </section>
  );
}
