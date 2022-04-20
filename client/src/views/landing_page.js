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
            console.log(username, password);
        }
    };

    const registerSubmit = async () => {

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
        <RegisterFormModal show={registerModalShow} setShow={setRegisterModalShow} />
    </div>;

}
