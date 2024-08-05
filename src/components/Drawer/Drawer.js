import { faClock, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import Button from "../Button";
import { Expand } from "@theme-toggles/react";
import { actions, useGlobalContext } from "../../context";

const Drawer = ({ isOpen = false, onClose = () => { } }) => {

    const [state, dispatch] = useGlobalContext();
    const { theme } = state;

    const handleChangeTheme = () => {
        dispatch(actions.setTheme(theme));
    }

    return (
        <div className={`${isOpen || 'translate-x-full'} bg-slate-100 w-[320px] h-screen z-30 fixed top-0 transition-all duration-300 ease-in -right-5 bottom-0 drop-shadow-lg shadow-black text-slate-800 dark:bg-[--primary-bg-dark-color-1] dark:text-white`}>
            <div className="flex flex-col pr-8 ">
                <div className="flex flex-row items-center justify-between h-[100px] border-b-2 dark:bg-[--primary-dark-color] px-1">
                    <div className="uppercase pl-4 z-10 text-4xl font-mono bg-gradient-to-r from-[#ff0844] to-[#ffb199] dark:from-[--btn-primary-bg-from] dark:to-[--btn-primary-bg-to] text-transparent bg-clip-text flex flex-col items-center justify-center">
                        <div className="font-serif leading-snug">thu liễu</div>
                        <div className="text-base font-bold">beauty academy</div>
                    </div>
                    <div onClick={onClose} className="text-4xl text-black rounded-md hover:bg-slate-200 px-3 py-[6px] dark:text-white dark:hover:bg-slate-800 cursor-pointer">
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
                <div className="flex flex-col w-full pl-4 text-lg border-b-2 dark:bg-[--primary-bg-dark-color-1] dark:text-white">
                    <Link to="home"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Trang chủ
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Dịch vụ
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="info"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Giới thiệu
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="collections"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Bộ sưu tập
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="cosmetics"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Mỹ phẩm
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Đào tạo
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                    <Link to="services"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500} className="relative hover:cursor-pointer hover:text-[--primary-color] px-3 py-[12px] group">
                        Liên hệ
                        <div className="absolute -bottom-0 left-0 h-[3px] bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </Link>
                </div>
                <div className="flex flex-col w-full gap-4 pl-4 text-lg dark:bg-[--primary-bg-dark-color-1] dark:text-white">
                    <div className="flex flex-row items-center justify-between p-3">
                        <div className="">Chọn chế độ</div>
                        <Expand className="text-3xl text-[--primary-bg-dark-color-1] dark:text-white" toggled={theme !== 'light'} toggle={handleChangeTheme} />
                    </div>
                    <div className="flex items-center justify-center">
                        <Button
                            primary
                            className={'w-full py-3 text-lg'}
                            rightIcon={<FontAwesomeIcon icon={faClock} />}
                        >Hẹn lịch</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
