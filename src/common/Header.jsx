import Theme from '../Theme/ThemeController'

const Header = () => {
    return (
        <>
            <div className={` w-full font-inter`}>
                <div className="container flex w-full justify-between">
                    <div className="flex gap-5 items-center justify-between pt-2">
                        <img className='max-w-12 h-12 w-full rounded-[50%] border-2  border-gray-300' src="/bklogo.png" alt="" />
                    </div>
                    <Theme/>
                </div>
            </div>
        </>
    )
}

export default Header
