import { Button } from '@mui/material';
import React, { Component } from 'react';
import LineChartWidget from '../components/dashboard/LineChartWidget';
import PercentileWidget from '../components/dashboard/PercentileWidget';
import PieChartWidget from '../components/dashboard/PieChartWidget';
import ReadingsWidget from '../components/dashboard/ReadingsWidget';
import { signOut } from '../services/authService';
import '../styles/widgets.css';
import '../styles/dashboard.css';
// import axios from 'axios';

const DUMMY_DATA = {

    lightIntensity: 10,
    elecConductivity: 10,
    phValue: 5,
    humidity: 10.01,
    co2Level: 10.01,
    ambientTemp: 26,
    waterTemp: 26,
    monthlyProduction: 78,

    monthlyFish: 50,
    monthlyPlant: 50,

    lineChartData: null,
}

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lightIntensity: 0,
            elecConductivity: 0,
            phValue: 0,
            humidity: 0,
            co2Level: 0,
            ambientTemp: 0,
            waterTemp: 0,
            monthlyProduction: 0,

            pieChartData: {
                fish: 0,
                plant: 0,
            },

            lineChartData: null,

            userName: '',
        }
    }

    componentDidMount() {
        this.setState({ userName: localStorage.getItem('userName') });

        this.getAquaponicData();
    }

    getAquaponicData = () => {

        const responseData = DUMMY_DATA;

        this.setState({
            lightIntensity: responseData.lightIntensity,
            elecConductivity: responseData.elecConductivity,
            phValue: responseData.phValue,
            humidity: responseData.humidity,
            co2Level: responseData.co2Level,
            ambientTemp: responseData.ambientTemp,
            waterTemp: responseData.waterTemp,
            monthlyProduction: responseData.monthlyProduction,

            pieChartData: {
                fish: responseData.monthlyFish,
                plant: responseData.monthlyPlant,
            },

            lineChartData: responseData.monthlyReportData,
        });


        // axios.get('endpoint')
        //     .then(response => {
        //         const responseData = response && response.data;
        //         this.setState({
        //             lightIntensity: responseData.lightIntensity,
        //             elecConductivity: responseData.elecConductivity,
        //             phValue: responseData.phValue,
        //             humidity: responseData.humidity,
        //             co2Level: responseData.co2Level,
        //             ambientTemp: responseData.ambientTemp,
        //             waterTemp: responseData.waterTemp,
        //             monthlyProduction: responseData.monthlyProduction,

        //             pieChartData: {
        //                 fish: responseData.monthlyFish,
        //                 plant: responseData.monthlyPlant,
        //             },

        //             lineChartData: responseData.monthlyReportData,
        //         });
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }

    userSignOut = () => {
        signOut();
    }

    render() {

        const {
            userName,
            lightIntensity,
            elecConductivity,
            phValue,
            humidity,
            co2Level,
            ambientTemp,
            waterTemp,
            monthlyProduction,
            pieChartData,
            lineChartData,
        } = this.state;

        return (
            <div>
                <div className='aqua-dashboard-top-bar-container'>
                    <div className='aqua-dashboard-title'>
                        Dashboard
                    </div>
                    <div className='aqua-dashboard-auth-section'>
                        <div className='aqua-dashboard-user-name-container'>
                            Welcome: <span className='aqua-user-name'>{userName}</span>
                        </div>

                        <div className='aqua-dashboard-logout-button-container'>
                            <Button
                                onClick={this.userSignOut}
                            >
                                SignOut
                            </Button>
                        </div>
                    </div>
                </div>


                <div>
                    <ReadingsWidget
                        widgetData={{
                            lightIntensity,
                            elecConductivity,
                            phValue,
                            humidity,
                            co2Level,
                            ambientTemp,
                            waterTemp,
                        }}
                    />
                </div>

                <div>
                    <PercentileWidget
                        title="This month's production"
                        percentage={monthlyProduction}
                        footer="kg/time (30 days)"
                    />

                    <PieChartWidget
                        title="This month's product prediction"
                        data={pieChartData}
                        footer="kg/time (30 days)"
                    />
                </div>

                <div>
                    <LineChartWidget
                        title="Monthly Report"
                        xAxis="Time"
                        yAxis="Kg"
                        data={lineChartData}
                    />
                </div>

            </div>
        )
    }
}
