import userImg from "../assets/images/user.jpg";
import applicantImg from "../assets/images/applicant.jpg";

export default function MoreInformation() {
  return (
    <>
      <div className="mx-5 sm:mx-16 md:mx-24 xl:mx-80">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="relative flex-1">
            <img
              src={userImg}
              className="object-cover w-full aspect-square lg:aspect-[4/3] rounded-xl "
            />
            <div className="absolute text-white left-6 top-6 w-52 lg:w-72 ">
              <p className="text-3xl lg:text-[2.5rem] lg:leading-[3rem] font-gilroy-bold">
                You can be anywhere in the world
              </p>
              <div className="flex items-center mt-2">
                <a className="mr-1 text-sm underline font-gilroy-medium">
                  See all scholarships
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src={applicantImg}
              className="object-cover w-full aspect-square lg:aspect-[4/3] rounded-xl "
            />
            <div className="absolute text-white left-6 top-6 w-52 lg:w-72 ">
              <p className="text-3xl lg:text-[2.5rem] lg:leading-[3rem] font-gilroy-bold">
                While students get closer to their dreams
              </p>
              <div className="flex items-center mt-2">
                <a className="mr-1 text-sm underline font-gilroy-medium">
                  See all graduates
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
