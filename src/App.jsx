// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
