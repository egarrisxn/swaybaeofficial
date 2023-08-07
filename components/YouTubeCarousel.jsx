"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTubeEmbed from "./(embeds)/YouTubeEmbed";

export const YouTubeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    draggable: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="embla card flex overflow-hidden p-4 bg-base-100 rounded-xl shadow-xl shadow-purple-500/50">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex h-full w-500 space-x-10">
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={0} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={1} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={2} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={3} />
          </div>
          <div className="embla__slide flex h-full w-full">
            <YouTubeEmbed vnum={4} />
          </div>
        </div>
      </div>
      <div className="card-actions pt-4 space-x-10 justify-center">
        <button
          className="btn btn-secondary embla__button embla__button--prev"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="btn btn-secondary embla__button embla__button--next"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
