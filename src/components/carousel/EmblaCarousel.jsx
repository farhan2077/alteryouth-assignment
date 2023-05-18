/* eslint-disable react/prop-types */
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

import schoolsData from "../../assets/data/schools.json";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="max-w-screen">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {schoolsData.map((school) => (
              <div key={school.name} className="embla__slide">
                <img
                  className="rounded-md embla__slide__img"
                  src={`/images/school-images/school${school.ht_img_id}.jpeg`}
                />
                <div className="mx-1 mt-3">
                  <h6 className="font-gilroy-bold">{school.name}</h6>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.508"
                      height="15.174"
                    >
                      <g data-name="1">
                        <path
                          fill="#1dc468"
                          fillRule="evenodd"
                          stroke="#1dc468"
                          d="M6.221 8.81a2.432 2.432 0 0 0 2.437-2.436A2.507 2.507 0 0 0 6.221 3.85a2.432 2.432 0 0 0-2.436 2.437A2.568 2.568 0 0 0 6.221 8.81ZM2.132 2.197a5.78413347 5.78413347 0 0 1 8.18 8.18l-4.09 4.09-4.09-4.09a5.942 5.942 0 0 1 0-8.18Z"
                          data-name="Path 114"
                        />
                      </g>
                    </svg>
                    <p className="ml-2 text-sm font-gilroy-medium">
                      {school.location}, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
