import { useState } from "react";
import Navbar from "../components/navbar";
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function LandingPage(props) {
    // States for modals
    const [regModalShow, setRegModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    // Values for reg form
    let firstName = '';
    let lastName = '';
    let email = '';
    let regPswdConfirm = '';
    // Values for login and reg form
    let username = '';
    let pswd = '';

    const handleLogin = () => {

    };

    const handleRegister = () => {

    };

    const handleModal = (which) => {
        if (which === 'login')
            setLoginModalShow(!loginModalShow);
        else if (which === 'register')
            setRegModalShow(!regModalShow);
        resetFormStates();
    };

    const resetFormStates = () => {
        firstName = '';
        lastName = '';
        email = '';
        pswd = '';
        regPswdConfirm = '';
        username = '';
    };

    const AuthenticatedCallToActions = () => {
        if (props.authenticated) 
            return(
                <div>
                    <a href="/" className="btn btn-primary btn-lg rounded-pill mx-2">My Programs</a>
                    <a href="/" className="btn btn-outline-primary btn-lg rounded-pill">Create a new program</a>
                </div>
            );
        return null;
    };

    const UnAuthenticatedCallToActions = () => {
        if (props.authenticated)
            return <img src={HeroImage} className="w-75" alt="cnc router" />;
        return(
            <div>
                <button 
                    className="btn btn-primary btn-lg rounded-pill mx-2"
                    onClick={() => handleModal('login')}
                >Login</button>
                <button 
                    className="btn btn-primary btn-lg rounded-pill"
                    onClick={() => handleModal('register')}
                >Register</button>
            </div>
        );
    };

    const LoginForm = () => <form>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput' 
                // value={username}
                onChange={(e) => username = e.target.value}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='passwordInput'>Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='passwordInput' 
                // value={pswd} 
                onChange={(e) => pswd = e.target.value}
            />
        </div>
    </form>;

    const RegisterForm = () => <form>
        <div className='form-group'>
            <label htmlFor='firstNameInput'>First Name</label>
            <input 
                type='text' 
                className='form-control' 
                id='firstNameInput' 
                // value={firstName} 
                onChange={(e) => firstName = e.target.value}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='lastNameInput'>Last Name</label>
            <input 
                type='text' 
                className='form-control' 
                id='lastNameInput' 
                // value={lastName} 
                onChange={(e) => lastName = e.target.value}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput' 
                // value={username} 
                onChange={(e) => username = e.target.value}
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
                // value={email} 
                onChange={(e) => email = e.target.value}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='pswdInput'>Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='pswdInput' 
                // value={pswd} 
                onChange={(e) => pswd = e.target.value}

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
                // value={regPswdConfirm} 
                onChange={(e) => regPswdConfirm = e.target.value}
            />
        </div>
    </form>;

    const loginSubmit = async () => {
        await axios.post('http://localhost:8000/api/v1/user/auth', {
            'username': username,
            'password': pswd
        });
    };

    return <div className='landing-page'>
        <Navbar authenticated={props.authenticated} />
        <div className='main-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg'>
                        <h1>GCODEdeck</h1>
                        <p>The first ever online conversational programmer for CNC Mills. Making simple tool paths couldn't be easier.</p>
                        <AuthenticatedCallToActions />
                    </div>
                    <div className='col-lg home-page-image'>
                        <UnAuthenticatedCallToActions />
                    </div>
                </div>
            </div>
        </div>
        <Modal show={loginModalShow} onHide={() => handleModal('login')}>
            <Modal.Header closeButton>Login</Modal.Header>
            <Modal.Body><LoginForm /></Modal.Body>
            <Modal.Footer>
                <button 
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => handleModal('login')}
                >Cancel</button>
                <button 
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => {
                        handleModal('login');
                    }}
                >Login</button>
            </Modal.Footer>
        </Modal>
        <Modal show={regModalShow} onHide={() => handleModal('register')}>
            <Modal.Header closeButton>Register New Account</Modal.Header>
            <Modal.Body><RegisterForm /></Modal.Body>
            <Modal.Footer>
                <small id='usernameHelp' className='text-muted'>
                    By clicking Agree and Continue you agree to GCODEdeck's Terms of Service 
                    and Cookies and Privacy Policy
                </small>
                <button 
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => handleModal('register')}
                >Cancel</button>
                <button 
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => {
                        handleModal('register');
                    }}
                >Agree and Register</button>
            </Modal.Footer>
        </Modal>
    </div>;
}
