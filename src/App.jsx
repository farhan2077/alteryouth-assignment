// import viteLogo from "/vite.svg";
import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Community from "./components/Community";
import Schools from "./components/carousel/Schools";

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
    </div>
  );
}

export default App;
