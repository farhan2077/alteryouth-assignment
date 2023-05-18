export default function Footer() {
  return (
    <>
      <footer className="bg-[#f9f9f9] py-8">
        <div className="mx-5 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-[19rem]">
          <h6 className="mb-2 font-gilroy-bold">Learn About AlterYouth</h6>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <a href="" className="text-sm font-gilroy-medium">
                Home
              </a>
              <a href="" className="text-sm font-gilroy-medium">
                About us
              </a>
              <a href="" className="text-sm font-gilroy-medium">
                How it works
              </a>
              <a href="" className="text-sm font-gilroy-medium">
                Scholarship Policy
              </a>
              <a href="" className="text-sm font-gilroy-medium">
                Get the app
              </a>
            </div>
            <div>
              <p className="hidden lg:block place-self-end font-gilroy-medium">
                Towards a literate Bangladesh
              </p>
            </div>
          </div>
          {/*  */}

          <div className="block lg:hidden">
            <hr className="my-5 border border-gray-300" />
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/alteryouth/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/alteryouthrevolution/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          {/*  */}
          <hr className="my-5 border border-gray-300" />
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-gilroy-medium">
                © 2023 AlterYouth Limited Terms of Service
              </p>
              <a href="" className="block text-sm font-gilroy-medium lg:hidden">
                Terms of Sercvice
              </a>
              <a href="" className="text-sm font-gilroy-medium">
                Privacy Policy
              </a>
            </div>
            <div className="hidden gap-3 lg:flex">
              <a
                href="https://www.facebook.com/alteryouth/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/alteryouthrevolution/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
