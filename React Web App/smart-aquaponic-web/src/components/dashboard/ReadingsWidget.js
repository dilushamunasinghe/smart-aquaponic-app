import React from 'react';
import DataPanel from './DataPanel';

export default function ReadingsWidget({
    widgetData
}) {

    const {
        lightIntensity,
        elecConductivity,
        phValue,
        humidity,
        co2Level,
        ambientTemp,
        waterTemp,
    } = widgetData;

    return (
        <div className='aqua-readings-widget-container'>
            <DataPanel
                label='Light Intensity'
                value={`${lightIntensity}%`}
            />

            <DataPanel
                label='Electrode Conductivity'
                value={`${elecConductivity}ppm`}
            />

            <DataPanel
                label='PH'
                value={`${phValue}`}
            />

            <DataPanel
                label='Humidity'
                value={`${humidity}%`}
            />

            <DataPanel
                label='CO2 Level'
                value={`${co2Level}%`}
            />

            <DataPanel
                label='Ambient Temperature'
                value={`${ambientTemp}°C`}
            />

            <DataPanel
                label='Water Temperature'
                value={`${waterTemp}°C`}
            />

        </div>
    )
}
