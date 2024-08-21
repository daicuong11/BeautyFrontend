import ImageSlider from "../../components/Slides/ImageSlider";
import FlipCard from "../../components/flip_card/FlipCard";
import { services, slides, collection } from "../../Static_Data/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import InfoMember from "../../components/InfoMember/InfoMember";
import SwiperCube from "../../components/Swiper/SwiperCube";
import SwiperCoverflow from "../../components/Swiper/SwiperCoverflow";
import Button from "../../components/Button";
import Booth from "../../components/Booth/Booth";
import Course from "../../components/Course/Course";
import { logo_xl_img } from "../../assets/images";
import Contact from "../../components/Contact/Contact";
import Modal from '../../components/Modal/Modal';
import { Bell, Book, Diamond, Droplet } from "lucide-react";
import { Link } from "react-scroll";

const HomePage = () => {

    const [isFlip, setIsFlip] = useState(false);
    const [isShowAdvertising, setIsShowAdvertising] = useState(false);

    const handleFlip = () => {
        setIsFlip(!isFlip);
    }

    useEffect(() => {
        const stoId = setTimeout(() => {
            setIsShowAdvertising(true);
        }, 2000);
        return () => {
            clearTimeout(stoId);
        };
    }, []);

    return (
        <div className="min-h-screen">
            {/* Quảng cáo */}
            <Modal className="w-11/12 overflow-y-auto shadow-md md:w-4/6 lg:w-3/6 max-h-[calc(100%-300px)] md:max-h-[calc(100%-120px)]" onCover={false} open={isShowAdvertising} onClose={() => setIsShowAdvertising(false)} >
                <div className="flex flex-col w-full h-full gap-3">
                    <h1 className="text-lg font-semibold text-[--primary-color-2] flex items-center gap-2"> <Bell className="animate-[wiggle_1s_ease-in-out_infinite]" /> Thông báo</h1>
                    <div className="">
                        Thu Liễu Beauty Academy đang giảm giá cực sốc!!!
                    </div>
                    <img className="object-cover rounded-xl" src={logo_xl_img} alt="" />
                    <div className="flex flex-col items-center justify-center gap-1">
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
                    <div className="flex flex-col gap-2">
                        <div className="my-1 text-lg font-semibold">Chi tiết</div>
                        <h1 className="font-medium">Mừng Xuân Rực Rỡ - Giảm Giá Sốc Tại Thu Liễu Beauty Academy!</h1>
                        <p className="">
                            Chào đón dịp lễ Tết sắp tới, Thu Liễu Beauty Academy xin gửi tới Quý Khách Hàng chương trình ưu đãi đặc biệt chưa từng có với hàng loạt dịch vụ làm đẹp, mỹ phẩm cao cấp và các khóa đào tạo chuyên nghiệp:
                        </p>
                        <div className="pl-4 list-disc">
                            <li className="">
                                Giảm đến 50% cho tất cả các dịch vụ làm đẹp: từ chăm sóc da, phun xăm thẩm mỹ đến liệu trình trẻ hóa, giúp bạn tự tin rạng ngời đón năm mới.
                            </li>
                            <li className="">
                                Mỹ phẩm chính hãng giảm giá tới 40%, cam kết mang lại làn da khỏe mạnh, trắng sáng tự nhiên với các dòng sản phẩm uy tín từ các thương hiệu hàng đầu.
                            </li>
                            <li className="">
                                Đặc biệt, đăng ký ngay các khóa đào tạo làm đẹp, phun xăm tại Thu Liễu Beauty Academy để nhận ưu đãi học phí lên đến 30% và cơ hội thực hành trực tiếp với các chuyên gia hàng đầu trong ngành.
                            </li>
                        </div>
                        <p className="">
                            Nhanh tay nắm bắt cơ hội để làm mới bản thân và nâng cao tay nghề cùng Thu Liễu Beauty Academy trong mùa lễ hội này! Chương trình khuyến mãi có giới hạn, hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt lịch hẹn.
                        </p>
                    </div>
                </div>
            </Modal>
            <div className="w-full h-[50vh] md:h-[580px] xl:h-[680px] mx-auto mt-[68px]">
                <ImageSlider slides={slides} autoPlay />
            </div>
            <div id="services" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base text-white uppercase">Dịch vụ</div>
                    <div className="text-2xl font-bold text-center text-gray-200 sm:text-3xl font-play_write">Tốt Nhất Dành Cho Bạn</div>
                    <div className="">
                        <div onClick={handleFlip} className="group w-8 h-8 [perspective:1000px]">
                            <div className={`relative w-full h-full bg-[--primary-color-2] dark:bg-[--primary-dark-color] cursor-pointer ring-1 ring-gray-300 hover:ring-white dark:ring-slate-400 dark:hover:ring-slate-200 transition-all duration-500 shadow-xl rounded-xl [transform-style:preserve-3d] ${isFlip && '[transform:rotateY(180deg)]'}`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FontAwesomeIcon className="text-white transition-all duration-500 group-hover:rotate-45" icon={faArrowRotateRight} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:grid-cols-2 min-[950px]:grid-cols-3 min-[1180px]:grid-cols-4 sm:gap-8">
                    {services.map((dataFlip, indexService) =>
                        <div key={indexService} className="mx-auto">
                            <FlipCard data={dataFlip} flip={isFlip} />
                        </div>
                    )}
                </div>
            </div>
            <div id="info" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-800 bg-white dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Giới thiệu</div>
                    <div className="text-2xl font-bold text-center sm:text-3xl font-play_write">Thu Liễu Beauty Academy</div>
                </div>
                <div className="flex flex-col mt-12">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div className="h-[388px] w-full">
                            <img className="object-cover h-full" src={logo_xl_img} alt="" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="mt-2 text-2xl font-semibold uppercase">Bạn có biết?</div>
                            <div className="text-lg font-medium leading-8">Ngoài kia, có rất nhiều người dành cả tuổi trẻ để lao vào công việc, bỏ quên chính mình và dẫn đến những khủng hoảng liên tục trong cuộc đời. Tuổi 22, bạn có thể hoang mang không biết nên bắt đầu từ đâu. Tuổi 28, bạn lo lắng về thu nhập và trách nhiệm gia đình. Đến tuổi 40, bạn có thể nuối tiếc vì đã không dành thời gian chăm sóc cho bản thân, đặc biệt là sắc đẹp của mình.</div>
                            <div className="text-lg font-medium leading-8">Thay vì tiếc nuối thanh xuân đã qua, hãy chú ý hơn đến việc chăm sóc bản thân ngay từ bây giờ. Sắc đẹp không chỉ là yếu tố bên ngoài mà còn là sự tự tin, sự trân trọng bản thân trong mỗi bước đi của cuộc đời.</div>
                        </div>
                    </div>
                    <div className="mt-5 text-lg font-medium leading-8"><span className="text-[--primary-color]">Thu Liễu Beauty Academy</span> là lựa chọn đáng giá nhất để bạn bắt đầu hành trình chăm sóc và làm đẹp cho chính mình. Chúng tôi không chỉ cung cấp những dịch vụ làm đẹp chuyên nghiệp mà còn là nơi giúp bạn tìm lại sự tự tin và sức sống của thanh xuân. Hãy để chúng tôi đồng hành cùng bạn trên con đường làm đẹp và phát triển bản thân.</div>
                    <div className="mt-5 text-2xl font-bold">Về con người</div>
                    <div className="my-4 text-lg">
                        Tại <span className="text-[--primary-color]">Thu Liễu Beauty Academy</span>, chúng tôi tự hào sở hữu đội ngũ chuyên gia giàu kinh nghiệm và đam mê trong ngành làm đẹp, sẵn sàng chia sẻ kiến thức và kỹ năng chuyên môn. Đội ngũ của chúng tôi không chỉ tận tâm với nghề mà còn luôn sẵn sàng đồng hành, hỗ trợ và truyền cảm hứng để bạn đạt được những thành công vượt trội trong sự nghiệp làm đẹp.
                    </div>
                </div>
                <InfoMember />
            </div>
            <div id="collections" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-white bg-[--primary-bg-color] dark:bg-[--primary-bg-dark-color-1] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
                    <div className="font-sans text-base text-white uppercase">Bộ sưu tập</div>
                    <div className="text-2xl font-bold text-center text-gray-200 sm:text-3xl font-play_write">Khám Phá Sự Hoàn Hảo</div>
                    <div className="grid w-full grid-cols-3 mt-12 overflow-hidden">
                        <div className="w-[96%] h-36 sm:h-48 lg:h-64 xl:h-[300px] place-self-start">
                            <SwiperCube data={collection.lip} delayAuto={3000} />
                        </div>
                        <div className="w-[96%] h-36 place-self-center sm:h-48 lg:h-64 xl:h-[300px]">
                            <SwiperCube data={collection.eyebrow} delayAuto={3500} />
                        </div>
                        <div className="w-[96%] h-36 sm:h-48 lg:h-64 xl:h-[300px] place-self-end">
                            <SwiperCube data={collection.nail} delayAuto={4000} />
                        </div>
                    </div>
                    <div className="w-full py-2 md:py-4 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-2] h-52 sm:h-60 lg:h-72 xl:h-80">
                        <SwiperCoverflow data={collection.work} />
                    </div>

                    <div className="mt-2">
                        <Button
                            to={'collections'}
                            outline
                            className='text-sm lg:text-base'
                        >
                            Xem tất cả
                        </Button>
                    </div>
                </div>

            </div>
            <div id="cosmetics" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-900 bg-white dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Mỹ phẩm</div>
                    <div className="sm:text-3xl font-bold text-center text-2xl font-play_write text-slate-700 dark:text-[--text-dark-color]">Vẻ Đẹp Từ Thiên Nhiên</div>
                </div>
                <Booth />
            </div>
            <div id="courses" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-800 bg-[--primary-bg-color-2] dark:bg-[--primary-bg-dark-color-1] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-2 lg:gap-5">
                    <div className="font-sans text-base uppercase">Đào tạo</div>
                    <div className="text-2xl font-bold text-center sm:text-3xl font-play_write">Tay Ta Tạo Ra Cái Đẹp</div>
                </div>
                <div className="flex flex-col mt-12">
                    <div className="text-2xl font-bold">Các khóa đào tạo</div>
                    <div className="my-4 text-lg">
                        Thu Liễu Beauty Academy cung cấp các khóa đào tạo chuyên sâu trong lĩnh vực làm đẹp, từ kỹ thuật chăm sóc da và làm móng đến đào tạo chuyên gia spa, giúp bạn phát triển kỹ năng và sự nghiệp trong ngành làm đẹp.
                    </div>
                    <div className="grid w-full grid-cols-2 gap-4 sm:gap-5 mt-6 min-[850px]:grid-cols-3 min-[1100px]:grid-cols-4">
                        {
                            [1, 2, 3, 4, 5, 6].map((course, indexCourse) => (
                                <div key={indexCourse} className="h-[296px]">
                                    <Course />
                                </div>
                            ),)
                        }
                    </div>
                </div>
            </div>
            <div id="contact" className="py-16 px-4 sm:px-8 md:px-12 2xl:px-44 text-gray-900 bg-white dark:bg-[--primary-bg-dark-color-2] dark:text-[--text-dark-color]">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="font-sans text-base uppercase dark:text-white">Liên hệ</div>
                    <div className="text-2xl font-bold text-center sm:text-3xl font-play_write">Chúng Tôi Lắng Nghe Bạn</div>
                </div>

                <Contact />
            </div>
        </div>
    );
}

export default HomePage;