import Image from "next/image";

const images = [
    '/assets/img/about/FifthSectionPic1.png',
    '/assets/img/about/FifthSectionPic2.png',
    '/assets/img/about/FifthSectionPic3.png',
    '/assets/img/about/FifthSectionPic4.png',
]
export default function Index(){
    return(
        <section className='w-full flex flex-row gap-2 justify-center items-center my-20 2xl:my-24  overflow-x-hidden'>
            {images.map((image,index) => {
                return (
                    <section key={index}>
                    <Image className='rounded-3xl'  src={image} alt='' width={(index == 0 || index == 3) ? 273 : 287} height={(index == 0 || index == 3) ? 250 : 320} />
                    </section>
                )
            })}
        </section>
    )
}