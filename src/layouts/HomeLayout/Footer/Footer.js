import { Link } from "react-router-dom";
import { logo_img } from "../../../assets/images";
import { faInstagram, faSquareFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-[#181821] px-4 sm:px-8 md:px-12 2xl:px-44 py-12 text-base text-[#a9b3bb]">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 py-1 text-xl font-bold">
                        <Link to={'/'} >
                            <img className="object-cover w-[38px] h-[38px] cursor-pointer bg-white rounded-md dark:bg-black" src={logo_img} alt="" />
                        </Link>
                        <div className="uppercase z-10 text-xl font-mono bg-gradient-to-r from-[#fcd0db] to-[#fed8cd] dark:from-[--btn-primary-bg-from] dark:to-[--btn-primary-bg-to] text-transparent bg-clip-text flex flex-col items-center">
                            <div className="font-serif leading-snug tracking-wider">thu liễu</div>
                            <div className="text-xs font-bold">beauty academy</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-5 text-sm">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Điện thoại:</div>
                            <a href="tel:0366 288 457" className="hover:underline">0366 288 457</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Email:</div>
                            <a href="mailto:thulieu@thammy.com" className="hover:underline">thulieu@thammy.com</a>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Địa chỉ:<span className="ml-1 font-normal">Số 226, Đt 766, Trà Tân, Đức Linh, Bình Thuận</span></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-[15px]">
                    <div className="flex items-center gap-3 py-1 text-xl font-semibold text-white">
                        Về Thu Liễu Beauty Academy
                    </div>
                    <div className="flex flex-col gap-2 mt-5 text-sm">
                        <Link className="font-semibold hover:text-white hover:underline">Giới thiệu</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Liên hệ</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Điều khoản</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Bảo mật</Link>
                    </div>
                </div>
                <div className="flex flex-col mt-[15px]">
                    <div className="flex items-center gap-3 py-1 text-xl font-semibold text-white">
                        Chúng tôi cung cấp
                    </div>
                    <div className="flex flex-col gap-2 mt-5 text-sm">
                        <Link className="font-semibold hover:text-white hover:underline">Dịch vụ</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Đào tạo</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Mỹ phẩm</Link>
                        <Link className="font-semibold hover:text-white hover:underline">Bộ sưu tập</Link>
                    </div>
                </div>
                <div className="flex flex-col mt-[15px]">
                    <div className="flex items-center gap-3 py-1 text-xl font-semibold text-white">
                        Theo dõi
                    </div>
                    <div className="flex gap-6 mt-5 text-3xl">
                        <a href="/" title="Thu Liễu Beauty Academy trên Facebook" className="font-semibold text-blue-500 hover:text-blue-700 hover:underline">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </a>
                        <a href="/" title="Thu Liễu Beauty Academy trên TikTok" className="font-semibold hover:text-white hover:underline">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>
                        <a href="/" title="Thu Liễu Beauty Academy trên Instagram" className="font-semibold text-purple-500 hover:text-purple-700 hover:underline">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1 mt-12 text-sm lg:justify-start">
                <FontAwesomeIcon icon={faCopyright} />
                <div className="">2024 Thu Liễu Beauty Academy</div>
            </div>
        </footer>
    );
}