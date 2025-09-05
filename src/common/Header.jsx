import Theme from '../Theme/ThemeController'
import Fontui from "../ui/Fontui"

const Header = () => {
  return (
    <section className="relative w-full">
      {/* Full width fixed background */}
      <div className="fixed top-0 left-0 w-full z-40 bg-white/30 backdrop-blur-2xl">
        {/* Centered content container */}
        <div className="max-w-[1260px] mx-auto flex justify-between items-center px-4 py-2">
          {/* Left side logo / text */}
          <Fontui
            className="text-xl sm:text-2xl font-medium justify-center items-center text-black dark:text-white"
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
