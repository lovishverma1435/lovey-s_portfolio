import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
// import BottomMenu from "./pages/Button";
import HeroSection from "./pages/Herosection";
import { FloatingDockDemo } from "./ui/PagesDPage";
import About from "./home/About";
import Projects from "./home/Projects";
// import HeroSection from "./pages/Herosection";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
       {/* <BottomMenu/> */}
       <FloatingDockDemo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
