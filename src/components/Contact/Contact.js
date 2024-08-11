import { faEnvelope, faHouse, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from "../InputField/InputField";
import { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import { toast } from "react-toastify";
import Map from "../Map/Map";

const options = [
    {
        id: '1',
        title: 'Dịch vụ phun mày',
    },
    {
        id: '2',
        title: 'Dịch vụ phun môi',
    },
    {
        id: '3',
        title: 'Đào tạo phun mày',
    },
    {
        id: '4',
        title: 'Đào tạo nail',
    },
    {
        id: '5',
        title: 'Đào tạo massage',
    },
];

const Contact = () => {
    const [isLoadingSend, setIsLoadingSend] = useState(false);

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [content, setContent] = useState('');
    const [selectedService, setSelectedService] = useState([]);
    const [isSubmit, setSubmit] = useState(false);

    const validateFullName = (value) => {
        if (!value) return 'Họ và tên là bắt buộc';
        if (value.trim().length < 3) return 'Họ và tên phải có ít nhất 3 ký tự';
        return '';
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return 'Email là bắt buộc';
        if (!emailRegex.test(value)) return 'Email không hợp lệ';
        return '';
    };

    const validatePhoneNumber = (value) => {
        const phoneRegex = /^\d{10,11}$/;
        if (!value) return 'Số điện thoại là bắt buộc';
        if (!phoneRegex.test(value)) return 'Số điện thoại không hợp lệ';
        return '';
    };

    const validateContent = (value) => {
        if (!value) return 'Nội dung là bắt buộc';
        if (value.trim().length < 10) return 'Nội dung phải có ít nhất 10 ký tự';
        return '';
    };

    const validateSelectedService = (selectedOptions) => {
        if (selectedOptions.length === 0) {
            return 'Bạn cần chọn ít nhất một dịch vụ.';
        }
        return '';
    };


    const handleSubmit = async () => {
        setSubmit(true);
        let checkFullName = validateFullName(fullName) === '';
        let checkMail = validateEmail(email) === '';
        let checkPhoneNumber = validatePhoneNumber(phoneNumber) === '';
        let checkContent = validateContent(content) === '';
        let checkSelectedService = validateSelectedService(selectedService) === '';
        if (checkFullName && checkMail && checkPhoneNumber && checkContent && checkSelectedService) {
            let formValue = {
                fullName,
                email,
                phoneNumber,
                content,
                selectedService,
            }
            setIsLoadingSend(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 4000));
            } catch (error) {
                toast.error('Gửi đi thất bại');
            }
            console.log('formValue: ', formValue);
            toast.success('Gửi đi thành công');
            setIsLoadingSend(false);
            setFullName('');
            setEmail('');
            setPhoneNumber('');
            setContent('');
            setSelectedService([])
            setSubmit(false);
        }
    }

    return (
        <div className="flex flex-col mt-12">
            <div className="text-base"><span className="text-[--primary-color]">Thu Liễu Beauty Academy</span> luôn lắng nghe và tiếp nhận mọi ý kiến ​đóng góp của bạn. Hãy liên hệ với chúng mình bằng cách điền thông tin vào form dưới đây. Chúng mình sẽ phản hồi bạn trong thời gian sớm nhất.</div>
            <div className="grid grid-cols-1 gap-10 mt-12 lg:grid-cols-2">
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <span className="w-6">
                                <FontAwesomeIcon icon={faHouse} />
                            </span>
                            <div className="">Số 1, ngõ 41, Trần Duy Hưng, Cầu Giấy, Bình Thuận</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-6">
                                <FontAwesomeIcon icon={faPhoneFlip} />
                            </span>
                            <div className="underline">032 888 457</div>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="w-6">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                            <div className="underline">thulieu@thammy.com</div>
                        </div>
                    </div>
                    <div className="mt-8 text-base">
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">Họ và tên</div>
                            <InputField
                                isSubmit={isSubmit}
                                hasValue={!!fullName}
                                value={fullName}
                                onChange={setFullName}
                                placeholder="Nhập tên đầy đủ..."
                                validate={validateFullName}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">Email</div>
                            <InputField
                                isSubmit={isSubmit}
                                hasValue={!!email}
                                value={email}
                                onChange={setEmail}
                                type="email"
                                placeholder="Nhập email..."
                                validate={validateEmail}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">Điện thoại</div>
                            <InputField
                                isSubmit={isSubmit}
                                hasValue={!!phoneNumber}
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                type="number"
                                placeholder="Nhập số điện thoại..."
                                validate={validatePhoneNumber}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">Chọn dịch vụ</div>
                            <DropdownButton
                                options={options}
                                selected={selectedService}
                                setSelected={setSelectedService}
                                isSubmit={isSubmit}
                                validate={validateSelectedService}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold">Nội dung</div>
                            <InputField
                                isSubmit={isSubmit}
                                hasValue={!!content}
                                value={content}
                                onChange={setContent}
                                placeholder="Nhập nội dung liên hệ..."
                                multiline
                                validate={validateContent}
                            />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            disabled={isLoadingSend}
                            onClick={handleSubmit}
                            className="justify-center items-center px-12 font-semibold hover:opacity-90 cursor-pointer py-1 rounded-full bg-[--primary-color] text-white text-center inline-flex"
                        >
                            {isLoadingSend && <span className="animate-spin h-4 w-4 mr-3 border-[3px] border-t-white border-l-white/30 border-r-white/30 border-b-white/30 border-white rounded-full" >
                            </span>}
                            Gửi Đi
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="h-[500px]">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
