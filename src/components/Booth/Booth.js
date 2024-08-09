import { useState } from "react";
import cosmetics from "../../Static_Data/cosmetics";
import Item from "../Item/Item";
import Button from "../Button";
import { discounts } from "../../Static_Data";
import SwiperAutoPlay from "../Swiper/SwiperAutoPlay";

const Booth = ({ props }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    return (
        <div className="mt-12">
            <div className="rounded-md h-72">
                <SwiperAutoPlay slides={discounts} autoPlay />
            </div>

            <div className="mt-4 lg:mt-8">
                <div className="flex flex-wrap items-center justify-between gap-4 transition-all duration-500 lg:gap-8">
                    {cosmetics.slice(0, 4).map((item, indexCosmetic) => (
                        <Item key={indexCosmetic} item={item} />
                    ))}
                    {showAll && cosmetics.slice(4, cosmetics.length).map((item, indexCosmetic) => (
                        <Item key={indexCosmetic} item={item} />
                    ))}
                </div>

                {cosmetics.length > 4 && !showAll && (
                    <div className="mt-8 text-center">
                        <Button
                            onClick={toggleShowAll}
                            outline
                            className='text-sm lg:text-base'
                        >
                            {showAll ? "Ẩn bớt" : "Xem thêm"}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Booth;