import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
const pages = [
    { url: "/user/dashboard", title: "داشبورد" },
    { url: "/user/persons", title: "اطلاعات شخصی" },
    { url: "/user/excel-upload/person-info", title: "آپلود اکسل اطلاعات کارکنان" },
    { url: "/user/excel-upload/salary", title: "آپلود اکسل حقوق" },
    { url: "/user/excel-upload/debt", title: "آپلود اکسل بدهی موردی" },
    { url: "/user/excel-upload/wage", title: "آپلود اکسل بدهی کارمزد" },
    { url: "/user/excel-upload/tax", title: "آپلود اکسل تسویه مالیات" },
    { url: "/user/excel-upload/blocked-amount", title: "آپلود اکسل مبالغ  بلوکه شده" },
    { url: "/user/excel-upload/benefit", title: "آپلود اکسل مبالغ  مزایا" },
    { url: "/user/excel-upload/subject", title: "آپلود اکسل مبالغ  مشمول" }
]
const useHeader = () => {
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState<string | undefined>("")
    useEffect(() => {
        setPageTitle(pages.find(el => el.url === pathname)?.title)
        console.log(pathname)
    }, [pathname])
    return {
        pageTitle,

    }
}
export default useHeader