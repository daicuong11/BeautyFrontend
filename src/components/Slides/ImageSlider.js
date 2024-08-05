import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useCallback } from "react";

import { slides } from "../../Static_Data";

const ImageSlider = ({ autoPlay = false, isShowButtonLeftRight = true, timeAutoPlay = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = useCallback(() => {
        setCurrentIndex(prevIndex => {
            const isLastSlide = prevIndex === slides.length - 1;
            return isLastSlide ? 0 : prevIndex + 1;
        });
    }, []);

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            goToNext();
        }, timeAutoPlay);

        return () => clearInterval(interval);
    }, [autoPlay, timeAutoPlay, goToNext]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    return (
        slides &&
        <div className="relative h-full group">
            {isShowButtonLeftRight &&
                <>
                    <div onClick={goToPrevious} className="absolute z-10 hidden text-4xl -translate-y-1/2 cursor-pointer group-hover:block top-2/4 left-8">
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} />
                    </div>
                    <div onClick={goToNext} className="absolute z-10 hidden text-4xl -translate-y-1/2 cursor-pointer group-hover:block top-2/4 right-8">
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} />
                    </div>
                </>
            }
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full transition-all duration-500 ease-linear bg-center bg-cover">
            </div>
        </div>
    );
}

export default ImageSlider;
