import { HomeIcon, TextIcon } from "lucide-react";
import MenuItem from './components/MenuItem'
import Collapse from './components/Collapse'
import { usePathname } from "next/navigation";

export default function Index() {
    const pathname = usePathname()
    const links = [
        {
            name: 'داشبورد',
            href: '/user/dashboard',
            active: pathname.startsWith('/user/dashboard'),
            icon: (
                <HomeIcon className={`${pathname.startsWith(`/user/dashboard`) ? 'text-white' : "text-slate-400"}`} />
            ),
        },
        {
            name: 'اطلاعات شخصی',
            href: '/user/persons',
            active: pathname.startsWith('/user/persons') || pathname.startsWith('/user/person'),
            icon: (
                <TextIcon className={`${pathname.startsWith('/user/persons') || pathname.startsWith('/user/person') ? 'text-white' : "text-slate-400"}`} />
            ),
        },
        {
            name: 'آپلود اکسل',
            icon: <ExcelIcon className={`${pathname.startsWith('/excel-upload') || pathname.startsWith('/user/excel-upload') ? 'text-white' : "text-slate-400"} w-[15px]`} />,
            active: pathname.startsWith('/user/excel-upload') || pathname.startsWith('/user/excel-upload'),
            children: [
                {
                    title: "اطلاعات کارکنان",
                    href: '/user/excel-upload/person-info',
                    active: pathname.startsWith('/user/excel-upload/person-info'),
                },
                {
                    title: "اطلاعات حقوق",
                    href: '/user/excel-upload/salary',
                    active: pathname.startsWith('/user/excel-upload/salary'),
                },
                {
                    title: "بدهی موردی",
                    href: '/user/excel-upload/debt',
                    active: pathname.startsWith('/user/excel-upload/debt'),
                },
                {
                    title: "کارمزد",
                    href: '/user/excel-upload/wage',
                    active: pathname.startsWith('/user/excel-upload/wage'),
                },
                {
                    title: "تسویه مالیات",
                    href: '/user/excel-upload/tax',
                    active: pathname.startsWith('/user/excel-upload/tax'),
                },
                {
                    title: "مبالغ بلوکه شده",
                    href: '/user/excel-upload/blocked-amount',
                    active: pathname.startsWith('/user/excel-upload/blocked-amount'),
                },
                {
                    title: "مزایا",
                    href: '/user/excel-upload/benefit',
                    active: pathname.startsWith('/user/excel-upload/benefit'),
                },
                {
                    title: "مشمول",
                    href: '/user/excel-upload/subject',
                    active: pathname.startsWith('/user/excel-upload/subject'),
                },
            ]
        },

    ]
    return <section className="w-full h-full rounded-b-xl bg-white  px-[15px] py-[15px]">
        <div className="">
            {links.map((item: any, index: number) => <div key={index} className="cursor-pointer">
                {item?.children ? <Collapse item={item} /> : <MenuItem item={item} />}
            </div>)}
        </div>
    </section>
}
