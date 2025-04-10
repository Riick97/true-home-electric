import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function PageHeader({
  title,
  description,
  bgImage,
}: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-[#062c37]/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="container relative z-20 text-white text-center mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {title}
        </h1>
        <div className="w-20 h-1 bg-[#d19829] mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto text-[#f2e2c4]">
          {description}
        </p>

        {/* Optional Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-[#d19829]/20 rounded-full hidden lg:block"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-[#d19829]/20 rounded-full hidden lg:block"></div>
      </div>
    </section>
  );
}
