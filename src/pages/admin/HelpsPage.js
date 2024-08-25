import MarkdownPreview from "../../components/MdEditer/MarkdownPreview";
import introPatternsData from "../../Static_Data/intro_patterns_data";

const HelpsPage = () => {
    return (
        <div className="w-full h-screen bg-red-100">
            <MarkdownPreview text={introPatternsData[2].text} />
        </div>
    )
}

export default HelpsPage;
