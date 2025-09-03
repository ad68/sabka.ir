'use client'
import CustomModal from "@/components/kit/CustomModal";
import CustomVideoPlayer from "@/components/kit/CustomVideoPlayer";
import VideoItem from './VideoItem'
import { useState } from "react";

export default function Index() {
    const [currentVideo, setCurrentVideo] = useState<string>("")
    const [openPlayer, setOpenPlayer] = useState(false)
    const playVideo = (url: string) => {
        setCurrentVideo(url)
        setOpenPlayer(true);
    }
    return <>
        <section className="max-w-6xl m-auto p-2 mb-[40px]">
            <h1 className="font-bold text-center mb-5 text-xl text-primary mt-[40px]">گالری فیلم</h1>
            <section className="grid grid-cols-1 gap-3 xl:grid-cols-3">
                <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" title="پوستر موشن چهل و یکمین سالگرد تأسیس صندوق بیمه کشاورزی" />
                {/*  <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" /> */}
                {/*      <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" />
                <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" />
                <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" />
                <VideoItem date="1404/06/11 | 20:20" playVideo={playVideo} videoSrc={"/videos/film1.mp4"} thumbSrc="/videos/thumb1.png" /> */}
            </section>
        </section>
        <CustomModal width={1000} open={openPlayer} onClose={() => setOpenPlayer(false)}>
            <div className="w-full flex justify-center items-center">
                <CustomVideoPlayer url={currentVideo} />
            </div>
        </CustomModal>
    </>
}
