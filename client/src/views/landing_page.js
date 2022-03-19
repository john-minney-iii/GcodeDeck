import React, { Component } from 'react';
import Navbar from '../components/navbar';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated
        }
    }
    render() {
        return(
            <div className='landing-page'>
                <Navbar authenticated={this.state.authenticated} />
                <h1>Landing Page</h1>
            </div>
        );
    }
}
