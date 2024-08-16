import ImageSlider from "../../components/Slides/ImageSlider";
import FlipCard from "../../components/flip_card/FlipCard";
import { services, slides, collection } from "../../Static_Data/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InfoMember from "../../components/InfoMember/InfoMember";
import SwiperCube from "../../components/Swiper/SwiperCube";
import SwiperCoverflow from "../../components/Swiper/SwiperCoverflow";
import Button from "../../components/Button";
import Booth from "../../components/Booth/Booth";
import Course from "../../components/Course/Course";
import { logo_xl_img } from "../../assets/images";
import Contact from "../../components/Contact/Contact";

const HomePage = () => {

    const [isFlip, setIsFlip] = useState(false);

    const handleFlip = () => {
        setIsFlip(!isFlip);
    }

    return (
        <div className="min-h-screen">
            {/* Quảng cáo */}
            <div className=""></div>
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