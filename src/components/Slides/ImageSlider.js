import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, memo } from "react";


const ImageSlider = ({ slides, autoPlay = false, isShowButtonLeftRight = true, timeAutoPlay = 5000 }) => {
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
            {isShowButtonLeftRight &&
                <>
                    <div
                        onClick={goToPrevious}
                        className="absolute z-10 hidden text-4xl transition-transform -translate-y-1/2 cursor-pointer group-hover:block top-2/4 left-8"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} />
                    </div>
                    <div
                        onClick={goToNext}
                        className="absolute z-10 hidden text-4xl transition-transform -translate-y-1/2 cursor-pointer group-hover:block top-2/4 right-8"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} />
                    </div>
                </>
            }
            <img
                src={slides[currentIndex].url}
                alt={`Slide ${currentIndex + 1}`}
                className="object-cover w-full h-full transition-opacity duration-500 ease-linear"
            />
        </div>
    );
}

export default memo(ImageSlider);
