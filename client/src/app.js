import React, { Component } from 'react';
import Navbar from './components/navbar';
import axios from 'axios';
import './assets/css/app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            token: '',
            loggedIn: false
        };
    }

    registerTestUser = () => {
        axios.post('/api/v1/user/register/', {
            'username': 'test',
            'first_name': 'first-name-test',
            'last_name': 'last-name-test',
            'email': 'test@domain.com',
            'password': 'testpass'   
         }).then(res => {
            console.log('Register');
            if (res.status === 201)
                this.setState({ username: 'test' });
        });
    };

    loginOnClick = () => {
        console.log('Login Clicked');
        axios.post('/api/v1/user/auth/', {
            "username": "test",
            "password": "testpass"
        }).then(res => {
            if (res.status === 200)
                this.setState({ token: res.data.token, loggedIn: true });
        });
    };

    deleteOnClick = () => {
        console.log('Delete Clicked');
        axios.post('/api/v1/user/delete/', {
            "username": "test",
            "password": "testpass",
            "token": this.state.token
        }, {
            headers: {
                "Authorization": "TOKEN " + this.state.token
            }
        }).then(res => {
            if (res.status === 200) {
                this.setState(
                    {
                        username: '',
                        token: '',
                        loggedIn: false
                    }
                );
            }
        });
    };

    data = () => {
        console.log('Username: ' + this.state.username);
        console.log('Token: ' + this.state.token);
    };

    render() {
        return(
            <div className='app m-5'>
                <Navbar authenticated={this.state.loggedIn} />
                <div className='m-5'>
                    <a className='btn btn-primary mx-2' onClick={this.registerTestUser}>Register User</a>
                    <a className='btn btn-primary mx-2' onClick={this.loginOnClick}>Test Login</a>
                    <a className='btn btn-primary mx-2' onClick={this.deleteOnClick}>Test Delete</a>
                    <a className='btn btn-primary mx-2' onClick={this.data}>Data</a>
                </div>
            </div>
        );
    }
}
