import { Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import introPatternsData from "../../../Static_Data/intro_patterns_data";
import ArticleItem from "../../../components/Article/ActicleItem";

const IntroPage = () => {
    const navigate = useNavigate();
    const [choiceAllArticle, setChoiceAllArticle] = useState(false);
    const [listItemChecked, setListItemChecked] = useState([]);

    const handleClickItem = (item) => {
        setListItemChecked((prev) => {
            if (prev.includes(item)) {
                return prev.filter(i => i !== item);
            } else {
                return [item, ...prev];
            }
        });
    };

    const handleChoiceAll = () => {
        setChoiceAllArticle(prev => {
            if (prev) {
                setListItemChecked([]);
                return false;
            } else {
                setListItemChecked(introPatternsData);
                return true;
            }
        });
    };


    return (
        <div className="flex flex-col w-full h-full gap-4 p-4 md:px-10 md:py-8">
            <div className="flex items-end justify-between">
                <div className="flex items-center gap-2 text-base">
                    <input type="checkbox" value={choiceAllArticle} onChange={handleChoiceAll} className="w-4 h-4 cursor-pointer" id="cb-choice-all" />
                    <label htmlFor="cb-choice-all" className="py-1.5 cursor-pointer">{choiceAllArticle ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}</label>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button className="btn btn-light">Kích hoạt</button>
                    <button onClick={() => navigate('/admin/intro/create')} className="btn btn-success">Tạo mới <Plus size={18} /></button>
                </div>
            </div>
            <hr />
            <div className="flex-1 pb-8">
                <div className="grid grid-cols-3 gap-x-4 gap-y-8">
                    {introPatternsData.map((article, index) => (
                        <ArticleItem key={index} article={article} isChecked={listItemChecked.includes(article)} onClick={() => handleClickItem(article)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IntroPage;
