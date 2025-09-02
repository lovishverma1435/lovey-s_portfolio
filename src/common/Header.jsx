import Theme from '../Theme/ThemeController'
import Fontui from "../ui/Fontui"

const Header = () => {
    return (
        // Full width header background section
        <div className="fixed top-0 left-0 w-full z-40 bg-white/3 backdrop-blur-2xl  ">
            
            {/* Centered container for content */}
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                
                {/* Left side logo / text */}
                <Fontui 
                    className="text-2xl font-medium text-black dark:text-white"  
                    words={["dev","des"]} 
                    inspan="." 
                    outofspan="Bhushan"
                />

                {/* Right side theme button */}
                <Theme />
            </div>
        </div>
    )
}

export default Header
