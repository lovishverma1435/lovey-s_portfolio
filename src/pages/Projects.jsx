import projects from "../json/projects.json"

const Projects = () => {
  return (
    <>
      <section className="relative w-full min-h-screen bg-[#0d0714]  font-inter pt-10">
        <div className="flex gap-20 pl-20">
          <div className="sticky top-10 self-start">
            <img
              className="w-[400px] h-[600px] rounded-full object-cover hover:shadow-[0_0_40px_rgba(236,86,49,0.6)]"
              src="/boyanimation.png"
              alt="animation"
            />
          </div>
          {/* Right Projects Grid */}
          <div className="grid grid-cols-2 gap-10">
            {projects.projects.map((item, index) => (
              <nav className="max-w-[400px] w-full h-full" key={index}>
                <div className="flex flex-col gap-4 bg-gradient-to-br from-[#1a1a1a] to-[#0d0714] border border-gray-800 p-4 rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(236,86,49,0.7)] transition-all duration-300">
                  
                  {/* Project Image */}
                  <img
                    className="rounded-xl w-[364px] h-[208px] object-cover hover:opacity-90 transition"
                    src={`/${item.image}`}
                    alt={item.name}
                  />

                  {/* Content */}
                  <div className="flex justify-between items-center mt-2">
                    <h1 className="text-2xl text-[#ec5631] font-semibold tracking-wide">
                      {item.name}
                    </h1>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#ec5631] px-4 py-2 rounded-xl font-medium border border-[#ec5631] hover:!text-white hover:bg-[#ec5631] transition-all duration-300"
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
