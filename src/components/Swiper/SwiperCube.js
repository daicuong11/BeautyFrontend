import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
import ImageView from '../ImageView/ImageView';

const SwiperCube = ({ data, delayAuto = 2500 }) => {
    const [isOpenImageView, setIsOpenImageView] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [currentImage, setCurrentImage] = useState('');

    const handleOpenImageView = (image) => {
        setIsAutoPlay(false);
        setCurrentImage(image);
        setIsOpenImageView(true);
    };

    const handleCloseImageView = () => {
        setCurrentImage('');
        setIsAutoPlay(true);
        setIsOpenImageView(false);
    };

    return (data &&
        <>
            <Swiper
                effect={'cube'}
                autoplay={isAutoPlay && { delay: delayAuto, disableOnInteraction: false }}
                loop
                grabCursor={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="w-full h-full"
            >
                {data.map((image, index) =>
                    <SwiperSlide key={index} className="w-full h-full">
                        <img
                            onClick={() => handleOpenImageView(image.url)}
                            className="block object-cover w-full h-full" src={image.url} alt="" />
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