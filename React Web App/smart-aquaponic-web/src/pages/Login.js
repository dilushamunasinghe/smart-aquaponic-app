import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, { Component } from 'react';
import { signIn } from '../services/authService';
import '../styles/login.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const styles = {
    inputRoot: {
        marginBottom: 15,
    },
};

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            isPasswordVisible: false,
        }
    }

    userSignIn = () => {
        const { username, password } = this.state;

        signIn(username, password);
    }

    togglePasswordVisibility = () => {
        this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
    }

    onChangeValue = (newValue, key) => {
        this.setState({
            [key]: newValue,
        })
    }

    render() {

        const {
            isPasswordVisible,
            username,
            password,
        } = this.state;

        const {
            classes,
        } = this.props;

        return (
            <div className='aq-login-page-container'>
                <div className='aq-login-form-container'>
                    <div className='aq-login-text-container'>
                        <TextField
                            label='User Name'
                            InputProps={{ className: classes.inputRoot }}
                            value={username}
                            onChange={event => this.onChangeValue(event.target.value, 'username')}
                        />
                        <TextField
                            label='Password'
                            type={isPasswordVisible ? 'text' : 'password'}
                            value={password}
                            onChange={event => this.onChangeValue(event.target.value, 'password')}
                            InputProps={{
                                className: classes.inputRoot,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.togglePasswordVisibility}
                                            onMouseDown={this.togglePasswordVisibility}
                                            edge="end"
                                        >
                                            {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </div>

                    <div className='aq-login-button-container'>
                        <Button
                            color='primary'
                            variant='contained'
                            onClick={this.userSignIn}
                            fullWidth
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Login);
