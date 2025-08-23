
import Menu from './components/DesktopMenu'
export default function Index() {
    return <header className="hidden xl:block h-[84px] z-[200] w-full bg-white fixed top-0 left-0 border-b-[4px] border-b-green-700">
        <div className=" m-auto flex items-center h-full">
            <Menu />
        </div>
    </header>
}
