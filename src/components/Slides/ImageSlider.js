import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import MyButton from "../Button/MyButton";

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
        <div className="relative w-full h-full overflow-hidden group/navigate">
            {isShowButtonLeftRight &&
                <>
                    <div
                        onClick={goToPrevious}
                        className="absolute z-20 hidden text-xl transition-transform -translate-y-1/2 cursor-pointer md:text-2xl lg:text-4xl group-hover/navigate:block top-2/4 left-4"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} />
                    </div>
                    <div
                        onClick={goToNext}
                        className="absolute z-20 hidden text-xl transition-transform -translate-y-1/2 cursor-pointer md:text-2xl lg:text-4xl group-hover/navigate:block top-2/4 right-4"
                    >
                        <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} />
                    </div>
                </>
            }
            {slides.map((slide, index) => (
                <div key={index} className={`transition-all duration-500 ease-in-out ${index === currentIndex ? ' opacity-100' : ' opacity-10'}`} >
                    <img
                        src={slide.url}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-linear z-10 ${index === currentIndex ? 'opacity-100' : 'opacity-25'}`}
                    />
                    <div className={`flex absolute w-full md:w-2/3 lg:w-1/2 pr-10 lg:p-8 flex-col md:gap-2 lg:gap-5 transition-all duration-500 delay-700 left-6 md:left-12 lg:left-20 bottom-[6%] ease-in-out z-10 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} `}>
                        <div className={`delay-500 transition-all duration-500 ease-in-out font-mono text-xl md:text-2xl lg:text-4xl font-bold text-white ${index === currentIndex ? '-translate-y-8 opacity-100' : 'opacity-0'}`}>
                            {slide.title}
                        </div>
                        <div className={`delay-[1000ms] hidden md:block transition-all duration-500 ease-in-out text-gray-600 text-sm font-semibold ${index === currentIndex ? '-translate-y-8 opacity-100' : 'opacity-0'}`}>
                            {slide.description}
                        </div>
                        <div className={`delay-[1500ms] transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <MyButton />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ImageSlider;
