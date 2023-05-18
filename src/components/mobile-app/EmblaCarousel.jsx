import useEmblaCarousel from "embla-carousel-react";

import { slides } from "./MobileApp";

const EmblaCarousel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container ml-1 w-[23rem]">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide">
                <img className="h-[30rem]" src={slide.imgSrc} />
                <div className="ml-2">
                  <p className="mt-6 text-xl font-gilroy-bold">{slide.title}</p>
                  <p className="w-56 mt-2 text-sm font-gilroy-medium">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
