import projects from "../json/projects.json"

const Projects = () => {
    return (
        <>
            <section className='relative w-full h-screen bg-[#0d0714] text-white font-inter overflow-hidden pt-10'>
                <div className="pl-20 flex gap-20">
                    <img className='max-w-[400px] w-full h-[600px] rounded-full' src="/ChatGPT_Image_Aug_19__2025__05_44_00_PM-removebg-preview.png" alt="animation" />
                    <div className="grid grid-cols-2 gap-10">
                        {
                            projects.projects.map((item, index) => (
                                <nav className="max-w-[400px] w-full h-full" key={index + Date.now()}>
                                    <div className="flex flex-col gap-4 border-2 border-gray-200 p-4 rounded-2xl ">
                                    <img className="rounded-2xl w-[364px] h-[208px]" src={`/${item.image}`} alt="" />
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-3xl text-[#ec5631] font-medium">{item.name}</h1>
                                        <a className="text-2xl text-[#ec5631] cursor-pointer border-2 border-[#ec5631] py-1 px-2 rounded-2xl items-center">{item.link}</a>
                                    </div>
                                    </div>
                                </nav>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects
