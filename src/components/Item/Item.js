import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Item = ({ item, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <Link className={`${className} transition-all duration-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            } cursor-pointer w-[calc(50%-8px)] sm:w-[calc(33%-12px)] lg:w-[calc(25%-24px)] bg-white dark:bg-[--primary-dark-color] rounded-md shadow-md shadow-black/25 h-72 md:h-80 flex flex-col hover:duration-300 hover:-translate-y-2 hover:ring-2 hover:ring-[--primary-color] dark:hover:ring-[--btn-primary-bg-dark-to]`}>
            <div className="w-full h-3/5 rounded-tl-md rounded-tr-md">
                <img className="object-cover w-full h-full rounded-tl-md rounded-tr-md" src={item.image} alt={item.name} />
            </div>
            <div className="flex flex-col flex-1 p-2 md:p-4">
                <div className="text-sm font-semibold line-clamp-2 md:text-base">
                    {item.isLove && (
                        <span className="mr-1 text-[10px] rounded-sm bg-[--primary-color] text-white md:text-[12px] px-1">Yêu thích</span>
                    )}
                    {item.name}
                </div>
                <div className="flex items-end gap-2 mt-1">
                    <div className="font-semibold text-red-500">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price - (item.price / 100 * item.discount))}
                    </div>
                    <div>
                        <div className="flex items-center justify-center px-1 py-1 text-[12px] leading-none text-red-500 bg-pink-300/30 font-semibold">-{item.discount}%</div>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-1 text-sm md:text-base">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} /> 4.9
                    </div>
                    <div className="text-sm">Đã bán {item.quantitySold}</div>
                </div>
            </div>
        </Link>
    );
};

export default Item;
