import React, { Component } from 'react';
import LandingPage from './views/landing_page';
import Community from './views/community';
import AboutUs from './views/about_us';
import GenHome from './views/gen-home-updated';
import Account from './views/account';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';  

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        window.sessionStorage.setItem('authenticated', 'false');
        window.sessionStorage.setItem('token', '');
        window.sessionStorage.setItem('currentView', 'landing-page');
    }

    loginUser = (token) => {
        window.sessionStorage.setItem('authenticated', 'true');
        window.sessionStorage.setItem('token', token);
        this.setState({});
    };

    logoutUser = () => {
        window.sessionStorage.setItem('authenticated', 'false');
        window.sessionStorage.setItem('token', '');
        this.changeCurrentView('landing-page');
        alert('Logged Out');
    };

    changeCurrentView = (value) => {
        window.sessionStorage.setItem('currentView', value);
        this.setState({});
    };

    chooseCurrentView = () => {
        if (window.sessionStorage.getItem('currentView') === 'landing-page')
            return <LandingPage 
                authenticated={(window.sessionStorage.getItem('authenticated') === 'true')}
                loginUser={this.loginUser}
                changeView={this.changeCurrentView}
            />
        else if (window.sessionStorage.getItem('currentView') === 'about-us')
            return <AboutUs 
                authenticated={(window.sessionStorage.getItem('authenticated') === 'true')}
                changeView={this.changeCurrentView} 
            />
        else if (window.sessionStorage.getItem('currentView') === 'community')
            return <Community 
                authenticated={(window.sessionStorage.getItem('authenticated') === 'true')}
                changeView={this.changeCurrentView}
            />
        else if (window.sessionStorage.getItem('currentView') === 'gen-home')
            return <GenHome 
                authenticated={(window.sessionStorage.getItem('authenticated') === 'true')}
                changeView={this.changeCurrentView}
            />
        else if (window.sessionStorage.getItem('currentView') === 'account')
            return <Account 
                authenticated={(window.sessionStorage.getItem('authenticated') === 'true')}
                changeView={this.changeCurrentView}
                token={window.sessionStorage.getItem('token')}
                logOut={this.logoutUser}
            />
        return <p>Idk Dawg</p>
    };

    render() {
        return this.chooseCurrentView();
    }
}
