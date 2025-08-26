'use client'
import dynamic from 'next/dynamic';
import Section1 from './Section1'
import ListItem from './ListItem'
import ContactUsForm from './ContactUsForm'
const Map = dynamic(() => import('./Map'), {
    ssr: false,
});
export default function Index() {
    return <main>
        <Section1 />
        <section className='mt-[-600px] relative z-10'>
            <ContactUsForm />
        </section>
        <section className='z-0 relative grid mt-[-52px] grid-cols-1 xl:grid-cols-2'>
            <div className='px-[20px] xl:px-[100px] pt-[80px]'>
                <h3 className="text-[32px] font-bold text-[#284D2C] mt-[36px] ">راه هــای ارتــبـاطــی ما</h3>
                <div className="mt-[22px] flex flex-col gap-[15px]">
                    <ListItem>تلفن :  64009000</ListItem>
                    <ListItem>دورنگار :  66557715</ListItem>
                    <ListItem>سامانه پيام كوتاه :20004882</ListItem>
                    <ListItem>پست الکترونیک :<br />
                        info@sbkiran.ir - bimeh-keshavarzi@sbkiran.ir</ListItem>
                    <ListItem>کد دستوری ثبت اعلان خسارت : #64009*6655*</ListItem>
                    <ListItem>صندوق پستی :   3365-14155</ListItem>
                    <ListItem>
                        آدرس: <br />
                        تهران - خیابان شهید دکتر حبیب الهی - خیابان یکم دریان نو (سروش یکم) - تقاطع زنجان شمالی - پلاک 58
                    </ListItem>
                </div>
            </div>
            <div className="bg-white w-full border h-[545px] m-auto shadow-md overflow-hidden mt-10 xl:mt-0">
                <Map />
            </div>
        </section>

    </main>
}
