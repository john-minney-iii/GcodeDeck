import { useState } from "react";
import axios from 'axios';
import HeroImage from '../assets/img/hero-image.webp';
import Navbar from "../components/navbar";
import '../assets/css/landing-page.css';

// Components
import LoginFormModal from "../components/login-form-modal";
import RegisterFormModal from "../components/register-form-modal";

export default function LandingPage(props) {

    // States for Modals
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

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
                    onClick={() => setLoginModalShow(true)}
                >Login</button>
                <button
                    className="btn btn-primary btn-lg rounded-pill"
                    onClick={() => setRegisterModalShow(true)}
                >Register</button>
            </div>
        );
    };

    // Form Submits

    const loginSubmit = async (username, password) => {
        if (username !== '' || password !== '') {
            let finished = false;
            axios.post('http://localhost:8000/api/v1/user/auth/', {
                "username": username,
                "password": password
            }).then(res => {
                if (res.status === 200) {
                    props.loginUser(res.data.token);
                    finished = true;
                }
            }).then(() => {
                if (!finished)
                    alert('Login Failed... Please try Again.');
            });
        }
    };

    const registerSubmit = async (fname, lname, uname, email, password) => {
        if (fname !== '' || lname !== '' || uname !== '' || email !== '' || password !== '') {
            let finished = false;
            axios.post('http://localhost:8000/api/v1/user/register/', {
                "username": uname,
                "first_name": fname,
                "last_name": lname,
                "email": email,
                "password": password
            }).then(res => {
                if (res.status === 201) {
                    loginSubmit(uname, password);
                    finished = true;
                }
            }).then(() => {
                if (!finished)
                    alert('Register Failed... Please try Again.');
            })
        }
    };

    // Main Render

    return <div className="landing-page">
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
        <LoginFormModal 
            show={loginModalShow} 
            setShow={setLoginModalShow} 
            loginSubmit={loginSubmit}
        />
        <RegisterFormModal 
            show={registerModalShow} 
            setShow={setRegisterModalShow} 
            registerSubmit={registerSubmit}
        />
    </div>;

}
