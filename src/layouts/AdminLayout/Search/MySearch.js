import { Search } from "lucide-react";

const MySearch = () => {

    return (
        <div className="relative flex items-center justify-start">
            <Search className="absolute text-gray-400 left-3" size={18} />
            <input
                className="pl-10 text-sm border-2 border-gray-400 rounded-full py-1.5 px-4 transition-all w-full"
                type="text"
                placeholder="Tìm kiếm..."
            />
        </div>
    );
}

export default MySearch;
