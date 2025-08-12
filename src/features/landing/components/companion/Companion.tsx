import {StarIcon} from "@/assets/icons/StarIcon";
import {Layers} from "../../../../../public/assets/img/companion/layers";
import {LayersIcon} from "../../../../../public/assets/img/companion/layersIcon";
import {Sisyphus} from "../../../../../public/assets/img/companion/sisyphus";
import {SisyphusIcon} from "../../../../../public/assets/img/companion/sisyphusIcon";
import {Circooles} from "../../../../../public/assets/img/companion/circooles";
import {CircoolesIcon} from "../../../../../public/assets/img/companion/circoolesIcon";
import {Catalog} from "../../../../../public/assets/img/companion/catalog";
import {CatalogIcon} from "../../../../../public/assets/img/companion/catalogIcon";
import {Quotient} from "../../../../../public/assets/img/companion/quotient";
import {QuotientIcon} from "../../../../../public/assets/img/companion/quotientIcon";
import {StarTwoIcon} from "@/assets/icons/StarTwoIcon";

const companions = [
    {icon:<QuotientIcon className='w-8 h-8'/>, name:<Quotient  className='w-14 h-14'/>},
    {icon:<CatalogIcon className='w-8 h-8'/>, name:<Catalog  className='w-14 h-14'/>},
    {icon:<CircoolesIcon className='w-8 h-8'/>, name:<Circooles  className='w-14 h-14'/>},
    {icon:<SisyphusIcon className='w-8 h-8'/>, name:<Sisyphus  className='w-14 h-14'/>},
    {icon:<LayersIcon className='w-8 h-8'/> , name:<Layers className='w-14 h-14'/>},
]

export default function Index() {
    return (
        <section className='flex flex-col mt-10 mb-20 gap-4 px-40 max-w-5xl m-auto'>
            <section className='my-10'>
                <p className='flex flex-row gap-2 items-center justify-center font-semibold'> <span>همراهان ما</span>  <StarTwoIcon className='w-5 h-5' color={'#FF7700'} /> </p>
                <p className='text-xl text-center tracking-wide mt-1'><span className='font-bold'>همراهان ارشمند ما،</span><span>شریکان حمایت و رفاه عزیزان شما</span></p>
            </section>

            <ul className='w-full flex flex-row  items-center justify-between '>
                {companions.map((item, index) => (
                    <li className='gap-1 flex flex-row justify-center items-center flex-wrap' key={index}>
                        <span > {item.name}</span>
                        <span >{item.icon}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}