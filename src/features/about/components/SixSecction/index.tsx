import CardItem from "./components/Item";
import {CropsIcon} from "@/assets/icons/CropsIcon";
import {LiveStockIcon} from "@/assets/icons/LiveStockIcon";
import {TreeIcon} from "@/assets/icons/TreeIcon";
import {WalletIcon} from "@/assets/icons/WalletIcon";
import {TreesIcon} from "@/assets/icons/TreesIcon";

const items = [
    {title: 'اصل برابری' , icon:<CropsIcon />},
    {title: 'اصل احترام و اعتماد' , icon:<LiveStockIcon />},
    {title: 'اصل پاسخگویی' , icon:<TreeIcon />},
    {title: 'اصل تعهد و وفاداری به صندق' , icon:<WalletIcon />},
    {title: 'اصل شهروندمداری' , icon:<TreesIcon />},
    {title: 'اصل شفافیت' , icon:<CropsIcon />},
    {title: 'اصل عدم سواستفاده از موقعیت شغلی' , icon:<CropsIcon />},
    {title: 'اصل به کار گیری مهارت و تخصص' , icon:<CropsIcon />},
]
export default function Index(){
    return (
        <section className='w-full flex flex-col justify-center items-center p-6'>
            <h1 className='text-[#284D2C] text-3xl font-bold'>منشور اخلاقی کــارکــنــان</h1>
            <section className='flex flex-row flex-wrap justify-center items-center gap-10 max-w-5xl my-16'>
                {items.map((item,index) => {
                    return (
                        <CardItem key={index} index={index} title={item.title} icon={item.icon}/>
                    )
                })}

            </section>
        </section>
    )
}