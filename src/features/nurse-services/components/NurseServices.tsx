import NurseServiceFirstSection from "@/features/nurse-services/components/first-section/FirstSection";
import PrioritySection from "@/features/nurse-services/components/nurse-priority/PrioritySection";
import NurseServiceThirdSection from "@/features/nurse-services/components/third-section/NurseServiceThirdSection";
import NurseServiceFourthSection from "@/features/nurse-services/components/fourth-section/NurseServiceFourthSection";
import NurseServiceFifthSection from "@/features/nurse-services/components/fifth-section/NurseServicesFifthSection";
import NurseServiceCommentSection
    from "@/features/nurse-services/components/comments-section/NurseServiceCommentSection";
import NurseServiceLastSection from "@/features/nurse-services/last-section/LastSection";

export default function NurseServices(){
    return(
        <section className='w-full overflow-x-hidden'>
            <section className='w-full max-w-5xl m-auto flex flex-col justify-start  items-center gap-4'>
                <NurseServiceFirstSection/>
                <PrioritySection/>
                <NurseServiceThirdSection/>
                <NurseServiceFourthSection/>
                <NurseServiceFifthSection/>
                <NurseServiceCommentSection/>
                <NurseServiceLastSection/>

            </section>
        </section>
    )
}