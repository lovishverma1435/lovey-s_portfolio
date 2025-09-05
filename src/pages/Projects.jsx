import { Link } from "react-router-dom";
import projects from "../json/projects.json"
import { useTheme } from "../Theme/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";


const Projects = () => {
  const { theme } = useTheme();
 AOS.init({
        duration: 1200,
        once: false,
        offset: 200,
    });
  return (
    <>
      <section className={`relative w-full font-inter ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"}`}>
        {/* padding wrapper (instead of py-16 on section) */}
        <div className="pt-20 xl:flex gap-10 justify-center xl:gap-20 px-[20px] lg:px-10 xl:pl-20">
          {/* Left Sticky Image */}
          <div data-aos="fade-right"  data-aos-delay="200" className="flex justify-center mb-10">
            <img
              className="sticky top-20 self-start w-[400px] h-[600px] rounded-full object-cover hover:shadow-[0_0_40px_rgba(236,86,49,0.6)]"
              src="/boyanimation.png"
              alt="animation"
            />
          </div>


          {/* Right Projects Grid */}
          <div className="grid sm:grid-cols-2 justify-center gap-3 pb-16 lg:gap-5 xl:gap-10 ">
            {projects.projects.map((item, index) => (
              <nav  data-aos={index % 2 === 0 ? "fade-up"   : "fade-down" }
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                     className="max-w-[400px] group w-full h-full" key={index}>
                <div className="flex flex-col gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#0d0714] border border-gray-800 p-4 rounded-2xl group-hover:shadow-[0_0_25px_rgba(236,86,49,0.7)] transition-all duration-300">

                  {/* Project Image */}
                  <img
                    className="rounded-xl w-[324px] h-[188px] object-cover group-hover:scale-105 duration-300 transition"
                    src={`/${item.image}`}
                    alt={item.name}
                  />

                  {/* Content */}
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-2xl text-[#ec5631] font-semibold tracking-wide">
                      {item.name}
                    </h1>
                    <Link
                      to={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#ec5631] px-4 py-2 rounded-xl font-medium border border-[#ec5631] group-hover:!text-white group-hover:bg-[#ec5631] transition-all duration-300"
                    >
                      Visit
                    </Link>
                  </div>

                </div>
              </nav>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;