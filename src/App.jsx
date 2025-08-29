import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import { FloatingDockDemo } from "./ui/PagesDPage";
import HomeSection from "./home/Homesection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./common/Header";
import Skills from "./pages/Skills";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeSection />}/>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
       {/* <BottomMenu/> */}
       <FloatingDockDemo/>
      </BrowserRouter>
    </div>
  );
}

export default App;
