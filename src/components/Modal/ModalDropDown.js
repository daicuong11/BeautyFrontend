import { X } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";

const locations = {
    'bottom': 'top-[calc(100%+8px)]',
    'bottom-start': 'top-[calc(100%+8px)] right-0',
    'bottom-end': 'top-[calc(100%+8px)] left-0',
};

const ModalDropDown = ({ open, onClose, isShowCloseBtn = false, location = 'bottom', children }) => {

    const modalRef = useRef();
    let css = ``;
    if (locations[location]) {
        css += locations[location];
    }

    const handleClickOutside = useCallback((event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open, handleClickOutside]);

    return (
        <div onClick={(e) => e.stopPropagation()} ref={modalRef} className={` absolute
                bg-white rounded-xl shadow-[0_-2px_16px_2px_rgba(0,0,0,0.2)] p-1 transition-all overflow-hidden
                ${open ? 'scale-100 opacity-100 translate-y-0 block z-20' : 'scale-90 opacity-0 -translate-y-5 hidden z-0'}
                ${css}
                `}>
            {isShowCloseBtn && (
                <button onClick={onClose} className="absolute p-1 text-gray-400 bg-white rounded-lg top-2 right-2 hover:bg-gray-50 hover:text-gray-600">
                    <X />
                </button>
            )}
            {children}
        </div>
    );
};

export default ModalDropDown;
