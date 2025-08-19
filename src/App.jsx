import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
// import BottomMenu from "./pages/Button";
import HeroSection from "./pages/Herosection";
import { FloatingDockDemo } from "./ui/PagesDPage";
import About from "./home/About";
// import HeroSection from "./pages/Herosection";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/aboutme" element={<About />}/>
      </Routes>
       {/* <BottomMenu/> */}
       <FloatingDockDemo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
