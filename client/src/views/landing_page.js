import { useState } from "react";
import Navbar from "../components/navbar";
import '../assets/css/landing-page.css';
import HeroImage from '../assets/img/hero-image.webp';
import { Modal } from "react-bootstrap";
import axios from "axios";
import FormInput from "./FormInput";

export default function LandingPage(props) {
    // States for modals
    const [regModalShow, setRegModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    //login and reg values
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        pswd: "",
        regPswdConfirm: "",
      });

    const handleModal = (which) => {
        if (which === 'login')
            setLoginModalShow(!loginModalShow);
        else if (which === 'register')
            setRegModalShow(!regModalShow);
        else if (which === 'error')
        resetFormStates();
    };

    const resetFormStates = () => {
        setValues('');
    };

    const AuthenticatedCallToActions = () => {
        if (props.authenticated) 
            return(
                <div>
                    <button className="btn btn-primary btn-lg rounded-pill mx-2">My Programs</button>
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
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const inputs = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            errorMessage:
                "You must enter your first name",
            placeholder: "First Name",
            pattern: "^[A-Za-z0-9-]{1,150}$",
            required: true,
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            errorMessage:
                "You must enter your last name",
            placeholder: "Last Name",
            pattern: "^[A-Za-z0-9-]{1,150}$",
            required: true,
        },
        {
          id: 3,
          name: "username",
          type: "text",
          errorMessage:
            "You must enter a username that meets the criteria below",
          placeholder: "Username",
          pattern: "^[A-Za-z0-9@_+-]{1,150}$",
          required: true,
        },
        {
          id: 4,
          name: "email",
          type: "email",
          errorMessage: "A valid email address must be entered",
          placeholder: "Email",
          required: true,
        },
        {
          id: 5,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Please enter a password that matches the criteria stated below",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,150}$`,
          required: true,
        },
        {
          id: 6,
          name: "confirmPassword",
          type: "password",
          errorMessage: "Passwords don't match",
          placeholder: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const loginSubmit = async () => {
        axios.post('http://localhost:8000/api/v1/user/auth/', {
            'username': inputs.username,
            'password': inputs.pswd
        }).then(res => {
            if (res.status === 200)
                props.loginUser(res.data.token);
        });
    };

    const registerSubmit = async () => {
        axios.post('http://localhost:8000/api/v1/user/register/', {
            'username': inputs.username,
            'first_name': inputs.firstName,
            'last_name': inputs.lastName,
            'email': inputs.email,
            'password': inputs.pswd
        }).then(res => {
            if (res.status === 201)
                loginSubmit(res.data.token);
        });
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
            <Modal.Body>
                    {inputs.map((input) => (
                    <FormInput
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
            </Modal.Body>
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
            <Modal.Body>
                    <h1>Register</h1>
                    {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
            </Modal.Body>
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
                        //handleModal('register');
                        registerSubmit();
                    }}
                >Agree and Register</button>
            </Modal.Footer>
        </Modal>
    </div>;
}
