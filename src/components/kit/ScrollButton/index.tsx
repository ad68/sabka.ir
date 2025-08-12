"use client";
import { ScrollIcon } from "@/assets/icons/ScrollIcon";
import React from "react";

type ScrollButtonProps = {
    scrollTargetRef: React.RefObject<HTMLElement | null>;
};

export default function ScrollButton({ scrollTargetRef }: ScrollButtonProps) {
    const handleClick = () => {
        if (scrollTargetRef.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return <ScrollIcon onClick={handleClick} />;
}
