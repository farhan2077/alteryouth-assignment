import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useDetectClickOutside } from "react-detect-click-outside";

import useWindowPosition from "../../utils/useWindowPosition";
import Container from "./Container";

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: "Login",
      url: "/login",
    },
    {
      id: 2,
      name: "Home",
      url: "/",
    },
    {
      id: 3,
      name: "About",
      url: "/about",
    },
    {
      id: 4,
      name: "How it works",
      url: "/how-it-works",
    },
    {
      id: 5,
      name: "Scholarships",
      url: "active/scholarships",
    },
    {
      id: 6,
      name: "Support",
      url: "/suport",
    },
    {
      id: 7,
      name: "Scholarship Policy",
      url: "active/scholarship-policy",
    },
    {
      id: 8,
      name: "Get the app",
      url: "/get-the-app",
    },
  ];

  return (
    <ul className="z-10 grid gap-5">
      {sidebarItems.map((item) => (
        <li
          key={item.id}
          className="text-brand whitespace-nowrap font-gilroy-bold"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

function MobileMenu() {
  const [isOpen, setOpen] = useState(false);

  function closeSidebar() {
    setOpen(false);
  }

  const ref = useDetectClickOutside({
    onTriggered: closeSidebar,
  });

  return (
    <div>
      <div
        className={`${
          isOpen
            ? "block translate-x-0 transition-transform duration-300 ease-in-out"
            : "-translate-x-full transition-transform ease-in-out duration-300"
        } shadow-xl z-10 absolute w-auto min-h-screen bg-white -ml-4 top-0 px-12 pt-24`}
      >
        <Sidebar />
      </div>
      {isOpen && (
        <div
          className={`${
            isOpen
              ? "opacity-10 transition-opacity ease-in duration-500"
              : "opacity-0 transition-opacity ease-in duration-300"
          } h-screen w-screen bg-black absolute top-0 left-0`}
        ></div>
      )}
      <div className="relative flex items-center justify-center w-full px-8 py-3 bg-white lg:hidden">
        <div className="absolute left-0 ml-4">
          <div ref={ref}>
            <Hamburger
              style={{
                zIndex: "0",
              }}
              direction="right"
              color="#1dc468"
              size={20}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
        <div>
          <a href="/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 mb-1.5"
              viewBox="0 0 42.49 9"
            >
              <g data-name="Group 6923">
                <g data-name="Group 2">
                  <g data-name="Logo Ay">
                    <g data-name="Layer 1">
                      <g
                        fill="#1dc468"
                        fillRule="evenodd"
                        data-name="Group 2021"
                      >
                        <path
                          d="M9.46 3.807c-1.453.425-2.9.854-4.36 1.27a.98.98 0 0 1-.49 0C3.076 4.668 1.546 4.25 0 3.719c.683-.178 1.386-.306 2.047-.545a8.017 8.017 0 0 1 6 .059 11.605 11.605 0 0 0 1.411.386v.185"
                          data-name="Path 2256"
                        />
                        <path
                          d="M4.921 7.691a6.7 6.7 0 0 1-2.557-.429c-.451-.137-.791-1.55-.462-1.9a.371.371 0 0 1 .25-.077.707.707 0 0 1 .271.077 6.17 6.17 0 0 0 4.956.032c.563-.214.691 0 .688.544C8.06 7.17 8.062 7.207 6.844 7.49a6.678 6.678 0 0 1-1.925.2"
                          data-name="Path 2257"
                        />
                        <path
                          d="M.715 4.83c.136.055.121.174.127.276.045.715.084 1.426.13 2.138.016.24-.011.467-.308.462s-.388-.195-.35-.48c.089-.677.163-1.355.25-2.032.016-.133 0-.286.153-.365"
                          data-name="Path 2258"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <text
                  fill="#1dc468"
                  fontFamily="Gilroy-Bold, Gilroy ☞"
                  fontSize="7"
                  fontWeight="700"
                  letterSpacing="-.04em"
                  transform="translate(10.489 7)"
                >
                  <tspan x="0" y="0">
                    alteryouth
                  </tspan>
                </text>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function DesktopMenu() {
  const [isOpen, setOpen] = useState(false);

  function closeSidebar() {
    setOpen(false);
  }

  const ref = useDetectClickOutside({
    onTriggered: closeSidebar,
  });

  let yPos = useWindowPosition();
  console.log(yPos);

  let textColor = "text-white",
    bgColor = "bg-transparent";

  if (yPos > 100) {
    textColor = "transition duration-300 transition-color text-brand";
    bgColor = "transition duration-300 transition-color bg-white shadow-md";
  } else {
    textColor = "transition duration-300 transition-color text-white";
    bgColor = "transition duration-300 transition-color bg-transparent";
  }

  const navItems = [
    {
      id: 1,
      name: "About",
      url: "/about",
    },
    {
      id: 4,
      name: "How it works",
      url: "/how-it-works",
    },
    {
      id: 2,
      name: "Scholarships",
      url: "/scholarships",
    },
    {
      id: 3,
      name: "Login",
      url: "/login",
    },
  ];

  return (
    <div className={`${bgColor}`}>
      <div
        className={`${
          isOpen
            ? "block translate-x-0 transition-transform duration-300 ease-in-out"
            : "-translate-x-full transition-transform ease-in-out duration-300"
        } shadow-xl z-40 absolute w-auto min-h-screen bg-white top-0 -ml-8 px-20 pt-24`}
      >
        <Sidebar />
      </div>

      {isOpen && (
        <div
          className={`${
            isOpen
              ? "opacity-10 transition-opacity ease-in duration-500"
              : "opacity-0 transition-opacity ease-in duration-300"
          } h-screen w-screen bg-black absolute top-0 left-0`}
        >
          overlay
        </div>
      )}

      <Container>
        <div
          className={`hidden lg:flex px-8 py-2 justify-between items-center`}
        >
          <div ref={ref} className="flex items-center justify-center">
            <Hamburger
              style={{
                zIndex: "0",
              }}
              direction="right"
              color="#1dc468"
              size={18}
              toggled={isOpen}
              toggle={setOpen}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 mb-1.5 scale-90"
              viewBox="0 0 42.49 9"
            >
              <g data-name="Group 6923">
                <g data-name="Group 2">
                  <g data-name="Logo Ay">
                    <g data-name="Layer 1">
                      <g
                        fill="#1dc468"
                        fillRule="evenodd"
                        data-name="Group 2021"
                      >
                        <path
                          d="M9.46 3.807c-1.453.425-2.9.854-4.36 1.27a.98.98 0 0 1-.49 0C3.076 4.668 1.546 4.25 0 3.719c.683-.178 1.386-.306 2.047-.545a8.017 8.017 0 0 1 6 .059 11.605 11.605 0 0 0 1.411.386v.185"
                          data-name="Path 2256"
                        />
                        <path
                          d="M4.921 7.691a6.7 6.7 0 0 1-2.557-.429c-.451-.137-.791-1.55-.462-1.9a.371.371 0 0 1 .25-.077.707.707 0 0 1 .271.077 6.17 6.17 0 0 0 4.956.032c.563-.214.691 0 .688.544C8.06 7.17 8.062 7.207 6.844 7.49a6.678 6.678 0 0 1-1.925.2"
                          data-name="Path 2257"
                        />
                        <path
                          d="M.715 4.83c.136.055.121.174.127.276.045.715.084 1.426.13 2.138.016.24-.011.467-.308.462s-.388-.195-.35-.48c.089-.677.163-1.355.25-2.032.016-.133 0-.286.153-.365"
                          data-name="Path 2258"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <text
                  fill="#1dc468"
                  fontFamily="Gilroy-Bold, Gilroy ☞"
                  fontSize="7"
                  fontWeight="700"
                  letterSpacing="-.04em"
                  transform="translate(10.489 7)"
                >
                  <tspan x="0" y="0">
                    alteryouth
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <ul className={`grid grid-flow-col gap-5 ${textColor}`}>
            {navItems.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className="text-sm styled-link styled-underline font-gilroy-bold"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="relative">
      <div className="fixed top-0 left-0 right-0">
        <MobileMenu />
        <DesktopMenu />
      </div>
    </header>
  );
}
