import EmblaCarousel from "./EmblaCarousel";
import "./embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 7;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Schools() {
  return (
    <>
      <div>
        <div className="mx-5 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-80">
          <h1 className="text-3xl font-gilroy-bold">
            Students from Government Primary Schools Nationwide
          </h1>
        </div>
      </div>
      <section className="mt-5 sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </>
  );
}
