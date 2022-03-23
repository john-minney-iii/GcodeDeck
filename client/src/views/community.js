import React, { Component } from 'react';
import Navbar from '../components/navbar';
import '../assets/css/community.css';

export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated
        }
    }
    render() {
        return(
            <div>
                <Navbar authenticated={this.state.authenticated} />
                <div className='main-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg community-text-container'>
                                <h1>GCODEdeck Community</h1>
                                <p>
                                    We would love for you to connect with the GCODEdeck community!
                                    Here you can find our release notes and you can submit Bug Reports,
                                    System Requests, or just leave us a message. We hope you enjoy your stay!
                                </p>
                            </div>
                            <div className='col-lg community-buttons-container'>
                                <div>
                                    <a href='' className='btn btn-primary btn-lg rounded-pill mx-2'>Release Notes</a>
                                    <a href='' className='btn btn-primary btn-lg rounded-pill'>Report a Bug</a>
                                    <a href='' className='btn btn-primary btn-lg rounded-pill mx-2'>System Request</a>
                                    <a href='' className='btn btn-primary btn-lg rounded-pill'>Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
