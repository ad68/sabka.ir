import FirstSection from '../components/FirstSection/FirstSection'
import CardSection from '../components/CardSection/CardSection'
import ThirdSection from '../components/ThirdSection/ThirdSection'
import FourthSection from '../components/FourthSection/FourthSection'
import PerformanceSection from "../components/PerformanceSection/PerformanceSection"
import ElectronicServices from "../components/ElectronicServices/ElectronicServices"
import MapSection from "../components/MapSection/MapSection"
/* import RecentNewsSection from "../components/RecentNewsSection/RecentNewsSection"
import ReportSection from "../components/ReportSection/ReportSection" */
import MostViewsSection from "../components/MostViewsSection/MostViewsSection"
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
            <MostViewsSection />
            <ElectronicServices />
            <MapSection />
            {/*   <RecentNewsSection /> */}
            {/* <ReportSection /> */}
        </section>
    )

}
