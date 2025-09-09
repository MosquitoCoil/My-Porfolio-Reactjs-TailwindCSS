import { useState, useEffect, Children, isValidElement } from "react";

export default function Carousel({
  children,
  autoSlide = true,
  autoSlideInterval = 5000,
}) {
  // Flatten children to always get an array of elements
  const slides = Children.toArray(children).filter(isValidElement);

  const [curr, setCurr] = useState(0);

  const next = () => setCurr((curr + 1) % slides.length);

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [curr, autoSlide, autoSlideInterval, slides.length]);

  return (
    <div className="w-full h-full relative overflow-hidden rounded-md">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`w-full h-full transition-opacity duration-500 ${
            i === curr ? "opacity-100 relative" : "opacity-0 absolute inset-0"
          }`}
        >
          {slide}
        </div>
      ))}
    </div>
  );
}
