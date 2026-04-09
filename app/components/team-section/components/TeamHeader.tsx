interface TeamHeaderProps {
    isVisible: boolean;
  }
  
  export default function TeamHeader({ isVisible }: TeamHeaderProps) {
    return (
      <div
        className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-block mb-4">
          <span className="bg-white/80 backdrop-blur-sm text-emerald-800 px-5 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium tracking-wide uppercase border border-emerald-200 shadow-sm">
            Our Team
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Meet the
          <span className="bg-gradient-to-r from-emerald-600 via-lime-600 to-teal-600 bg-clip-text text-transparent">
            {" "}
            Changemakers
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Our diverse team of passionate individuals is dedicated to creating a more sustainable and green future
          for communities worldwide.
        </p>
      </div>
    );
  }