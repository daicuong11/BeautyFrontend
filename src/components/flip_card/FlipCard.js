import Button from "../Button";
import { xam_chan_may_img } from "../../assets/images";

const FlipCard = ({ data, flip = false }) => {

    return (
        <div className="group w-64 h-72 [perspective:1000px]">
            <div className={`relative w-full h-full transition-all duration-500 shadow-xl rounded-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${flip && '[transform:rotateY(180deg)]'}`}>
                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full shadow-xl rounded-xl shadow-black/40" src={data.front.urlImage} alt={xam_chan_may_img} />
                </div>
                <div className="absolute inset-0 w-full h-full p-6 text-center bg-[rgba(227,191,195,0.75)] dark:bg-black/75 rounded-xl text-[--primary-bg-dark-color-1] dark:text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col items-center justify-center min-h-full">
                        <h1 className="text-xl font-bold">{data.back.title}</h1>
                        <p className="flex-1 mt-1 text-base text-gray-700 dark:text-gray-300">{data.back.description}</p>
                        <p className="mb-3 text-xs font-bold text-center text-red-600 dark:text-red-500 font-play_write">1.000.000 VNĐ</p>
                        <Button primary>Xem chi tiết</Button>
                    </div>
                    {
                        data.back.isNew && <div className="absolute top-2 right-1 px-2 py-[2px] bg-[--primary-color] dark:bg-[--primary-dark-color] text-xs animate-bounce duration-500 transition-all font-semibold font-mono text-white uppercase rounded-full">new</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default FlipCard;
