// import viteLogo from "/vite.svg";
import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Community from "./components/Community";
import Schools from "./components/carousel/Schools";
import ScholarshipEligibility from "./components/ScholarshipEligibility";

function App() {
  return (
    <div id="home" className="min-h-screen overflow-y-hidden">
      <Header />
      <Hero />
      <About />
      <Community />
      <div className="mt-10 mb-5">
        <hr className="border border-gray-100 lg:hidden" />
      </div>
      <Schools />
      <div className="mt-10 mb-5 lg:mt-20">
        <hr className="border border-gray-100 lg:hidden" />
      </div>
      <ScholarshipEligibility />
    </div>
  );
}

export default App;
