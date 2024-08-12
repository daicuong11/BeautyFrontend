const Course = () => {

    return (
        <div className="flex flex-col flex-1 h-full overflow-hidden transition-all duration-200 ease-in-out bg-white dark:bg-[--primary-dark-color] w-full sm:1/3 xl:w1/4 rounded-2xl hover:-translate-y-1 hover:drop-shadow-xl shadow-black/30 dark:shadow-white cursor-pointer">
            <div className="h-3/5">
                <img className="object-cover w-full h-full rounded-tr-2xl rounded-tl-2xl" src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" />
            </div>
            <div className="flex flex-col justify-between p-2 text-sm text-black sm:p-4 dark:text-white h-3/5 sm:h-2/5 sm:text-base">
                <div className="text-base font-semibold">Kiến Thức Nhập Môn</div>
                <div className="flex flex-col gap-1 sm:items-center sm:flex-row sm:gap-2">
                    <div className="line-through">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2500000)}</div>
                    <div className="text-base font-semibold text-red-500">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2500000)}</div>
                </div>
                <div className="flex items-center gap-1">
                    <div className="">
                        Thời gian:
                    </div>
                    <div className="font-semibold">6 </div>
                    <div className="">tháng.</div>
                </div>
            </div>
        </div>
    );
}

export default Course;