"use client";
import { useEffect, useState } from "react";
import LightBox from "./components/LightBox";
import "./style/style.css";
import Image from "next/image";
import More from "./icons/more.svg";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function ListGallery({ slides }: any) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightBox, setLightBox] = useState(false);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const closeLightBox = () => {
    setLightBox(false);
    setActiveSlide(0);
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(activeSlide, "activeSlide")
  }, [activeSlide])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section dir="rtl" className="w-full">
      <section className=" relative w-full rounded-lg p-4">
        {lightBox && (
          <LightBox
            onClose={closeLightBox}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            slides={slides}
          />
        )}

      </section>
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-2">
        {slides.slice(0, slides.length).map((item: any, index: any) => (
          <div className="" key={index}>
            <Image
              onClick={() => { setActiveSlide(index); setLightBox(true); }}
              className={`cursor-pointer rounded-md border-[2px] border-primary w-full p-1 ${index === activeSlide ? "border-red" : ""}`}
              src={item.imageUrl}
              width={200}
              height={200}
              alt=""
            />
          </div>
        ))}
      </section>
    </section>
  );
}
