
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
import Modal from '../../components/Modal/Modal';
import { Bell, Book, Diamond, Droplet } from "lucide-react";
import { Link } from "react-scroll";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MarkdownPreview from '../../components/MdEditer/MarkdownPreview';

const Advertisement = ({ content = '', isShowAdvertising, setIsShowAdvertising, autoShow = true, showRedirect = true, onCover = false }) => {

    useEffect(() => {
        if (!autoShow) return;
        const stoId = setTimeout(() => {
            setIsShowAdvertising(true);
        }, 2000);
        return () => {
            clearTimeout(stoId);
        };
    }, [setIsShowAdvertising, autoShow]);

    return (
        <Modal className="w-11/12 overflow-y-auto shadow-md md:w-4/6 lg:w-3/6 max-h-[calc(100%-300px)] md:max-h-[calc(100%-120px)]" onCover={onCover} open={isShowAdvertising} onClose={() => setIsShowAdvertising(false)} >
            <div className="flex flex-col w-full h-full">
                <h1 className="text-lg font-semibold text-[--primary-color-2] flex items-center gap-2"> <Bell className="animate-[wiggle_1s_ease-in-out_infinite]" /> Thông báo</h1>
                <MarkdownPreview text={content} />
                {showRedirect && (
                    <div className="flex flex-col items-center justify-center gap-1 mt-3">
                        <div className="flex items-center gap-2">
                            <Diamond />
                            Xem các dịch vụ:
                            <Link onClick={() => setIsShowAdvertising(false)} to="services"
                                spy={true}
                                smooth={true}
                                offset={-68}
                                duration={500} className="flex items-center gap-1 hover:cursor-pointer text-[--primary-color] hover:underline py-[2px]">
                                Nhấn vào đây <FontAwesomeIcon icon={faHandPointLeft} className="text-lg animate-[toLeftRight_1s_ease-in-out_infinite]" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Droplet />
                            Xem các mỹ phẩm:
                            <Link onClick={() => setIsShowAdvertising(false)} to="cosmetics"
                                spy={true}
                                smooth={true}
                                offset={-68}
                                duration={500} className="flex items-center gap-1 hover:cursor-pointer text-[--primary-color] hover:underline py-[2px]">
                                Nhấn vào đây <FontAwesomeIcon icon={faHandPointLeft} className="text-lg animate-[toLeftRight_1s_ease-in-out_infinite]" />
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <Book />
                            Xem các khóa đào tạo:
                            <Link onClick={() => setIsShowAdvertising(false)} to="courses"
                                spy={true}
                                smooth={true}
                                offset={-68}
                                duration={500} className="flex items-center gap-1 hover:cursor-pointer text-[--primary-color] hover:underline py-[2px]">
                                Nhấn vào đây <FontAwesomeIcon icon={faHandPointLeft} className="text-lg animate-[toLeftRight_1s_ease-in-out_infinite]" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}

export default Advertisement;