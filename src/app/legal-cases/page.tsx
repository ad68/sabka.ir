import { Metadata } from "next";
export const metadata: Metadata = {
    title: "ارای قطعی مراجع قضایی | صندوق بیمه کشاورزی",

};
export default function Index() {
    const data = [
        { id: 1, province: 'قزوین', caseType: 'مطالبه خسارت', branch: 'شعبه دهم دادگاه تجدید نظر استان قزوین', party: 'له', date: '1403/2/5' },
        { id: 2, province: 'لرستان', caseType: 'مطالبه خسارت', branch: 'شعبه دوم دادگاه تجدید نظر دادگستری کل استان لرستان', party: 'علیه', date: '1403/2/19' },
        { id: 3, province: 'اردبیل', caseType: 'مطالبه خسارت', branch: 'شعبه 9 دادگاه تجدیدنظر دادگستری استان اردبیل', party: 'له', date: '1403/3/9' },
        { id: 4, province: 'قزوین', caseType: 'مطالبه خسارت', branch: 'شعبه دوم دادگاه تجدید نظر استان قزوین', party: 'له', date: '1403/3/19' },
        { id: 5, province: 'کرمانشاه', caseType: 'مطالبه خسارت', branch: 'شعبه 2 دادگاه تجدید نظر استان کرمانشاه', party: 'علیه', date: '1403/3/23' },
        { id: 6, province: 'کردستان', caseType: 'تبدیل وضعیت ایثارگران', branch: 'شعبه 40 دیوان عدالت اداری', party: 'له', date: '1403/2/29' },
        { id: 7, province: 'گلستان', caseType: 'مطالبه خسارت', branch: 'شعبه سیزدهم دادگاه تجدید نظر استان گلستان', party: 'علیه', date: '1403/3/27' },
        { id: 8, province: 'گیلان', caseType: 'مطالبه خسارت', branch: 'شعبه 6 دادگاه تجدید نظر استان گیلان', party: 'له', date: '1403/4/10' },
        { id: 9, province: 'اردبیل', caseType: 'مطالبه خسارت', branch: 'شعبه 2 دادگاه تجدید نظر دادگستری استان اردبیل', party: 'علیه', date: '1403/4/30' },
        { id: 10, province: 'گلستان', caseType: 'مطالبه خسارت', branch: 'شعبه یازدهم دادگاه تجدید نظر استان گلستان', party: 'علیه', date: '1403/5/2' },
        { id: 11, province: 'گلستان', caseType: 'مطالبه خسارت', branch: 'شعبه پانزدهم دادگاه تجدید نظر استان گلستان', party: 'له', date: '1403/5/20' },
        { id: 12, province: 'لرستان', caseType: 'مطالبه خسارت', branch: 'شعبه دوم دادگاه تجدید نظر دادگستری کل استان لرستان', party: 'له', date: '1403/5/31' },
        { id: 13, province: 'مازندران', caseType: 'تبدیل وضعیت ایثارگران', branch: 'شعبه 23 تجدید نظر دیوان عدالت اداری', party: 'له', date: '1403/6/11' },
        { id: 14, province: 'خراسان جنوبی', caseType: 'مطالبه خسارت', branch: 'شعبه سوم دادگاه تجدید نظر استان خراسان جنوبی', party: 'له', date: '1403/6/26' },
        { id: 15, province: 'لرستان', caseType: 'مطالبه خسارت', branch: 'شعبه دوم دادگاه تجدید نظر دادگستری استان لرستان', party: 'له', date: '1403/6/28' },
        { id: 16, province: 'کرمانشاه', caseType: 'مطالبه خسارت', branch: 'شعبه 8 دادگاه تجدید نظر دادگستری استان کرمانشاه', party: 'له', date: '1403/7/3' },
        { id: 17, province: 'مرکزی', caseType: 'مطالبه خسارت', branch: 'شعبه 11 دادگاه تجدید نظر دادگستری استان مرکزی', party: 'علیه', date: '1403/5/25' },
        { id: 18, province: 'خراسان رضوی', caseType: 'مطالبه خسارت', branch: 'شعبه 17 دادگاه تجدید نظر استان خراسان رضوی', party: 'علیه', date: '1403/6/26' }
    ];
    return <section className="max-w-6xl m-auto mt-10 mb-10">
        <h1 className="font-bold text-center mb-5 text-xl text-primary">آرای قطعی مراجع قضایی</h1>
        <table className="min-w-full text-sm text-right">
            <thead className="bg-gray-100 sticky top-0">
                <tr>
                    <th className="px-3 py-2 font-medium">ردیف</th>
                    <th className="px-3 py-2 font-medium">استان</th>
                    <th className="px-3 py-2 font-medium">موضوع</th>
                    <th className="px-3 py-2 font-medium">شعبه رسیدگی کننده</th>
                    <th className="px-3 py-2 font-medium">له /علیه</th>
                    <th className="px-3 py-2 font-medium"> تاریخ قطعیت یافته</th>
                </tr>
            </thead>
            <tbody className="divide-y">
                {data.map((row, index) => (
                    <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-3 py-2">{row.id}</td>
                        <td className="px-3 py-2">{row.province}</td>
                        <td className="px-3 py-2">{row.caseType}</td>
                        <td className="px-3 py-2">{row.branch}</td>
                        <td className="px-3 py-2">{row.party}</td>
                        <td className="px-3 py-2">{row.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
}
