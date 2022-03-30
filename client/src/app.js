import React, { Component } from 'react';
import LandingPage from './views/landing_page';
import Community from './views/community';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            token: '',
            authenticated: false
        };
    }

    loginUser = (username, token) => {
        this.setState({
            username: username,
            token: token,
            authenticated: true
        });
    };

    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage 
                        authenticated={this.state.authenticated}
                        loginUser={this.loginUser}
                    />} />
                    <Route path='community/' element={<Community 
                        authenticated={this.state.authenticated}
                    />} />
                </Routes>
            </BrowserRouter>
        );
    }
}
