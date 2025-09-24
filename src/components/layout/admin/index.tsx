import { Outlet } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Header from './components/Header'
export default function Index() {
    return (
        <main className="h-auto w-full max-w-full  gap-5">
            <Header />
            <section className="h-auto w-full px-4 max-w-full flex gap-5">
                <Sidebar />
                <section className="w-[100%] p-[16px] h-[90vh] mt-4 shadow-xl overflow-auto rounded-xl bg-white">
                    <Outlet />
                </section>
            </section>

        </main>
    );
}
