import FirstSection from './FirstSection'
import CardSection from './CardSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
/* import PerformanceSection from "./PerformanceSection" */
import ElectronicServices from "./ElectronicServices"
import MapSection from "./MapSection"
import Marquee from './Marquee'
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
            <section className='xl:mt-[-150px] 2xl:mt-[-200px]'>
                <CardSection />
            </section>
            <ThirdSection />
            <FourthSection />
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
