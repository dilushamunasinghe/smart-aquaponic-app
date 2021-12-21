import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function LineChartWidget({
    title,
    xAxis,
    yAxis,
    lineChartData,
}) {

    const data = {
        labels,
        datasets: [
            {
                id: 1,
                label: 'Fish',
                borderColor: 'rgb(64, 71, 173)',
                backgroundColor: 'rgba(64, 71, 173, 0.5)',
                data: lineChartData ? lineChartData.fish : [],
            },
            {
                id: 2,
                label: 'Plant',
                borderColor: 'rgb(92, 143, 204)',
                backgroundColor: 'rgba(92, 143, 204, 0.5)',
                data: lineChartData ? lineChartData.plant : [],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
        scales: {
            xAxis: {
                title: {
                    text: xAxis,
                    display: true,
                    font: {
                        size: 18,
                    }
                }
            },
            yAxis: {
                title: {
                    text: yAxis,
                    display: true,
                    font: {
                        size: 18,
                    }
                }
            }
        }
    };

    return (
        <div className='aqua-line-chart-widget-container'>
            <Line options={options} data={data} />
        </div>
    )
}
