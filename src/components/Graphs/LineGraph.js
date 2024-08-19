import { Line } from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { lineChartData } from "../../Static_Data/line_chart_data";

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const LineGraph = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Biểu đồ thể hiện mức độ tăng trưởng.'
            }
        },
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            }
        },
    };

    return (
        <div className="w-full h-full">
            <Line options={options} data={lineChartData} />
        </div>
    );
}

export default LineGraph;
