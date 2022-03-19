import React, { Component } from 'react';
import Navbar from '../components/navbar';
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated
        }
    }

    authenticatedCallToActions = () => {
        if (this.state.authenticated) 
            return(
                <div>
                    <a href="" className="btn btn-primary btn-lg rounded-pill mx-2">My Programs</a>
                    <a href="" className="btn btn-outline-primary btn-lg rounded-pill">Create a new program</a>
                </div>
            );
        return null;
    };

    unAuthenticatedCallToActions = () => {
        if (this.state.authenticated)
            return <img src={HeroImage} class="w-75" alt="cnc router" />;
        return(
            <div>
                <a href="/user/login" className="btn btn-primary btn-lg rounded-pill mx-2">Login</a>
                <a href="/user/register" className="btn btn-primary btn-lg rounded-pill">Register</a>
            </div>
        );
    };

    render() {
        return(
            <div className='landing-page'>
                <Navbar authenticated={this.state.authenticated} />
                <div className='main-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg'>
                                <h1>GCODEdeck</h1>
                                <p>The first ever online conversational programmer for CNC Mills. Making simple tool paths couldn't be easier.</p>
                                <this.authenticatedCallToActions />
                            </div>
                            <div className='col-lg home-page-image'>
                                <this.unAuthenticatedCallToActions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
