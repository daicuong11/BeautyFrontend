import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ArticleItem = ({ article, isChecked = false, onClick }) => {

    return (article &&
        <div onClick={onClick} className={`flex flex-col gap-2 bg-white w-full h-full p-4 transition-all rounded-xl cursor-pointer hover:-translate-y-1 ${isChecked && 'ring-1 ring-indigo-500'}`}>
            <h1 className="font-semibold">{article.title}</h1>
            <p className="flex-1 mb-3 line-clamp-3">{article.text}</p>
            <hr />
            <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1">
                    <div className="w-6 h-6 bg-indigo-500 rounded-md"></div>
                    <div className="text-sm font-medium">Thu Liễu</div>
                </div>
                <div className="flex items-center gap-1">
                    <span className="">
                        <FontAwesomeIcon icon={faClock} />
                    </span>
                    30/8/2024
                </div>
            </div>
        </div>
    );
}

export default ArticleItem;