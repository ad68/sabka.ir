
import Profile from './components/Profile'
import Menus from './components/Menus'
import Header from './components/Header'
export default function Index() {
    return <aside className="w-[250px] relative shadow-xl rounded-b-xl min-h-[400px] h-auto">
        {/* <Profile /> */}
        <Header />
        <Menus />
    </aside>
}
