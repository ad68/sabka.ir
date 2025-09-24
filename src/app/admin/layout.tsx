'use client'
import Header from '@/components/layout/admin/components/Header'
import Sidebar from '@/components/layout/admin/components/Sidebar'
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <section className='pl-[290px] min-h-screen bg-[#F5F7FA] pr-[40px]'>
            <Header />
            <Sidebar />
            <section className='w-full pt-[120px]'>
                {children}
            </section>
        </section>
    )
}
