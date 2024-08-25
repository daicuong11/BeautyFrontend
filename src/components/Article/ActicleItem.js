import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { avatar_img } from "../../assets/images";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { useState } from "react";
import ModalDropDown from '../Modal/ModalDropDown';

const ArticleItem = ({ article, isChecked = false, onClick }) => {
    const [showMoreOption, setShowMoreOption] = useState(false);

    const handleOnclickMoreOption = (e) => {
        e.stopPropagation();
        setShowMoreOption(!showMoreOption);
    }

    const handleEdit = () => {
        setShowMoreOption(false);

    }

    const handleDelete = () => {
        setShowMoreOption(false);

    }

    return (article &&
        <div onClick={onClick} className={`relative group flex flex-col gap-2 bg-white w-full h-full p-4 transition-all rounded-xl cursor-pointer ${isChecked && 'ring-2 ring-indigo-500'}`}>
            <h1 className="font-semibold">{article.title}</h1>
            <p className="flex-1 mb-3 line-clamp-3">{article.text}</p>
            <hr />
            <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-indigo-500 rounded-md">
                        <img className="h-full rounded-md wf object-fit" src={avatar_img} alt="" />
                    </div>
                    <div className="text-sm font-medium">Thu Liễu</div>
                </div>
                <div className="flex items-center gap-1">
                    <span className="">
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    30/8/2024
                </div>
            </div>
            <button onClick={e => handleOnclickMoreOption(e)} className={`absolute invisible px-2 py-1.5 transition-all rounded-md top-2 right-2 hover:bg-gray-100 group/more group-hover:visible ${showMoreOption && '!visible !bg-white hover:!bg-white'}`}>
                <MoreVertical size={18} />
                <ModalDropDown className="!rounded-lg py-2 px-0" open={showMoreOption} onClose={() => setShowMoreOption(false)} location="bottom-start" >
                    <div className="text-sm w-36">
                        <div onClick={handleEdit} className="flex items-center justify-start gap-2 hover:bg-gray-100 py-1.5 px-3 w-full font-medium">
                            <Edit size={16} />
                            <span className="">Chỉnh sửa</span>
                        </div>
                        <div onClick={handleDelete} className="flex items-center justify-start gap-2 hover:bg-gray-100 py-1.5 px-3 w-full font-medium">
                            <Trash2 size={16} />
                            <span className="">Xóa bỏ</span>
                        </div>
                    </div>
                </ModalDropDown>
            </button>
        </div>
    );
}

export default ArticleItem;