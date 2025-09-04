import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import { FloatingDockDemo } from "./ui/PagesDPage";
import HomeSection from "./home/Homesection";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./common/Header";
import Skills from "./pages/Skills";
import { FloatingDockDemo2 } from "./ui/PageDpage";
import Animated from "./pages/Animated";

function App() {
  return (
    <>
      <BrowserRouter>
      <Animated/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeSection />}/>
        <Route path="/aboutme" element={<About />}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
       {/* <BottomMenu/> */}
       <span className="variention h-full" >

       <FloatingDockDemo/>
       </span>
       <span className="variention2 h-full">
       <FloatingDockDemo2/>

       </span>
      </BrowserRouter>
    </>
  );
}

export default App;
