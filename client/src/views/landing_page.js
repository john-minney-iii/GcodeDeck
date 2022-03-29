import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated,
            loginModalShow: false,
            registerModalShow: false
        }
    }

    handleModal = (which) => {
        if (which === 'login') {
            this.setState({ loginModalShow: !this.state.loginModalShow });
        } else if (which === 'register') {
            this.setState({ registerModalShow: !this.state.registerModalShow });
        }
    };

    authenticatedCallToActions = () => {
        if (this.state.authenticated) 
            return(
                <div>
                    <a href="/" className="btn btn-primary btn-lg rounded-pill mx-2">My Programs</a>
                    <a href="/" className="btn btn-outline-primary btn-lg rounded-pill">Create a new program</a>
                </div>
            );
        return null;
    };

    unAuthenticatedCallToActions = () => {
        if (this.state.authenticated)
            return <img src={HeroImage} class="w-75" alt="cnc router" />;
        return(
            <div>
                <button 
                    className="btn btn-primary btn-lg rounded-pill mx-2"
                    onClick={() => this.handleModal('login')}
                >Login</button>
                <button 
                    className="btn btn-primary btn-lg rounded-pill"
                    onClick={() => this.handleModal('register')}
                >Register</button>
            </div>
        );
    };

    registerForm = () => {
        return <form>
            <div className='form-group'>
                <label for='firstNameInput'>First Name</label>
                <input type='text' class='form-control' id='firstNameInput' placeholder='First Name' />
            </div>
            <div className='form-group'>
                <label for='lastNameInput'>Last Name</label>
                <input type='text' class='form-control' id='lastNameInput' placeholder='Last Name' />
            </div>
            <div className='form-group'>
                <label for='usernameInput'>Username</label>
                <input type='text' class='form-control' id='usernameInput' placeholder='Username' />
                <small id='usernameHelp' class='form-text text-muted'>
                    150 characters or fewer. Letters, digits and @/_/+/- only
                </small>
            </div>
            <div className='form-group'>
                <label for='emailInput'>Email</label>
                <input type='email' class='form-control' id='emailInput' placeholder='Email' />
            </div>
            <div className='form-group'>
                <label for='pswdInput'>Password</label>
                <input type='password' class='form-control' id='pswdInput' placeholder='' />
                <small id='usernameHelp' class='form-text text-muted'>
                    Use a mix of letters, numbers, and symbols. Password cannot
                    be too similar to your other personal information, nor be a commonly 
                    used password, nor be entirely numeric.
                </small>
            </div>
            <div className='form-group'>
                <label for='pswdConfInput'>Confirm Password</label>
                <input type='password' class='form-control' id='pswdConfInput' placeholder='' />
            </div>
        </form>
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
                <Modal show={this.state.loginModalShow} onHide={() => this.handleModal('login')}>
                    <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                    <Modal.Body>This is a Modal Body</Modal.Body>
                    <Modal.Footer>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('login')}
                        >Cancel</button>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('login')}
                        >Login</button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.registerModalShow} onHide={() => this.handleModal('register')}>
                    <Modal.Header closeButton>Register New Account</Modal.Header>
                    <Modal.Body><this.registerForm /></Modal.Body>
                    <Modal.Footer>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('register')}
                        >Cancel</button>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('register')}
                        >Register</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
