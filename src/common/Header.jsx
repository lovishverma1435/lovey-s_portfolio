import Theme from '../Theme/ThemeController'
import Fontui from "../ui/Fontui"

const Header = () => {
    return (
        <section className="relative w-full bg-white/30 backdrop-blur-2xl">
  {/* Navbar wrapper */}
  <div className="sticky top-0 z-40 ">
    <div className="max-w-[1260px] mx-auto flex justify-between items-center px-4 py-2">
      
      {/* Left side logo / text */}
      <Fontui
        className="text-2xl font-medium text-black dark:text-white"
        words={["dev", "des"]}
        inspan="."
        outofspan="Bhushan"
      />

      {/* Right side theme button */}
      <Theme />
    </div>
  </div>

  
</section>

    )
}

export default Header
