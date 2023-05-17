import { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import heroImg from "../../assets/images/hero.jpg";
import pcheroImg from "../../assets/images/pchero.jpg";

function DonationCard() {
  const [value, setValue] = useState();
  const [count, setCount] = useState(1);

  count > 0;

  return (
    <>
      <div className="-mx-4 md:mx-2">
        <div className="inline-block w-full p-4 mt-6 text-black bg-white rounded shadow-xl lg:rounded-lg lg:w-84">
          <div>
            <h6 className="mb-3 text-xl font-gilroy-bold">
              Join the <span className="text-brand">#alteryouthevolution</span>
            </h6>
            <form action="" className="grid gap-3">
              <input
                name="name"
                placeholder="Your name"
                className="w-full p-3 border rounded-xl font-gilroy-medium focus:outline-none focus:border-brand"
              />
              <input
                name="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-xl font-gilroy-medium focus:outline-none focus:border-brand"
              />
              <div className="p-3 bg-white border rounded-xl placeholder:text-black">
                <PhoneInput
                  international={true}
                  defaultCountry="BD"
                  placeholder="Your number"
                  countryCallingCodeEditable={false}
                  value={value}
                  onChange={setValue}
                />
              </div>
              <div>
                <p className="mt-1 mb-3 font-gilroy-bold">
                  Number of Scholarships
                </p>
                <div className="flex items-end justify-between gap-10">
                  <div className="flex">
                    <button
                      disabled={count <= 1}
                      onClick={(e) => {
                        e.preventDefault();
                        setCount(count - 1);
                      }}
                      className="flex items-center justify-center w-10 h-10 text-white bg-gray-100 rounded-l-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          count > 1 ? "bg-brand" : "bg-gray-300"
                        } w-10 h-10 p-2  rounded-lg`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </button>
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-100 outline-none font-gilroy-bold">
                      {count}
                    </div>
                    <button
                      disabled={count >= 10}
                      onClick={(e) => {
                        e.preventDefault();
                        setCount(count + 1);
                      }}
                      className="flex items-center justify-center w-10 h-10 text-white bg-gray-100 rounded-r-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`${
                          count < 10 ? "bg-brand" : "bg-gray-300"
                        } w-10 h-10 p-2  rounded-lg`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="-mb-1 text-xl font-gilroy-bold">
                    BDT {(1500 * count).toLocaleString()}
                    <span className="text-sm">/month</span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="flex items-center justify-center w-full py-3 mt-3 font-semibold text-white uppercase rounded-lg font-gilroy-medium bg-brand"
                >
                  Start Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileHero() {
  return (
    <>
      <div className="md:container md:mx-auto md:p-6">
        <img
          src={heroImg}
          className="object-cover w-full h-auto md:h-[33rem] mt-14 md:mt-8"
          alt="A kid wearing hat holding his certificate"
        />
        <div className="mx-10 -mt-52">
          <h1 className="text-3xl text-white font-gilroy-bold">
            Start your <br /> scholarship
          </h1>
          <h3 className="w-full mt-2 text-white font-gilroy-medium placeholder:font-gilroy-medium">
            Directly for students in Government Primary Schools throughout
            Bangladesh
          </h3>
        </div>
      </div>
      <div className="px-10 lg:container lg:px-60">
        <DonationCard />
      </div>
    </>
  );
}

function DesktopHero() {
  return (
    <>
      <div>
        {/* hero background image */}
        <img
          src={pcheroImg}
          className="object-cover w-screen h-screen lg:h-[50rem]"
          alt="A kid wearing hat holding his certificate"
        />
        {/* hero text */}
        <div className="px-32 lg:px-48 lg:container lg:mx-auto">
          <div className="flex items-center gap-28 mx-auto -mt-[40rem] justify-between">
            <div>
              <h1 className="mb-6 text-6xl text-white font-gilroy-bold">
                Start your <br /> scholarship
              </h1>
              <h3 className="w-full mt-2 text-xl text-white font-gilroy-medium placeholder:font-gilroy-medium">
                For students in Government Primary
                <br /> Schools throughout Bangladesh
              </h3>
            </div>
            <div>
              <DonationCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <>
      <div className="lg:hidden">
        <MobileHero />
      </div>
      <div className="hidden mb-52 lg:block">
        <DesktopHero />
      </div>
    </>
  );
}
