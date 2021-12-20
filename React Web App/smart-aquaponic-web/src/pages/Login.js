import { Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import { signIn } from '../services/authService'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    userSignIn = () => {
        signIn();
    }

    render() {
        return (
            <>
                <TextField />
                <TextField />
                <Button
                    color='primary'
                    variant='contained'
                    onClick={this.userSignIn}
                >
                    Login
                </Button>
            </>
        )
    }
}
