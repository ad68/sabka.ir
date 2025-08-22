import FirstSection from './FirstSection'
import CardSection from './CardSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import PerformanceSection from "./PerformanceSection"
import ElectronicServices from "./ElectronicServices"
import MapSection from "./MapSection"
import Slider from "./Slider"
/* import RecentNewsSection from "../components/RecentNewsSection/RecentNewsSection"
import ReportSection from "../components/ReportSection/ReportSection" */
import MostViewsSection from "./MostViewsSection"
export default function Index() {
    return (
        <section className='w-full'>
            <FirstSection />
            <section className='mt-[-100px]'>
                <CardSection />
            </section>
            <ThirdSection />
            <FourthSection />
            <PerformanceSection />
            {/*   <MostViewsSection /> */}
            <Slider />
            <ElectronicServices />
            <MapSection />
            {/*   <RecentNewsSection /> */}
            {/* <ReportSection /> */}
        </section>
    )

}
