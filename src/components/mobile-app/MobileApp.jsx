import EmblaCarousel from "./EmblaCarousel";
// import "./embla.css";

import playstoreIcon from "../../assets/icons/playstorewhite.svg";
import appstoreIcon from "../../assets/icons/appstorewhite.svg";

import familyImg from "../../assets/images/app-preview/previewappfamily.png";
import gradImg from "../../assets/images/app-preview/previewappgrad.png";
import schoolImg from "../../assets/images/app-preview/previewappschool.png";
import studentImg from "../../assets/images/app-preview/previewappstudent.png";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

// eslint-disable-next-line react-refresh/only-export-components
export const slides = [
  {
    id: 1,
    title: "Start your scholarship",
    description:
      "For students enrolled in Government Primary Schools of Bangladesh, who do not have a father to support them financially",
    imgSrc: studentImg,
  },
  {
    id: 2,
    title: "Transferred directly",
    description:
      "Your scholarship is transferred to your student's mother automatically through mobile banking.",
    imgSrc: familyImg,
  },
  {
    id: 3,
    title: "Get school reports",
    description:
      "View attendance data and report cards from your student's school, until completion of Class 5.",
    imgSrc: schoolImg,
  },
  {
    id: 4,
    title: "Ensure a literate citizen",
    description:
      "Your scholarship continues until completion of class 5, when your student achieves literacy.",
    imgSrc: gradImg,
  },
];

export default function MobileApp() {
  return (
    <>
      {/* center container */}
      <div className="flex flex-col items-center">
        <h1 className="mb-6 text-3xl font-gilroy-bold">
          Your scholarship on your app
        </h1>
        {/* download icons with link */}
        <div className="flex mb-6">
          <a
            href="https://play.google.com/store/apps/details?id=com.alteryouth.userapp"
            target="_blank"
            rel="noreferrer"
          >
            <img src={playstoreIcon} className="-mr-2 scale-90" />
          </a>
          <a
            href="https://apps.apple.com/app/id1569106859?platform=iphone/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appstoreIcon} className="-ml-2 scale-90" />
          </a>
        </div>
      </div>
      {/* embla */}
      <section>
        <div className="block md:hidden">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="mx-10 xl:mx-72">
          <div className="hidden grid-cols-1 gap-14 md:grid lg:grid-cols-4">
            {slides.map((slide) => (
              <div key={slide.id}>
                <img
                  className="object-contain w-full h-auto xl:h-96"
                  src={slide.imgSrc}
                />
                <p className="mt-6 text-center xl:text-xl font-gilroy-bold">
                  {slide.title}
                </p>
                <p className="mt-2 text-sm text-center xl:px-5 font-gilroy-medium">
                  {slide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
