import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import { FloatingDockDemo } from "./ui/PagesDPage";
import HomeSection from "./home/Homesection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeSection />}/>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
       {/* <BottomMenu/> */}
       <FloatingDockDemo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
