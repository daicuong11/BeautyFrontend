import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { members } from "../../Static_Data/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faEnvelope, faLocationDot, faPenNib, faPhone } from "@fortawesome/free-solid-svg-icons";

const InfoMember = ({ member }) => {

    return (
        <div className="grid grid-cols-1 mt-12 gap-x-4 gap-y-20 lg:grid-cols-2 justify-items-center lg:justify-items-start">
            <div className="relative bg-[--primary-bg-color-2] dark:bg-slate-400 w-72 h-96 lg:w-96 lg:h-[480px] rounded-xl">
                <div className="absolute w-full h-full p-2 bg-white dark:bg-[--primary-bg-dark-color-2] rounded-xl -top-5 right-5">
                    <img className="object-cover w-full h-full shadow-xl rounded-xl shadow-black/40" src={members.avatar} alt="" />
                </div>
                <div className="absolute left-0 right-0 flex flex-row items-center justify-center gap-2 text-xl lg:text-2xl -bottom-12">
                    <div className="px-2 py-1 text-blue-700 hover:cursor-pointer">
                        <FontAwesomeIcon className="dark:bg-white dark:rounded-full" icon={faFacebook} />
                    </div>
                    <div className="px-2 py-1 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </div>
                    <div className="px-2 py-1 text-pink-600 hover:cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="mb-2 text-3xl font-dancing-bold">
                    {members.fullName}
                </h1>
                <div className="">
                    <div className="font-semibold text-sm inline-block font-pt-serif-bold-italic px-3 py-1 rounded-tl-xl rounded-br-xl text-white bg-[--primary-color] dark:bg-slate-800">
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faPenNib} />
                        </span>
                        {members.personalMessage}
                    </div>
                </div>
                <p >{members.description}</p>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                        <span className="w-4">
                            <FontAwesomeIcon icon={faCertificate} />
                        </span>
                        Chứng chỉ:
                    </div>
                    <div className="flex flex-row gap-4 ml-8">
                        {members.certificationImages.map((imageUrl, indexCertificationImage) =>
                            <div key={indexCertificationImage} className="w-24 h-24">
                                <img className="object-cover w-full h-full transition-all duration-500 shadow-md hover:scale-150 rounded-xl shadow-black/40" src={imageUrl} alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                        <span className="w-4">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        {members.contactInfo.address}
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <span className="w-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <p>{members.contactInfo.email}</p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <span className="w-4">
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        {members.contactInfo.phone}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoMember;