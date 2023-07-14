// components/Carousel.js
// Import the hook and options type
"use client";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

// Define the props
export default function Carousel({ children, ...options }) {
  // 1. useEmblaCarousel returns an emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as a basis for swipe and other functionality.
  const [emblaRef] = useEmblaCarousel(options);

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="overflow-hidden" ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex">{children}</div>
    </div>
  );
}
