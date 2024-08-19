import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ImageView from '../ImageView/ImageView';

const SwiperCoverflow = ({ data, delayAuto = 2500 }) => {
    const [isOpenImageView, setIsOpenImageView] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const swiperRef = useRef(null);

    const handleOpenImageView = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
        }
        setCurrentImageIndex(index);
        setIsOpenImageView(true);
    };

    const handleCloseImageView = () => {
        setIsOpenImageView(false);
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };


    const goToNextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goToPreviousSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (data &&
        <>
            <Swiper
                effect={'coverflow'}
                autoplay={{ delay: delayAuto, disableOnInteraction: false }}
                loop
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full h-full"
                ref={swiperRef}
                onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
            >
                {data.map((image, index) =>
                    <SwiperSlide key={index} className="w-full h-full">
                        <img
                            onClick={() => handleOpenImageView(index)}
                            className="block object-cover w-full h-full cursor-pointer"
                            src={image.url}
                            alt={`Slide ${index}`}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
            <ImageView
                imageUrl={data[currentImageIndex].url}
                isOpen={isOpenImageView}
                onClose={handleCloseImageView}
                goToNext={goToNextSlide}
                goToPrevious={goToPreviousSlide}
            />
        </>
    );
}

export default SwiperCoverflow;
