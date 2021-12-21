import React from 'react';

export default function PercentileWidget({
    title,
    percentage,
    footer,
}) {
    return (
        <div className='aqua-percentile-widget-container'>
            <div className='aqua-percentile-widget-title'>
                {title}
            </div>

            <div className='aqua-percentile-widget-percentage'>
                {percentage}%
            </div>

            <div className='aqua-percentile-widget-footer'>
                {footer}
            </div>
        </div>
    )
}
