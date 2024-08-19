// import BarChart from "../../components/Graphs/BarChart";
// import LineGraph from "../../components/Graphs/LineGraph";

const DashboardPage = () => {
    return (
        <div className="w-full p-4">
            <div className="grid grid-cols-4 gap-8">
                <div className="bg-white w-full shadow-md h-[160px] border-l-4 border-red-500 flex flex-col items-center p-4">
                    <div className="text-lg font-medium">Tổng Đơn Hàng</div>
                    <div className="my-auto text-6xl font-semibold">100</div>
                </div>
                <div className="bg-white w-full shadow-md h-[160px] border-l-4 border-blue-500 flex flex-col items-center p-4">
                    <div className="text-lg font-medium">Tổng sản phẩm</div>
                    <div className="my-auto text-6xl font-semibold">21</div>
                </div>
                <div className="bg-white w-full shadow-md h-[160px] border-l-4 border-green-500 flex flex-col items-center p-4">
                    <div className="text-lg font-medium">Tổng Học Viên</div>
                    <div className="my-auto text-6xl font-semibold">9</div>
                </div>
                <div className="bg-white w-full shadow-md h-[160px] border-l-4 border-yellow-500 flex flex-col items-center p-4">
                    <div className="text-lg font-medium">Tổng khách hàng</div>
                    <div className="my-auto text-6xl font-semibold">90</div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="w-full bg-white shadow-md">
                    {/* <LineGraph /> */}
                </div>
                <div className="w-full bg-white shadow-md">
                    {/* <BarChart /> */}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
