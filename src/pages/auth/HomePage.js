import ImageSlider from "../../components/Slides/ImageSlider";
import FlipCard from "../../components/flip_card/FlipCard";
import { services, slides, collection } from "../../Static_Data/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InfoMember from "../../components/InfoMember/InfoMember";
import SwiperCube from "../../components/Swiper/SwiperCube";
import SwiperCoverflow from "../../components/Swiper/SwiperCoverflow";
import Button from "../../components/Button";

const HomePage = () => {

    const [isFlip, setIsFlip] = useState(false);

    const handleFlip = () => {
        setIsFlip(!isFlip);
    }

    return (
        <div className="min-h-screen">
            <div className="w-full h-[50vh] xl:h-[700px] mx-auto mt-[68px]">
                <ImageSlider slides={slides} autoPlay />
            </div>
            <div id="services" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base text-white uppercase">Dịch vụ</div>
                    <div className="text-2xl font-bold text-center text-gray-200 sm:text-3xl font-play_write">Tốt Nhất Dành Cho Bạn</div>
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
                <div className="flex flex-row flex-wrap justify-center gap-4 mt-6 sm:gap-8">
                    {services.map((dataFlip, indexService) =>
                        <div className="mx-auto">
                            <FlipCard key={indexService} data={dataFlip} flip={isFlip} />
                        </div>
                    )}
                </div>
            </div>
            <div id="info" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-800 bg-white dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Giới thiệu</div>
                    <div className="text-2xl font-bold text-center sm:text-3xl font-play_write">Thu Liễu Beauty Academy</div>
                </div>

                <InfoMember />
            </div>
            <div id="collections" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-800 bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
                    <div className="font-sans text-base text-white uppercase">Bộ sưu tập</div>
                    <div className="text-2xl font-bold text-center text-gray-200 sm:text-3xl font-play_write">Khám Phá Sự Hoàn Hảo</div>
                    <div className="grid w-full grid-cols-3 mt-12 overflow-hidden">
                        <div className="w-[96%] h-36 sm:h-48 lg:h-64 xl:h-[300px] place-self-start">
                            <SwiperCube data={collection.lip} delayAuto={3000} />
                        </div>
                        <div className="w-[96%] h-36 place-self-center sm:h-48 lg:h-64 xl:h-[300px]">
                            <SwiperCube data={collection.eyebrow} delayAuto={3500} />
                        </div>
                        <div className="w-[96%] h-36 sm:h-48 lg:h-64 xl:h-[300px] place-self-end">
                            <SwiperCube data={collection.nail} delayAuto={4000} />
                        </div>
                    </div>
                    <div className="w-full py-2 md:py-4 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-2] h-52 sm:h-60 lg:h-72 xl:h-80">
                        <SwiperCoverflow data={collection.work} />
                    </div>

                    <div className="mt-2">
                        <Button
                            to={'collections'}
                            outline
                            className='text-sm lg:text-base'
                        >
                            Xem tất cả
                        </Button>
                    </div>
                </div>

            </div>
            <div id="cosmetics" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-900 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Mỹ phẩm</div>
                    <div className="sm:text-3xl font-bold text-center text-2xl font-play_write text-slate-700 dark:text-[--text-dark-color]">Vẻ Đẹp Từ Thiên Nhiên</div>
                </div>

                <div className="min-h-screen"></div>
            </div>
            <div id="courses" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-900 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">đào tạo</div>
                    <div className="sm:text-3xl font-bold text-center text-2xl font-play_write text-slate-700 dark:text-[--text-dark-color]">Vẻ Đẹp Từ Thiên Nhiên</div>
                </div>

                <div className="min-h-screen"></div>
            </div>
            <div id="contact" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-900 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Liên hệ</div>
                    <div className="sm:text-3xl font-bold text-center text-2xl font-play_write text-slate-700 dark:text-[--text-dark-color]">Vẻ Đẹp Từ Thiên Nhiên</div>
                </div>

                <div className="min-h-screen"></div>
            </div>
        </div>
    );
}

export default HomePage;