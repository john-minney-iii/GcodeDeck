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
            currentView: 'landing-page',
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

    changeCurrentView = (value) => {
        this.setState({ currentView: value});
    };

    chooseCurrentView = () => {
        if (this.state.currentView === 'landing-page')
            return <LandingPage 
                authenticated={this.state.authenticated}
                loginUser={this.loginUser}
                changeView={this.changeCurrentView}
            />
        else if (this.state.currentView === 'community')
            return <Community 
                authenticated={this.state.authenticated}
                changeView={this.changeCurrentView}
            />
        return <p>Idk Dawg</p>
    };

    render() {
        return this.chooseCurrentView();
    }
}
