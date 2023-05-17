// import viteLogo from "/vite.svg";
import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Community from "./components/Community";

function App() {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Community />
    </div>
  );
}

export default App;
