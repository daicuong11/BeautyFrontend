import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ImageSlider = ({ slides, autoPlay = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (autoPlay) {
            interval = setInterval(() => {
                const isLastSlide = currentIndex === slides.length - 1;
                const newIndex = isLastSlide ? 0 : currentIndex + 1;
                setCurrentIndex(newIndex);
            }, 4000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [currentIndex, slides.length, autoPlay]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className="relative h-full group">
            <div onClick={goToPrevious} className="absolute z-10 hidden text-4xl -translate-y-1/2 cursor-pointer group-hover:block top-2/4 left-8"><FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} /></div>
            <div onClick={goToNext} className="absolute z-10 hidden text-4xl -translate-y-1/2 cursor-pointer group-hover:block top-2/4 right-8"><FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} /></div>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full transition-all duration-500 ease-linear bg-center bg-cover">
            </div>
        </div>
    );
}

export default ImageSlider;