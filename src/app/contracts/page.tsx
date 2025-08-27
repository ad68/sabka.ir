import { numberWithCommas } from '@/utils';
import { NextPage } from 'next'
const data = [
    {
        id: 1075,
        date: "1403/03/30",
        company: "شرکت آلیاسیس ارتباط",
        subject: "مدیریت و نگهداری و پشتیبانی شبکه رایانه",
        amount: 3000000000,
        start: "1403/04/01",
        end: "1404/03/31",
        law: "بند (ب) ماده (11) قانون برگزاری مناقصات",
    },
    {
        id: 1076,
        date: "1403/03/30",
        company: "شرکت بازرگانی نوید مهر هخامنش",
        subject: "اجاره قسمتی از سوله",
        amount: 2250000000,
        start: "1403/04/01",
        end: "1403/12/30",
        law: "بند (ب) ماده (29) قانون برگزاری مناقصات",
    },
    {
        id: 1091,
        date: "1403/04/11",
        company: "شرکت آباد یار عمران",
        subject: "تعمیرات ساختمان - بازسازی ابنیه",
        amount: 14495000000,
        start: "1403/04/12",
        end: "1403/07/11",
        law: "بند (ب) ماده (11) قانون برگزاری مناقصات",
    },
    {
        id: 1092,
        date: "1403/04/12",
        company: "شرکت پادرا مهر صنعت",
        subject: "تعمیرات ساختمان - بازسازی تأسیسات",
        amount: 14498250000,
        start: "1403/04/12",
        end: "1403/07/11",
        law: "بند (ب) ماده (11) قانون برگزاری مناقصات",
    },
    {
        id: 235,
        date: "1403/04/23",
        company: "شرکت افرانت",
        subject: "اجاره فضای رک",
        amount: 3660000000,
        start: "1403/01/18",
        end: "1404/01/18",
        law: null,
    },
    {
        id: 1935,
        date: "1403/05/15",
        company: "شرکت خدمات پشتیبانی مهر 78",
        subject: "اجاره خودرو",
        amount: 2376000000,
        start: "1403/05/15",
        end: "1404/05/14",
        law: "بند (و) ماده (29) قانون برگزاری مناقصات",
    },
    {
        id: 1104,
        date: "1403/05/24",
        company: "شرکت پادرا مهر صنعت",
        subject: "الحاقیه قرارداد 1092 تعمیرات ساختمان",
        amount: 3624562500,
        start: null,
        end: "1403/07/11",
        law: "بند (ب) ماده (11) قانون برگزاری مناقصات",
    },
    {
        id: 1105,
        date: "1403/05/24",
        company: "شرکت آباد یار عمران",
        subject: "الحاقیه قرارداد 1091 تعمیرات ساختمان",
        amount: 3623750000,
        start: null,
        end: "1403/07/11",
        law: "بند (ب) ماده (11) قانون برگزاری مناقصات",
    },
];

const Index: NextPage = () => {
    return <section className='max-w-6xl m-auto mb-5 overflow-auto'>
        <h1 className="font-bold text-center text-xl text-primary mt-5"> فهرست قراردادهای منعقده  صندوق بیمه کشاورزی در سال1403 </h1>
        <table className="min-w-full text-sm text-right mt-5">
            <thead className="bg-gray-100 sticky top-0 text-center">
                <tr>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>ردیف</th>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>شماره قرارداد	</th>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>تاریخ قرارداد	</th>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>طرف قرارداد</th>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>موضوع قرارداد</th>
                    <th className="px-3 py-2 font-medium border" rowSpan={2}>مبلغ (ریال)</th>
                    <th className="px-3 py-2 font-medium border" colSpan={2}>
                        مدت قرارداد
                    </th>
                    <th className="px-3 py-2 font-medium row-span-2 border" rowSpan={2}>
                        نحوه انتخاب
                    </th>
                </tr>
                <tr>
                    <th className='border p-2'>
                        از تاریخ
                    </th>
                    <th className='border'>
                        تا تاریخ
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y">
                {data.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{row.id}</td>
                        <td className="px-3 py-2">{row.date}</td>
                        <td className="px-3 py-2">{row.company}</td>
                        <td className="px-3 py-2">{row.subject}</td>
                        <td className="px-3 py-2">{numberWithCommas(row.amount)}</td>
                        <td className="px-3 py-2">{row.start}</td>
                        <td className="px-3 py-2">{row.end}</td>
                        <td className="px-3 py-2">{row.law}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr className='bg-slate-100'>
                    <td colSpan={5} className=' p-4 border font-bold text-xl'>
                        جمع کل
                    </td>
                    <td colSpan={4} className=' border p-4 font-bold text-xl'>
                        {numberWithCommas("47,527,562,500")}
                        <span className='mr-1'>ریال</span>
                    </td>
                </tr>
            </tfoot>
        </table>
    </section>
}
export default Index