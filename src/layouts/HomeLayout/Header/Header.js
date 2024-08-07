import { actions, useGlobalContext } from "../../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Expand } from "@theme-toggles/react"
import "@theme-toggles/react/css/Expand.css"
import { faBars, faClock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/Button/Button";
import { Link } from "react-scroll";
import Drawer from "../../../components/Drawer/Drawer";
import { useState } from "react";
import { Link as LinkTo } from 'react-router-dom';
import { logo_img } from '../../../assets/images';

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
            <div className="gap-4 transition-all h-[68px] bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1] fixed top-0 left-0 right-0 z-20 flex flex-row items-center justify-between text-white dark:text-[--text-dark-color] px-4 sm:px-8 md:px-12 2xl:px-44 text-base">
                <LinkTo to={'/'} className="flex flex-row items-center justify-center gap-3 px-3 py-1">
                    <img className="object-cover w-[38px] h-[38px] bg-white rounded-md dark:bg-black" src={logo_img} alt="" />
                    <div className="uppercase cursor-pointer z-10 text-xl font-mono bg-gradient-to-r from-[#fcd0db] to-[#fed8cd] dark:from-[--btn-primary-bg-from] dark:to-[--btn-primary-bg-to] text-transparent bg-clip-text flex flex-col items-center">
                        <div className="font-serif leading-snug tracking-wider">thu liễu</div>
                        <div className="text-xs font-bold">beauty academy</div>
                    </div>
                </LinkTo>

                <div className="flex flex-row items-center justify-end">
                    <div className="hidden lg:flex flex-row gap-6 dark:text-[--btn-primary-bg-to] font-semibold text-base justify-center items-center">
                        <Link to="services"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Dịch vụ
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>
                        <Link to="info"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Giới thiệu
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>
                        <Link to="collections"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Bộ sưu tập
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>
                        <Link to="cosmetics"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Mỹ phẩm
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>
                        <Link to="courses"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Đào tạo
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-68}
                            duration={500} className="relative hover:cursor-pointer py-[6px] group">
                            Liên hệ
                            <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                        </Link>

                    </div>
                    <div className="w-[1px] bg-white/60 h-[24px] mx-4 lg:block hidden"></div>
                    <div className="flex flex-row items-center justify-center gap-5">
                        <Expand className="text-2xl text-[--primary-bg-dark-color-1] dark:text-white" toggled={theme !== 'light'} toggle={handleChangeTheme} />
                        <div className="hidden md:block">
                            <Button
                                primary
                                rightIcon={<FontAwesomeIcon icon={faClock} />}
                            >Hẹn lịch</Button>
                        </div>
                        <div onClick={() => setIsOpenDrawer(!isOpenDrawer)} className="px-3 py-3 text-xl hover:cursor-pointer lg:hidden">
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <Drawer isOpen={isOpenDrawer} onClose={handleCloseDrawer} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
