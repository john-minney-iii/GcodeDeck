import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';
import axios from 'axios';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // States for Register Modal
            registerModalShow: false,
            firstName: '',
            lastName: '',
            regUserName: '',
            email: '',
            regPswd: '',
            regPswdConfirm: '',
            // States for Login Modal
            loginModalShow: false,
            loginUserName: '',
            loginPswd: '',
            // States for login
            username: '',
            token: '',
            authenticated: false
        };
    }

    /// Reset param is for the form states
    handleModal = (which, reset) => {
        if (which === 'login') {
            this.setState({ loginModalShow: !this.state.loginModalShow })
        } else if (which === 'register') {
            this.setState({ registerModalShow: !this.state.registerModalShow })
        }
        if (reset) this.resetFormStates(which);
    };

    resetFormStates = (which) => {
        if (which === 'login') {
            this.setState({
                loginUserName: '',
                loginPswd: ''
            });
        } else if (which === 'register') {
            this.setState({
                firstName: '',
                lastName: '',
                regUserName: '',
                email: '',
                regPswd: '',
                regPswdConfirm: ''
            });
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
            return <img src={HeroImage} className="w-75" alt="cnc router" />;
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

    loginForm = () => <form>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput' 
                value={this.state.loginUserName}
                onChange={(e) => this.setState({ loginUserName: e.target.value })}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='passwordInput'>Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='passwordInput' 
                value={this.state.loginPswd}
                onChange={(e) => this.setState({ loginPswd: e.target.value })}
            />
        </div>
    </form>;

    async loginOnSubmit() {
        await this.loginUser();
        console.log(this.state.username, this.state.token);
    };

    registerForm = () => <form>
        <div className='form-group'>
            <label htmlFor='firstNameInput'>First Name</label>
            <input 
                type='text' 
                className='form-control' 
                id='firstNameInput' 
                value={this.state.firstName} 
                onChange={(e) => this.setState({ firstName: e.target.value })}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='lastNameInput'>Last Name</label>
            <input 
                type='text' 
                className='form-control' 
                id='lastNameInput' 
                value={this.state.lastName} 
                onChange={(e) => this.setState({ lastName: e.target.value })}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput' 
                value={this.state.regUserName} 
                onChange={(e) => this.setState({ regUserName: e.target.value })}
            />
            <small id='usernameHelp' className='form-text text-muted'>
                150 characters or fewer. Letters, digits and @/_/+/- only
            </small>
        </div>
        <div className='form-group'>
            <label htmlFor='emailInput'>Email</label>
            <input 
                type='email' 
                className='form-control' 
                id='emailInput' 
                value={this.state.email} 
                onChange={(e) => this.setState({ email: e.target.value })}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='pswdInput'>Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='pswdInput' 
                value={this.state.regPswd} 
                onChange={(e) => this.setState({ regPswd: e.target.value })}

            />
            <small id='usernameHelp' className='form-text text-muted'>
                Use a mix of letters, numbers, and symbols. Password cannot
                be too similar to your other personal information, nor be a commonly 
                used password, nor be entirely numeric.
            </small>
        </div>
        <div className='form-group'>
            <label htmlFor='pswdConfInput'>Confirm Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='pswdConfInput' 
                value={this.state.regPswdConfirm} 
                onChange={(e) => this.setState({ regPswdConfirm: e.target.value })}
            />
        </div>
    </form>;

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
                    <Modal.Header closeButton>Login</Modal.Header>
                    <Modal.Body><this.loginForm /></Modal.Body>
                    <Modal.Footer>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('login', true)}
                        >Cancel</button>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => {
                                this.handleModal('login', false);
                                this.loginOnSubmit();
                            }}
                        >Login</button>
                    </Modal.Footer>
                </Modal>
                <Modal show={this.state.registerModalShow} onHide={() => this.handleModal('register')}>
                    <Modal.Header closeButton>Register New Account</Modal.Header>
                    <Modal.Body><this.registerForm /></Modal.Body>
                    <Modal.Footer>
                        <small id='usernameHelp' className='text-muted'>
                            By clicking Agree and Continue you agree to GCODEdeck's Terms of Service 
                            and Cookies and Privacy Policy
                        </small>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => this.handleModal('register', true)}
                        >Cancel</button>
                        <button 
                            className='btn btn-primary btn-lg rounded-pill'
                            onClick={() => {
                                this.handleModal('register', false);
                                this.registerOnSubmit();
                            }}
                        >Agree and Register</button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
