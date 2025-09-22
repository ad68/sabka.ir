
import News from './components/News'
import Slider from './components/Slider'
export default function Index() {
    return (
        <section
            className='relative m-auto mt-10 max-w-7xl flex gap-[97px] h-[627px] z-[-10px]'
        >
            <section className='w-[574px] h-[500px] border'>
                <Slider />
            </section>
            <News />
        </section>
    );
}
