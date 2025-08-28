import Theme from '../Theme/ThemeController'
import Fontui from "../ui/Fontui"
const Header = () => {
    return (
        <>
            <div className={` w-full font-inter `}>
                <div className="container relative flex w-full justify-between items-center">
                    {/* <div className="flex gap-5 items-center justify-between pt-2">
                        <img className='max-w-12 h-12 w-full rounded-[50%] border-2  border-gray-300' src="/bklogo.png" alt="" />
                    </div> */}
                     <Fontui className='absolute left-2 md:left-1  top-4 text-lg font-medium '  words={["dev","des"]} inspan="." outofspan="Bhushan"/>
                    <div className="absolute right-2 md:right-1 z-50 top-3">
                        <Theme />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
