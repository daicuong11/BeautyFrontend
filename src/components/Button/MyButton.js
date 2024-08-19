import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyButton = () => {

    return (
        <div className="group/btn hover:bg-black/30 bg-black/20 cursor-pointer border-2 lg:border-[3px] rounded-full border-[--primary-color] dark:border-[--primary-dark-color] pl-4 pr-2 lg:py-2 py-1 text-white font-bold text-xs lg:text-base uppercase inline-flex justify-center items-center gap-4">
            Đặt lịch hẹn
            <span className="group-hover/btn:scale-110 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[--primary-color] dark:bg-[--primary-dark-color] flex justify-center items-center">
                <FontAwesomeIcon className="text-white" icon={faArrowRight} />

            </span>
        </div>
    );
}

export default MyButton;