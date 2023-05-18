// import viteLogo from "/vite.svg";
import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Community from "./components/Community";
import Schools from "./components/carousel/Schools";
import ScholarshipEligibility from "./components/ScholarshipEligibility";
import MobileApp from "./components/mobile-app/MobileApp";
import MoreInformation from "./components/MoreInformation";
import Association from "./components/Association";

function App() {
  return (
    <div id="home" className="min-h-screen overflow-y-hidden">
      <div className="relative z-40">
        <Header />
      </div>
      <Hero />
      <About />
      <Community />
      <div className="mt-10 mb-5">
        <hr className="border border-gray-100 lg:hidden" />
      </div>
      <div className="relative z-0">
        <Schools />
      </div>
      <div className="mt-10 mb-5 lg:mt-20">
        <hr className="border border-gray-100 lg:hidden" />
      </div>
      <ScholarshipEligibility />
      <div className="mt-10 mb-5 lg:mt-20">
        <hr className="border border-gray-100 lg:hidden" />
      </div>
      <MobileApp />
      <div className="mt-10 mb-5 lg:mt-20"></div>
      <MoreInformation />
      <div className="mb-5 mt-14 lg:mt-28"></div>
      <Association />
    </div>
  );
}

export default App;
