import { faEye } from "@fortawesome/free-solid-svg-icons";
import MarkdownEditor from "../../../components/MdEditer/Editer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Advertisement from "../../../components/Advertisement/Advertisement";
import DropdownButtonAChoice from "../../../components/DropdownButton/DropdownButtonAChoice";
import introPatternsData from '../../../Static_Data/intro_patterns_data';


const CreateIntro = () => {
    const [isShowAdvertising, setIsShowAdvertising] = useState(false);
    const [textContent, setTextContent] = useState('');
    const [selectedIntro, setSelectedIntro] = useState();

    useEffect(() => {
        if (!selectedIntro) return;
        setTextContent(selectedIntro.text);
    }, [selectedIntro]);

    return (
        <div className="flex flex-col w-full h-full gap-4 md:p-4">
            <div className="grid items-center w-full grid-cols-1 gap-4 lg:grid-cols-2">
                <DropdownButtonAChoice selected={selectedIntro} setSelected={setSelectedIntro} options={introPatternsData} placeHolder="Chọn mẫu có sẳn" buttonClassName="min-[420px]:!w-[280px]" />
                <div className="flex items-center gap-4 place-content-between lg:place-self-end">
                    <button onClick={() => setIsShowAdvertising(true)} className="btn btn-light">
                        <FontAwesomeIcon icon={faEye} />
                        Xem trước
                    </button>
                    <Advertisement content={textContent} onCover showRedirect={false} autoShow={false} isShowAdvertising={isShowAdvertising} setIsShowAdvertising={setIsShowAdvertising} />

                    <button className="btn btn-success">Hoàn thành</button>
                </div>
            </div>
            <div className="min-h-[500px] flex-1">
                <MarkdownEditor value={textContent} setValue={setTextContent} />
            </div>
        </div>
    )
}
export default CreateIntro;
