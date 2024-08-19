import { useEffect } from 'react';
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageView = ({ imageUrl, isOpen, onClose, goToNext = () => '', goToPrevious = () => '' }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        isOpen &&
        <div onClick={onClose} className="fixed inset-0 z-40 flex items-center justify-center overflow-visible transition-all duration-500 ease-in-out bg-opacity-75 bg-slate-600 group">
            <div onClick={e => e.stopPropagation()} className="w-3/4 h-1/2 md:w-10/12 md:h-5/6 lg:w-[620px] lg:h-[620px]">
                <img className="object-cover w-full h-full bg-center shadow-xl rounded-xl shadow-black/40" src={imageUrl} alt="" />
            </div>
            <div onClick={onClose} className="absolute p-3 text-4xl text-white cursor-pointer top-5 right-6">
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div
                onClick={e => {
                    e.stopPropagation();
                    goToPrevious();
                }}
                className="absolute z-40 text-xl transition-transform -translate-y-1/2 cursor-pointer lg:hidden md:text-2xl lg:text-4xl lg:group-hover:block top-2/4 left-4"
            >
                <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronLeft} />
            </div>
            <div
                onClick={e => {
                    e.stopPropagation();
                    goToNext();
                }}
                className="absolute z-40 text-xl transition-transform -translate-y-1/2 cursor-pointer lg:hidden md:text-2xl lg:text-4xl lg:group-hover:block top-2/4 right-4"
            >
                <FontAwesomeIcon color="white" className="opacity-50 hover:opacity-100" icon={faChevronRight} />
            </div>
        </div>
    );
}

export default ImageView;
