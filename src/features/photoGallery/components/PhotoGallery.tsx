'use client'
import Item from './PhotoGalleryItem'
export default function Index() {

    return <>
        <section className="max-w-6xl m-auto p-2 mb-[40px]">
            <h1 className="font-bold text-center mb-5 text-xl text-primary mt-[40px]">آلبوم تصاویر</h1>
            <section className="grid grid-cols-1 gap-3 xl:grid-cols-3">
                <Item href="/photo-gallery/1?title=مراسم گرامیداشت هفته دولت و روز کارمند - 5 شهریورماه 1404" imageSrc="/assets/img/news/news13.jpg" title="مراسم گرامیداشت هفته دولت و روز کارمند - 5 شهریورماه 1404" />
            </section>
        </section>

    </>
}
