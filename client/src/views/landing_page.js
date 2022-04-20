import { useState } from "react";
import axios from 'axios';

// Components
import LoginFormModal from "../components/login-form-modal";
import RegisterFormModal from "../components/register-form-modal";

export default function LandingPage(props) {

    // States for Modals
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [registerModalShow, setRegisterModalShow] = useState(false);

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

    return <div className="landing-page">
        <div className="main-container">
            <button
                className="btn btn-primary btn-lg rounded-pill mx-2"
                onClick={() => setLoginModalShow(!loginModalShow)}
            >Login</button>
            <button
                className="btn btn-primary btn-lg rounded-pill"
                onClick={() => setRegisterModalShow(!registerModalShow)}
            >Register</button>
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
