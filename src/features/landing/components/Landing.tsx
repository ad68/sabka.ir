import FirstSection from './FirstSection'
import CardSection from './CardSection2'
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
            <FirstSection />
            <section className='xl:mt-[-150px] 2xl:mt-[-150px]'>
                <CardSection />
            </section>
            <FourthSection />
            <LeaderSlider />
            {/*  <ThirdSection /> */}
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
