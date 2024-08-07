import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import ImageView from '../ImageView/ImageView';

const SwiperCube = ({ data, delayAuto = 2500 }) => {
    const [isOpenImageView, setIsOpenImageView] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const swiperRef = useRef(null);

    const handleOpenImageView = (image) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
        }
        setCurrentImage(image);
        setIsOpenImageView(true);
    };

    const handleCloseImageView = () => {
        setIsOpenImageView(false);
        setCurrentImage('');
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    return (data &&
        <>
            <Swiper
                effect={'cube'}
                autoplay={{ delay: delayAuto, disableOnInteraction: false }}
                loop
                grabCursor={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="w-full h-full"
                ref={swiperRef}
            >
                {data.map((image, index) =>
                    <SwiperSlide key={index} className="w-full h-full">
                        <img
                            onClick={() => handleOpenImageView(image.url)}
                            className="block object-cover w-full h-full"
                            src={image.url}
                            alt={`Slide ${index}`}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
            <ImageView
                imageUrl={currentImage}
                isOpen={isOpenImageView}
                onClose={handleCloseImageView}
            />
        </>
    );
}

export default SwiperCube;
