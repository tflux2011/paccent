import React from "react";

// Slider Component
const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      image: "slider1.jpg",
      title: "Premier Mining Operations",
      description: "Leading the way in sustainable mineral extraction",
    },
    {
      image: "slider2.jpg",
      title: "Global Export Network",
      description: "Connecting Nigerian resources to the world",
    },
    {
      image: "slider3.jpg",
      title: "Sustainable Mining",
      description: "Committed to environmental responsibility",
    },
    {
      image: "slider4.jpg",
      title: "Sustainable Mining",
      description: "Committed to environmental responsibility",
    },
    {
      image: "slider5.jpg",
      title: "Sustainable Mining",
      description: "Committed to environmental responsibility",
    },
    {
      image: "slider6.jpg",
      title: "Sustainable Mining",
      description: "Committed to environmental responsibility",
    },
    {
      image: "slider10.jpeg",
      title: "Unlock the Power of Innovation in Mining",
      description: "Transforming Natural Resources into Sustainable Solutions",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-amber-700" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full text-white transition-all"
        aria-label="Next slide"
      >
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
