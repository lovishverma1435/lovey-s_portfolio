import projects from "../json/projects.json"

const Projects = () => {
  return (
    <>
      <section className="relative  w-full font-inter py-16">
        <div className=" xl:flex gap-10  xl:gap-20 px-[20px] lg:px-10  xl:pl-20">
          <div className="flex justify-center mb-10">
            <img
              className=" sticky top-10 self-start w-[400px] h-[600px] rounded-full object-cover hover:shadow-[0_0_40px_rgba(236,86,49,0.6)]"
              src="/boyanimation.png"
              alt="animation"
            />
          </div>
          {/* Right Projects Grid */}
          <div className="grid sm:grid-cols-2 justify-center gap-3 lg:gap-5 xl:gap-10">
            {projects.projects.map((item, index) => (
              <nav className="max-w-[400px] group  w-full h-full" key={index}>
                <div className="flex flex-col gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#0d0714] border border-gray-800 p-4 rounded-2xl  group-hover:shadow-[0_0_25px_rgba(236,86,49,0.7)] transition-all duration-300">

                  {/* Project Image */}
                  <img className="rounded-xl w-[364px] h-[208px] object-cover group-hover:scale-105 duration-300 transition" src={`/${item.image}`} alt={item.name} />
                  {/* Content */}
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-2xl text-[#ec5631] font-semibold tracking-wide">
                      {item.name}
                    </h1>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#ec5631] px-4 py-2 rounded-xl font-medium border border-[#ec5631] group-hover:!text-white group-hover:bg-[#ec5631] transition-all duration-300"
                    >
                      Visit
                    </a>
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