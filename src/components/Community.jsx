import { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

import leaderboradData from "../assets/data/leaderboard.json";

export default function Community() {
  const [count, setCount] = useState(6);

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl font-gilroy-medium text-brand">
            #alteryouthrevolution
          </p>
          <p className="text-3xl font-gilroy-bold">The Scholarship Community</p>
          <a
            href="#home"
            className="items-center hidden p-4 my-4 transition-colors bg-white border lg:flex rounded-xl hover:bg-brand hover:text-white text-brand border-brand font-gilroy-medium"
          >
            <span className="mr-1 text-sm">Join the community.</span>
            <span className="text-sm underline font-gilroy-bold">
              Start now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        {/* leaderboard */}
        {/* the holy container, just margin */}
        <div className="mx-5 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-80">
          <div className="grid gap-4 lg:grid-cols-3">
            {leaderboradData.slice(0, count).map((person) => (
              <div
                key={person.started_at}
                className="p-5 rounded-lg shadow-lg shadow-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-1.5">
                      <p className="mr-1 font-gilroy-bold">@{person.name}</p>
                      <img
                        className="h-3 rounded-sm"
                        src={`https://flagicons.lipis.dev/flags/4x3/${person.country_code.toLocaleLowerCase()}.svg`}
                      />
                    </div>
                    <span className="mb-5 inline-block text-xs px-2 py-1 font-gilroy-medium rounded-full text-brand bg-[#f2fcf6]">
                      {person.count} Scholarships
                    </span>
                    <p className="text-[0.6rem] font-gilroy-medium text-gray-400">
                      {dayjs(person.started_at).format("Do MMM YYYY")}
                    </p>
                  </div>
                  <div>
                    {person.student_imgs.length > 1 ? (
                      <div className="flex">
                        {person.student_imgs.map((image) => (
                          <img
                            key={image}
                            className="object-cover w-10 h-10 -ml-4 border-2 border-white rounded-full"
                            src={image}
                          />
                        ))}
                      </div>
                    ) : (
                      <div>
                        <img
                          className="object-cover w-10 h-10 border-2 border-white rounded-full"
                          src={person.student_imgs[0]}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {count >= 15 ? (
            <>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault();
                }}
                className="grid w-full my-5 place-content-center font-gilroy-bold text-brand"
              >
                See All
              </a>
            </>
          ) : (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCount(count + 3);
                }}
                className="grid w-full my-5 place-content-center font-gilroy-bold text-brand"
              >
                See More
              </button>
            </>
          )}
          <a
            href="#home"
            className="flex items-center justify-center p-6 my-4 text-white transition-colors border lg:hidden rounded-xl bg-brand border-brand font-gilroy-medium"
          >
            <span className="mr-1 text-sm">Join the community.</span>
            <span className="text-sm underline font-gilroy-bold">
              Start now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

// function Card() {
//   return (
//     <div>
//       <div>
//         <p>name</p>
//         <p>scholarship badge</p>
//         <p>date</p>
//       </div>
//       <div>image or images</div>
//     </div>
//   );
// }
