import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import videoFamilyImg from "../assets/images/video_family_photo.jpg";
import ayExplainerVideo from "../assets/videos/ay_explainer.mp4";

export default function About() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="mx-6 mt-12 mb-4 md:mt-6"></div>
      <div className="md:container md:mx-auto md:p-6">
        <h4 className="block px-6 mb-4 text-xl sm:text-2xl font-gilroy-bold xl:hidden">
          Here&lsquo;s how your scholarship works
        </h4>
        <div className="gap-10 mx-0 xl:grid xl:grid-cols-2 lg:mx-48">
          <div className="relative mb-16 -z-10 md:mb-10 xl:mb-14">
            <img
              src={videoFamilyImg}
              className="relative object-cover w-screen h-auto mt-0 overflow-hidden rounded-none sm:rounded-xl md:h-96 xl:mt-16 brightness-75 aspect-square"
            />
            <div className="absolute bottom-0 w-full min-h-40 bg-gradient-to-t from-black to-transparent"></div>
            <div
              onClick={openModal}
              className="absolute grid w-20 h-20 text-white transform bg-black rounded-full opacity-75 cursor-pointer top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 xl:-translate-x-10 xl:-translate-y-0 bottom-1/2 place-content-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="hidden xl:flex xl:items-center">
            <div>
              <h3 className="mb-4 text-3xl font-gilroy-bold">
                The scholarship app
              </h3>
              <p className="pr-20 leading-7 font-gilroy-medium">
                In Bangladesh, while 98% of children enroll in school, 2 million
                children drop out to work before achieving literacy in order to
                support their families financially. On the flipside, Bangladesh
                has a diaspora population of 10 million in advanced economies
                who wish to make an impact on ther homeland. AlterYouth, imagine
                Uber for scholarships, is a C2C scholarhsip app enabling users
                from around the world to start scholarships directly for
                financially struggling students in Government Primary Schools of
                Bangladesh, through digital banking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition bg-black opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                show={isOpen}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                as={Fragment}
              >
                <Dialog.Panel className="relative w-full h-auto max-w-lg p-5 overflow-hidden transition-all transform bg-transparent shadow-xl rounded-2xl">
                  <div className="m-6 overflow-hidden rounded-lg">
                    <video
                      loop
                      controls
                      autoPlay="false"
                      preload="metadata"
                      controlsList="nodownload"
                    >
                      <source src={ayExplainerVideo} type="video/mp4" />
                    </video>
                  </div>

                  <button
                    type="button"
                    className="absolute top-0 right-0 grid w-10 h-10 text-black bg-white rounded-full outline-none place-content-center"
                    onClick={closeModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
