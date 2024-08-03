import ImageSlider from "../../components/Slides/ImageSlider";
import FlipCard from "../../components/flip_card/FlipCard";
import { services, slides } from "../../Static_Data/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HomePage = () => {

    const [isFlip, setIsFlip] = useState(false);

    const handleFlip = () => {
        setIsFlip(!isFlip);
    }

    return (
        <div className="min-h-screen">
            <div className="w-full h-[50vh] xl:h-[700px] mx-auto">
                <ImageSlider slides={slides} autoPlay />
            </div>
            <div className="py-12 px-4 md:px-12 2xl:px-44 bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base text-white uppercase">Dịch vụ</div>
                    <div className="text-3xl font-bold text-center text-gray-200 font-play_write">Tốt Nhất Dành Cho Bạn</div>
                    <div className="">
                        <div onClick={handleFlip} className="group w-8 h-8 [perspective:1000px]">
                            <div className={`relative w-full h-full bg-[--primary-color-2] dark:bg-[--primary-dark-color] cursor-pointer ring-1 ring-gray-300 hover:ring-white dark:ring-slate-400 dark:hover:ring-slate-200 transition-all duration-500 shadow-xl rounded-xl [transform-style:preserve-3d] ${isFlip && '[transform:rotateY(180deg)]'}`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FontAwesomeIcon className="text-white transition-all duration-500 group-hover:rotate-45" icon={faArrowRotateRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-center mt-6 2xl:justify-between gap-y-8 gap-x-8">
                    {services.map((dataFlip, indexService) =>
                        <FlipCard key={indexService} data={dataFlip} flip={isFlip} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomePage;