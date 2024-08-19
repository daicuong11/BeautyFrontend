import { Bar } from "react-chartjs-2";
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { barChartData } from "../../Static_Data/bar_chart_data";

Chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const BarChart = () => {

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
            <Bar options={options} data={barChartData} />
        </div>
    );
}

export default BarChart;
