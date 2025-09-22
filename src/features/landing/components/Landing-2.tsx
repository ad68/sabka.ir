import Hero from './Hero2'
import CardSection from './CardSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import ElectronicServices from "./ElectronicServices"
import MapSection from "./MapSection"
import Marquee from './Marquee'
import LeaderSlider from './LeaderSlider'
export default function Index() {
    return (
        <section className='w-full'>
            <section dir='ltr' className='max-w-full'>
                <Marquee />
            </section>
            <Hero />
            <section className='mt-[50px]'>
                <CardSection />
            </section>
            <FourthSection />
            <ThirdSection />
            <LeaderSlider />
            {/*  <PerformanceSection /> */}
            {/*   <MostViewsSection /> */}
            {/* <Slider /> */}
            <ElectronicServices />
            <MapSection />
            {/*   <RecentNewsSection /> */}
            {/* <ReportSection /> */}
        </section>
    )

}
