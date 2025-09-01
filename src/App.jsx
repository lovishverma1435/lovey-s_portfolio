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
       <div className="variention">

       <FloatingDockDemo/>
       </div>
       <div className="variention2">
       <FloatingDockDemo2/>

       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
