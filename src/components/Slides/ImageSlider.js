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
            }, timeAutoPlay);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [currentIndex, slides.length, autoPlay, timeAutoPlay]);

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
                        className="absolute z-20 hidden text-4xl transition-transform -translate-y-1/2 cursor-pointer group-hover:block top-2/4 left-8"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} />
                    </div>
                    <div
                        onClick={goToNext}
                        className="absolute z-20 hidden text-4xl transition-transform -translate-y-1/2 cursor-pointer group-hover:block top-2/4 right-8"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} />
                    </div>
                </>
            }
            <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-linear ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-10'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(ImageSlider);
