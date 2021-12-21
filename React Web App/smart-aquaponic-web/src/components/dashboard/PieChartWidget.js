import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'

export default function PieChartWidget({
    title,
    pieChartData,
    footer,
}) {
    return (
        <div className='aqua-pie-chart-widget-container'>
            <div className='aqua-pie-chart-widget-title'>
                {title}
            </div>

            <div className='aqua-pie-chart-container'>
                <PieChart
                    data={pieChartData}
                    startAngle={90}
                    animate
                    label={({ x, y, dx, dy, dataEntry }) => (
                        <text
                            x={x}
                            y={y}
                            dx={dx}
                            dy={dy}
                            dominantBaseline="central"
                            textAnchor="middle"
                            style={{
                                fontSize: '0.45rem',
                                fontFamily: 'sans-serif',
                                fill: 'white',
                            }}
                        >
                            {dataEntry.title} {Math.round(dataEntry.percentage) + '%'}
                        </text>
                    )}
                />
            </div>

            <div className='aqua-pie-chart-widget-footer'>
                {footer}
            </div>
        </div>
    )
}
