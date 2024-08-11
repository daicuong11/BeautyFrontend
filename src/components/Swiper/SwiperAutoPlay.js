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
            className="w-full h-full rounded-md lg:rounded-xl bg-gradient-to-br from-[#2D82B5] to-[#53A6D8]"
        >
            {slides && slides.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="grid w-full h-full grid-cols-1 p-2 rounded-md lg:rounded-lg md:grid-cols-2">
                        <div className="flex flex-col justify-between p-8">
                            <div className="mt-5 text-2xl font-bold text-white md:mt-6">
                                {item.title}
                            </div>
                            <div className="text-base text-slate-100">
                                {item.description}
                            </div>
                            <div className="">
                                <div className="hover:text-[#2D82B5] hover:bg-white transition-all inline-block text-white border-[3px] rounded-full px-3 py-[4px] border-white font-bold uppercase text-sm cursor-pointer">
                                    Xem ngay
                                </div>
                            </div>
                        </div>
                        <div className="hidden h-full md:block w-72 place-self-center">
                            <img className="object-cover w-full h-full" src={item.productImage} alt={item.title} />
                        </div>
                    </div>
                </SwiperSlide>
            ),)}
        </Swiper>
    );
}

export default SwiperAutoPlay;