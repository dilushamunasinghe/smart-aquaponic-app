import { Button } from '@mui/material';
import React, { Component } from 'react';
import LineChartWidget from '../components/dashboard/LineChartWidget';
import PercentileWidget from '../components/dashboard/PercentileWidget';
import PieChartWidget from '../components/dashboard/PieChartWidget';
import ReadingsWidget from '../components/dashboard/ReadingsWidget';
import { signOut } from '../services/authService';
import '../styles/widgets.css';
import '../styles/dashboard.css';
import Loader from '../components/common/Loader';
import axios from 'axios';
// import axios from 'axios';


/**
 * DUMMY DATA, remove when actual data is available ================
 */
const DUMMY_DATA = {

    lightIntensity: 10,
    elecConductivity: 10,
    phValue: 5,
    humidity: 10.01,
    co2Level: 10.01,
    ambientTemp: 26,
    waterTemp: 26,
    monthlyProduction: 78,

    monthlyFish: 40,
    monthlyPlant: 60,

    monthlyReportData: {
        fish: [5.5, 6.2, 7.2, 5.6, 5.9, 6.4, 6.7, 5.2, 6.4, 6.6, 5.1, 5.3],
        plant: [6.5, 6.6, 5.2, 6.6, 6.9, 6.1, 5.7, 5.7, 5.4, 5.3, 6.1, 6.4],
    },
}
/**
 * DUMMY DATA, remove when actual data is available ================
 */


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

            pieChartData: [],

            lineChartData: null,

            userName: '',
            isLoading: false,
        }
    }


    componentDidMount() {
        this.setState({ userName: localStorage.getItem('userName') });

        this.getAquaponicData();
    }


    /**
     * Gets aquaponic data from the database
     * 
     */
    getAquaponicData = () => {

        this.setState({ isLoading: true });

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {

                // const responseData = response && response.data;
                const responseData = DUMMY_DATA;

                this.setState({
                    isLoading: false,

                    lightIntensity: responseData.lightIntensity,
                    elecConductivity: responseData.elecConductivity,
                    phValue: responseData.phValue,
                    humidity: responseData.humidity,
                    co2Level: responseData.co2Level,
                    ambientTemp: responseData.ambientTemp,
                    waterTemp: responseData.waterTemp,
                    monthlyProduction: responseData.monthlyProduction,

                    pieChartData: [
                        { title: 'Fish', value: responseData.monthlyFish, color: '#4047ad' },
                        { title: 'Plant', value: responseData.monthlyPlant, color: '#5c8fcc' },
                    ],

                    lineChartData: responseData.monthlyReportData,
                });
            })
            .catch(error => {
                this.setState({ isLoading: false });
                console.error('Request Failed', error);
            });
    }


    /**
     * Signs the user out
     * 
     */
    userSignOut = () => {
        signOut();
    }


    render() {

        const {
            isLoading,
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
            <div className='aqua-dashboard-page-container'>

                {
                    isLoading &&
                    < Loader />
                }

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
                                variant='outlined'
                                onClick={this.userSignOut}
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>


                <div className='aqua-dashboard-main-content-container'>
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

                    <div className='aqua-middle-widget-section-container'>
                        <PercentileWidget
                            title="This month's production"
                            percentage={monthlyProduction}
                            footer="kg/time (30 days)"
                        />

                        <PieChartWidget
                            title="This month's product prediction"
                            pieChartData={pieChartData}
                            footer="kg/time (30 days)"
                        />
                    </div>

                    <div>
                        <LineChartWidget
                            title="Monthly Report"
                            xAxis="Time"
                            yAxis="Kg"
                            lineChartData={lineChartData}
                        />
                    </div>
                </div>

            </div>
        )
    }
}
