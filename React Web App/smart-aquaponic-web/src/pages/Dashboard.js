import { Button } from '@mui/material'
import React, { Component } from 'react'
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
            <>
                DashBoard
                <Button
                    onClick={this.userSignOut}
                >
                    SignOut
                </Button>
            </>
        )
    }
}
