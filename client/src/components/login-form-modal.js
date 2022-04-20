import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function LoginFormModal(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const resetFormValues = () => {
        setUsername('');
        setPassword('');
    };

    const LoginForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">Username*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            { username === '' && <small className="text-danger">Please Enter Your Username</small>}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Password*</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            { password === '' && <small className="text-danger">Please Enter Your Password</small>}
        </div>
    </form>;

    const handleSubmit = () => {
        if (username !== '' && password !== '') { // Validate the form
            props.setShow(false);
            resetFormValues();
            props.loginSubmit(username, password);
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Login</Modal.Header>
        <Modal.Body>{LoginForm()}</Modal.Body>
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
                onClick={() => handleSubmit() }
            >Login</button>
        </Modal.Footer>
    </Modal>;
}
