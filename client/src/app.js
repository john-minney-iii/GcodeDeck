import React, { Component } from 'react';
import LandingPage from './views/landing_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

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
            <LandingPage 
                authenticated={this.state.authenticated}
                loginUser={this.loginUser}
            />
        );
    }
}
