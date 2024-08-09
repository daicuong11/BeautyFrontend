import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperAutoPlay = ({ slides }) => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full rounded-md h-72 bg-gradient-to-br from-[#2D82B5] to-[#53A6D8]"
        >
            {slides && slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="grid grid-cols-1 p-2 rounded-md md:grid-cols-2">
                        <div className="flex flex-col w-full p-8">
                            <div className="mt-6 text-2xl font-bold text-white">
                                {item.title}
                            </div>
                            <div className="flex-1 my-4 text-base text-slate-100">
                                {item.description}
                            </div>
                            <div className="flex-1">
                                <div className="hover:text-[#2D82B5] hover:bg-white transition-all inline-block text-white border-[3px] rounded-full px-3 py-[4px] border-white font-bold uppercase text-sm cursor-pointer">
                                    Xem ngay
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block h-72 place-self-center">
                            <img className="object-cover w-full h-full" src={item.productImage} alt={item.title} />
                        </div>
                    </div>
                </SwiperSlide>
            ),)}
        </Swiper>
    );
}

export default SwiperAutoPlay;