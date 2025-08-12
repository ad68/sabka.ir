
import React from "react";
import PetServiceSecondSection from "@/features/pet-services/components/second-section/SecondSection";
import PrioritySection from "@/features/pet-services/components/priority-section/PrioritySection";
import PetServiceFourthSection from "@/features/pet-services/components/fourth-section/FourthSection";
import PetServiceFifthSection from "@/features/pet-services/components/fifth-section/FifthSection";
import PetServiceCommentsSection from "@/features/pet-services/components/comments-section/CommentsSection";
import PetServiceLastSection from "@/features/pet-services/components/last-section/LastSection";
import PetServiceFirstSection from "@/features/pet-services/components/first-section/FirstSection";

export default function PetServices(){
    return(
        <section className='w-full overflow-x-hidden'>
            <section className='w-full max-w-5xl m-auto flex flex-col justify-start  items-center gap-4'>
                <PetServiceFirstSection />
                <PetServiceSecondSection />
                <PrioritySection />
                <PetServiceFourthSection/>
                <section className='mt-20'>
                    <PetServiceFifthSection/>
                </section>
            </section>
            <section className='mt-20'>
                <PetServiceCommentsSection/>
            </section>
            <PetServiceLastSection/>
        </section>

    )
}