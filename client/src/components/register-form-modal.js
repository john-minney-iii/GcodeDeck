import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function RegisterFormModal(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // Validations
    let firstNameValid = false;
    let lastNameValid = false;
    let usernameValid = false;
    let emailValid = false;
    let passwordValid = false;
    let passwordConfirmValid = false;

    const resetFormValues = () => {
        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');
    };

    const firstNameValidation = () => {
        if (firstName === '') {
            firstNameValid = false;
            return <small className="text-danger">Please Enter Your First Name</small>;
        }
        firstNameValid = true;
    };

    const lastNameValidation = () => {
        if (lastName === '') {
            lastNameValid = false;
            return <small className="text-danger">Please Enter Your Last Name</small>;
        }
        lastNameValid = true;
    };

    const usernameValidation = () => {
        if (username === '' || username.length > 150) {
            usernameValid = false;
            return <div>
                <small className="text-danger">Please Enter Your Username</small>
                <br />
            </div>;
        }
        usernameValid = true;
    };

    const emailValidation = () => {
        if (email === '') {
            emailValid = false;
            return <small className="text-danger">Please Enter A Valid Email</small>;
        }
        emailValid = true;
    };

    const passwordValidation = () => {
        if (password === '') {
            passwordValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Password</small>
                <br />
            </div>;
        }
        passwordValid = true;
    };

    const passwordConfirmValidation = () => {
        if (passwordConfirm === '' || password !== passwordConfirm) {
            passwordConfirmValid = false;
            return <div>
                <small className="text-danger">Please Make Sure Your Passwords Match</small>
            </div>;
        }
        passwordConfirmValid = true;
    };

    const RegisterForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">First Name*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            {firstNameValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Last Name*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            {lastNameValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Username*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameValidation()}
            <small className='text-muted'>
                150 characters or fewer. Letters, digits and @/_/+/- only
            </small>
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Email*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {emailValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Password*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordValidation()}
            <small id='usernameHelp' className='form-text text-muted'>
                Use a mix of letters, numbers, and symbols. Password cannot
                be too similar to your other personal information, nor be a commonly
                used password, nor be entirely numeric.
            </small>
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Confirm Password*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            {passwordConfirmValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (firstNameValid && lastNameValid && usernameValid && emailValid && passwordValid && passwordConfirmValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                firstName,
                lastName,
                username,
                email,
                password
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Register</Modal.Header>
        <Modal.Body>{RegisterForm()}</Modal.Body>
        <Modal.Footer>
            <button
                className='btn btn-primary btn-lg rounded-pill'
                onClick={() => {
                    props.setShow(false);
                    resetFormValues();
                }}
            >Cancel</button>
            <button
                className='btn btn-primary btn-lg rounded-pill'
                onClick={() => handleSubmit()}
            >Register</button>
        </Modal.Footer>
    </Modal>;
}
