const CourseXL = () => {

    return (
        <div className="border-2 border-[--primary-color] rounded-2xl p-6">
            <div className="flex items-center gap-6">
                <div className="flex flex-col flex-1 gap-3">
                    <div className="text-xl font-bold">
                        Mình đã làm thế nào để hoàn thành một dự án website chỉ trong 15 ngày
                    </div>
                    <div className="text-base line-clamp-2">
                        Xin chào mọi người mình là Lý Cao Nguyên, mình đã làm một dự án website front-end với hơn 100 bài học và 200 bài viết. Bài viết này...
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        Thời gian đào tạo: <span className="px-3 py-[2px] font-semibold bg-gray-200 rounded-full">6 tháng</span>
                    </div>
                </div>
                <div className="min-w-[200px] min-h-[120px] max-w-[200px] max-h-[120px]">
                    <img className="object-cover w-full h-full rounded-md" src={'https://files.fullstack.edu.vn/f8-prod/blog_posts/10850/667550d384026.png'} alt="" />
                </div>
            </div>
        </div>
    );
}

export default CourseXL;