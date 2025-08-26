import DesktopMenu from './components/DesktopMenu'
import MobileMenu from './components/MobileMenu'
export default function Index() {
    return (
        <header className="h-[60px] xl:h-[84px] z-[200] w-full bg-[#e9aa1e] xl:bg-white fixed top-0 left-0 border-b-[4px] border-b-green-700">
            <div className="hidden xl:flex m-auto  items-center h-full">
                <DesktopMenu />
            </div>
            <div className='w-full h-full xl:hidden'>
                <MobileMenu />
            </div>
        </header>
    )
}
