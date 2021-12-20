import { Button } from '@mui/material'
import React, { Component } from 'react'
import LineChartWidget from '../components/dashboard/LineChartWidget'
import PercentileWidget from '../components/dashboard/PercentileWidget'
import PieChartWidget from '../components/dashboard/PieChartWidget'
import ReadingsWidget from '../components/dashboard/ReadingsWidget'
import { signOut } from '../services/authService'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    userSignOut = () => {
        signOut();
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        DashBoard
                    </div>

                    <div>
                        Welcome: username
                    </div>

                    <div>
                        <Button
                            onClick={this.userSignOut}
                        >
                            SignOut
                        </Button>
                    </div>
                </div>


                <div>
                    <ReadingsWidget
                        data={null}
                    />
                </div>

                <div>
                    <PercentileWidget
                        title="This month's production"
                        percentage={78}
                        footer="kg/time (30 days)"
                    />

                    <PieChartWidget
                        title="This month's product prediction"
                        data={{
                            plant: 50,
                            fish: 50,
                        }}
                        footer="kg/time (30 days)"
                    />
                </div>

                <div>
                    <LineChartWidget
                        title="Monthly Report"
                        xAxis="Time"
                        yAxis="Kg"
                        data={null}
                    />
                </div>

            </div>
        )
    }
}
