import React, { Component } from 'react';
import LandingPage from './views/landing_page';
import AboutUs from './views/about_us';
import Community from './views/community';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {

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
                    <Route path='/' element={<LandingPage />} />
                    <Route path='about-us/' element={<AboutUs/>} />
                    <Route path='community/' element={<Community />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
