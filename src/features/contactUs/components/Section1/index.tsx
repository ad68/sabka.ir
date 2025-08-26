import Image from "next/image";

export default function Index() {
    return <div className="h-[620px] overflow-hidden relative flex justify-center items-center">

        <Image width={1920} height={707} quality={100} className="w-full" src="/assets/img/contact/contact-bg.jpg" alt="contact-us" />

    </div>
}
