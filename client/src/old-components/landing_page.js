import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';
import axios from 'axios';

export default class LandingPage extends Component {

    async loginOnSubmit() {
        await this.loginUser();
        console.log(this.state.username, this.state.token);
    };

    async registerOnSubmit() {
        await this.registerUser();
    };

    // Server Axios Calls
    async registerUser() {
        axios.post('http://localhost:8000/api/v1/user/register/', {
            'username': this.state.regUserName,
            'first_name': this.state.firstName,
            'last_name': this.state.lastName,
            'email': this.state.email,
            'password': this.state.regPswd
         }).then(res => {
            console.log(res);
            if (res.status === 201)
                console.log('User created');
        });
    };    

    async loginUser() {
        axios.post('http://localhost:8000/api/v1/user/auth/', {
            'username': this.state.loginUserName,
            'password': this.state.loginPswd
        }).then(res => {
            console.log(res);
            if (res.status === 200)
                this.setState({ token: res.data.token, authenticated: true});
        })
    }
}
