import React, { Component } from 'react';
import LandingPage from './views/landing_page';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage authenticated={false} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
