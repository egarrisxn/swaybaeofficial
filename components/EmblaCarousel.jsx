"use client";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YoutubeEmbed from "./(embeds)/YoutubeEmbed";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

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
    <div className="embla card bg-base-200 shadow-xl rounded-2xl shadow-purple-500/50 mt-10 mb-16">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container space-x-10">
          <div className="embla__slide">
            <YoutubeEmbed vnum={0} />
          </div>
          <div className="embla__slide">
            <YoutubeEmbed vnum={1} />
          </div>
          <div className="embla__slide">
            <YoutubeEmbed vnum={2} />
          </div>
          <div className="embla__slide">
            <YoutubeEmbed vnum={3} />
          </div>
          <div className="embla__slide">
            <YoutubeEmbed vnum={4} />
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
