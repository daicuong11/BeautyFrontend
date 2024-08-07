import { useEffect } from 'react';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageView = ({ imageUrl, isOpen, onClose }) => {

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
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-visible transition-all duration-500 ease-in-out bg-opacity-75 bg-slate-600">
            <div className="w-3/4 h-1/2 md:w-10/12 md:h-5/6 lg:w-[620px] lg:h-[620px]">
                <img className="object-cover w-full h-full bg-center shadow-xl rounded-xl shadow-black/40" src={imageUrl} alt="" />
            </div>
            <div onClick={onClose} className="absolute p-3 text-4xl text-white cursor-pointer top-5 right-6">
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
}

export default ImageView;
