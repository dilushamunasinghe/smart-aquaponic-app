import React from 'react'

export default function DataPanel({
    label,
    value,
}) {
    return (
        <div className='aqua-data-widget-container'>
            <div className='aqua-data-widget-title'>
                {label}
            </div>

            <div className='aqua-data-widget-value'>
                {value}
            </div>
        </div>
    )
}
