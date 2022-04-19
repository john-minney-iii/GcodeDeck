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
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [regPswdConfirm, setRegPswdConfirm] = useState();
    // Values for login and reg form
    const [username, setUsername] = useState();
    const [pswd, setPswd] = useState();

    const handleModal = (which) => {
        if (which === 'login')
            setLoginModalShow(!loginModalShow);
        else if (which === 'register')
            setRegModalShow(!regModalShow);
        resetFormStates();
    };

    const resetFormStates = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPswd('');
        setRegPswdConfirm('');
        setUsername('');
    };

    const AuthenticatedCallToActions = () => {
        if (props.authenticated)
            return (
                <div>
                    <button
                        className="btn btn-outline-primary btn-lg rounded-pill"
                        onClick={() => props.changeView('gen-home')}
                    >Create a new program</button>
                </div>
            );
        return null;
    };

    const UnAuthenticatedCallToActions = () => {
        if (props.authenticated)
            return <img src={HeroImage} className="w-75" alt="cnc router" />;
        return (
            <div>
                <button
                    className="btn btn-primary btn-lg rounded-pill mx-2"
                    onClick={() => handleModal('login')}
                >Login</button>
                <button
                    className="btn btn-primary btn-lg rounded-pill"
                    onClick={() => handleModal('register')}
                >Register</button>
                <button
                    className="btn btn-outline-primary btn-lg rounded-pill"
                    onClick={() => props.changeView('gen-home')}
                >Create a new program</button>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='passwordInput'>Password</label>
            <input
                type='password'
                className='form-control'
                id='passwordInput'
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='lastNameInput'>Last Name</label>
            <input
                type='text'
                className='form-control'
                id='lastNameInput'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input
                type='text'
                className='form-control'
                id='usernameInput'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='pswdInput'>Password</label>
            <input
                type='password'
                className='form-control'
                id='pswdInput'
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}

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
                value={regPswdConfirm}
                onChange={(e) => setRegPswdConfirm(e.target.value)}
            />
        </div>
    </form>;

    const loginSubmit = async () => {
        if (username === '' || pswd === '') {
            alert('Please fill out the login form');
        } else {
            let worked = false;
            axios.post('http://localhost:8000/api/v1/user/auth/', {
                'username': username,
                'password': pswd
            }).then(res => {
                if (res.status === 200) {
                    props.loginUser(res.data.token);
                    worked = true;
                }
            }).then(() => {
                if (!worked)
                    alert('Login faild. Please try again');
            });
        }
    };

    const registerSubmit = async () => {
        if (username === '' || firstName === '' || lastName === '' || email === '' || pswd === '') {
            alert('Please fill out the register form');
        } else {
            let worked = false;
            axios.post('http://localhost:8000/api/v1/user/register/', {
                'username': username,
                'first_name': firstName,
                'last_name': lastName,
                'email': email,
                'password': pswd
            }).then(res => {
                if (res.status === 201) {
                    loginSubmit(res.data.token);
                    worked = true;
                }
            }).then(() => {
                if (!worked)
                    alert('Register failed. Please try again.');
            });
        }
    };

    return <div className='landing-page'>
        <Navbar authenticated={props.authenticated} changeView={props.changeView} />
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
            <Modal.Body>{LoginForm()}</Modal.Body>
            <Modal.Footer>
                <button
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => handleModal('login')}
                >Cancel</button>
                <button
                    className='btn btn-primary btn-lg rounded-pill'
                    onClick={() => {
                        handleModal('login');
                        loginSubmit();
                    }}
                >Login</button>
            </Modal.Footer>
        </Modal>
        <Modal show={regModalShow} onHide={() => handleModal('register')}>
            <Modal.Header closeButton>Register New Account</Modal.Header>
            <Modal.Body>{RegisterForm()}</Modal.Body>
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
                        registerSubmit();
                    }}
                >Agree and Register</button>
            </Modal.Footer>
        </Modal>
    </div>;
}
