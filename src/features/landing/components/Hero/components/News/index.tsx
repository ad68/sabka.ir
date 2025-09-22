import NewsItem from './components/NewsItem'
const news = [
    "/assets/img/landing/hero-news-1.png",
    "/assets/img/landing/hero-news-2.png",
    "/assets/img/landing/hero-news-3.png",
    "/assets/img/landing/hero-news-4.png",
]
export default function Index() {
    return <section className="w-[521px] h-[500px] flex flex-col gap-[49px]">
        {news.map((item, index) => (<NewsItem key={index} img={item} />))}


    </section>
}
