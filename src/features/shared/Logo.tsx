import Image from "next/image";
import React from "react";

export function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        <section>
            <Image
                src="/assets/img/logo.png"
                alt="sabka-logo"
                width={100}
                height={100}
                {...props}
                className="w-full h-auto object-contain"
                priority
            />
        </section>
    )
}