import Hero from './Hero'
/* import CardSection from './CardSection' */
import CardSection2 from './CardSection2'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
/* import PerformanceSection from "./PerformanceSection" */
import ElectronicServices from "./ElectronicServices"
import MapSection from "./MapSection"
import Marquee from './Marquee'
import LeaderSlider from './LeaderSlider'
/* import Slider from "./Slider" */
/* import RecentNewsSection from "../components/RecentNewsSection/RecentNewsSection"
import ReportSection from "../components/ReportSection/ReportSection" */
/* import MostViewsSection from "./MostViewsSection" */
export default function Index() {
    return (
        <section className='w-full'>
            <section dir='ltr' className='max-w-full'>
                <Marquee />
            </section>
            <Hero />
            <section className='xl:mt-[-150px] 2xl:mt-[-150px]'>
                <CardSection2 />
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
