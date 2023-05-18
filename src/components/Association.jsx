import undpIcon from "../assets/icons/undp.svg";
import googleIcon from "../assets/icons/google.svg";
import ictIcon from "../assets/icons/ict.svg";
import expoIcon from "../assets/icons/expo.svg";

export default function Association() {
  return (
    <>
      <div>
        <div className="mx-5 sm:mx-16 md:mx-24 xl:mx-72">
          <div className="flex flex-col gap-10 divide-gray-100 md:divide-x-2 lg:flex-row">
            <div className="flex-1 order-2 md:order-1">
              <div className="flex">
                <img src={undpIcon} className="w-64 -ml-4" />
                <p className="flex items-center -ml-20 font-gilroy-bold">
                  &quot;Asia Pacific
                  <br /> SDG Enterprise Award&quot;
                </p>
              </div>
            </div>
            <div className="flex-1 order-last pb-0 lg:pb-5 bg-green-10 md:order-2">
              <div className="grid grid-flow-row place-items-center">
                <h4 className="grid w-full mb-5 text-xl font-gilroy-bold place-items-center">
                  In Association With
                </h4>
                <div className="grid grid-flow-col place-items-center">
                  <img src={ictIcon} className="h-28" />
                  <img src={expoIcon} />
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 pt-0 lg:pt-5 md:order-2">
              <div className="grid place-items-center">
                <img src={googleIcon} className="h-16" />
                <p className="font-gilroy-bold">
                  Winner of Google Business Group Stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
