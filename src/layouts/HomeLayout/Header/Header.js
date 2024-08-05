import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { actions, useGlobalContext } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expand } from "@theme-toggles/react"
import "@theme-toggles/react/css/Expand.css"
import { faBars, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-scroll";
import Star from "../../../components/Star/Star";
import Drawer from "../../../components/Drawer/Drawer";
import { useState } from "react";

const Header = (props) => {
    const [state, dispatch] = useGlobalContext();
    const { theme } = state;

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const handleChangeTheme = () => {
        dispatch(actions.setTheme(theme));
    }

    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
    }

    return (
        <header id="home" className="w-full">
            <div className="transition-all h-[42px] bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1] fixed top-0 left-0 right-0 z-20 lg:static    flex flex-row items-center justify-between text-white dark:text-[--text-dark-color] px-4 md:px-12 2xl:px-44 text-base">
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
                    <div className="flex-row hidden lg:flex items-center justify-center gap-2 hover:cursor-pointer py-[6px]">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <div className="text-xs font-semibold uppercase">Liên hệ</div>
                    </div>
                    <div onClick={() => setIsOpenDrawer(!isOpenDrawer)} className="hover:cursor-pointer py-[6px] px-3 lg:hidden">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
                </div>
            </div>
            {/* Logo */}
            <div className="relative mt-[42px] lg:mt-0 overflow-hidden bg-white h-[150px] flex justify-center items-center dark:bg-[--primary-bg-dark-color-2] border-b-[1px] border-gray-200 dark:border-gray-500">
                <div className="uppercase z-10 text-4xl font-mono bg-gradient-to-r from-[#ff0844] to-[#ffb199] dark:from-[--btn-primary-bg-from] dark:to-[--btn-primary-bg-to] text-transparent bg-clip-text flex flex-col items-center">
                    <div className="font-serif leading-snug">thu liễu</div>
                    <div className="text-base font-bold">beauty academy</div>
                </div>
                {theme === 'dark' && Array.from({ length: 100 }).map((_, indexStar) => (
                    <Star key={indexStar} />
                ))}
            </div>
            <div className="hidden bg-white dark:bg-[--primary-bg-dark-color-1] lg:flex flex-row gap-4 text-[--primary-dark-color] dark:text-[--btn-primary-bg-to] font-semibold text-base justify-center items-center">
                <Link to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Trang chủ
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Dịch vụ
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="info"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Giới thiệu
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="collections"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Bộ sưu tập
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="cosmetics"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Mỹ phẩm
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Đào tạo
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </Link>
                <Link to="services"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} className="relative hover:cursor-pointer px-3 py-[6px] group">
                    Liên hệ
                    <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
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
