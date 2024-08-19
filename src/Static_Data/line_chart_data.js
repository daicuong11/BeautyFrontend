export const lineChartData = {
    labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
    datasets: [
        {
            label: "Orders",
            data: [3000, 4200, 3500, 4800, 6200, 5400, 7600, 7200, 6900, 8100, 7000, 9200],
            borderColor: 'red',
        },
        {
            label: "Students",
            data: [2000, 2800, 2200, 3600, 3400, 3900, 4600, 4400, 4100, 4900, 4500, 5200],
            borderColor: 'green',
        },
        {
            label: "Customers",
            data: [1500, 1700, 1400, 2100, 1900, 2500, 3100, 2900, 2700, 3300, 2900, 3600],
            borderColor: 'yellow',
        },
    ],
};
