import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ReportABugForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    // Validations 
    let usernameValid = false;
    let emailValid = false;
    let messageValid = false;

    const resetFormValues = () => {
        setUsername('');
        setEmail('');
        setMessage('');
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

    const messageValidation = () => {
        if (message === '') {
            messageValid = false;
            return <small className="text-danger">Please Enter A Valid Message</small>;
        }
        messageValid = true;
    };

    const BugReportForm = () => <form>
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
            <label htmlFor="username-input">Message*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            {messageValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (usernameValid && emailValid && messageValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                username,
                email,
                message
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Report a Bug</Modal.Header>
        <Modal.Body>{BugReportForm()}</Modal.Body>
    </Modal>;
}
