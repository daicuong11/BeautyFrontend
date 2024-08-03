import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { actions, useGlobalContext } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expand } from "@theme-toggles/react"
import "@theme-toggles/react/css/Expand.css"
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import Star from "../../../components/Star/Star";


const Header = (props) => {
    const [state, dispatch] = useGlobalContext();
    const { theme } = state;

    const handleChangeTheme = () => {
        dispatch(actions.setTheme(theme));
    }
    return (
        <header >
            <div className="transition-all h-[42px] bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1] flex flex-row items-center justify-between text-white dark:text-[--text-dark-color] px-4 md:px-12 2xl:px-44 text-base">
                <div className="flex flex-row gap-2">
                    <div className="px-2 py-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="px-2 py-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                    <div className="px-2 py-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <Expand className="text-2xl text-[--primary-bg-dark-color-1] dark:text-white" toggled={theme !== 'light'} toggle={handleChangeTheme} />
                    <div className="w-[1px] bg-gray-200 h-[16px]"></div>
                    <div className="flex flex-row items-center justify-center gap-2 hover:cursor-pointer py-[6px]">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className="text-xs font-semibold uppercase">Liên hệ</div>
                    </div>
                </div>
            </div>
            {/* Logo */}
            <div className="relative overflow-hidden h-[150px] flex justify-center items-center dark:bg-[--primary-bg-dark-color-2] border-b-[2px] border-gray-200 dark:border-gray-500">
                <div className="uppercase z-50 text-4xl font-mono bg-gradient-to-r from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] text-transparent bg-clip-text flex flex-col items-center">
                    <div className="font-serif leading-snug">thu liễu</div>
                    <div className="text-base font-bold">beauty academy</div>
                </div>
                {theme === 'dark' && Array.from({ length: 60 }).map((_, indexStar) => (
                    <Star key={indexStar} />
                ))}
            </div>
            <div className="hidden dark:bg-[--primary-bg-dark-color-1] sm:flex flex-row gap-4 text-[--primary-color] dark:text-[--btn-primary-bg-to] font-semibold text-base justify-center items-center">
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Trang chủ
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Dịch vụ
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Giới thiệu
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Bộ sưu tập
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Mỹ phẩm
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Đào tạo
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <Link to={'/'} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Liên hệ
                    <div className="absolute bottom-1 left-0 h-[2px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
                </Link>
                <div className="my-2 ml-4">
                    <Button
                        primary
                        rightIcon={<FontAwesomeIcon icon={faClock} />}
                    >Hẹn lịch</Button>
                </div>
            </div>

        </header>
    );
}

export default Header;
