import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function LinearFormModal(props) {
    const [linearChoice, setLinearChoice] = useState('X');
    const [linearFeedRate, setLinearFeedRate] = useState(0);
    const [linearPos, setLinearPos] = useState(0);
    const [linearPos2, setLinearPos2] = useState(0);

    // Validations 
    let linearChoiceValid = false;
    let linearFeedRateValid = false;
    let linearPosValid = false;
    let linearPos2Valid = false;

    const resetFormValues = () => {
        setLinearChoice('');
        setLinearFeedRate('');
        setLinearPos('');
        setLinearPos2('');
    };

    const LinearChoiceValidation = () => {
        if (linearChoice != 'X') {
            linearChoiceValid = false;
            return <small className="text-danger">Please Enter Your Choice</small>;
        }
        linearChoiceValid = true;
    };

    const linearFeedRateValidation = () => {
        if (linearFeedRate === '') {
            linearFeedRateValid = false;
            return <small className="text-danger">Please Enter A Valid Feed Rate</small>;
        }
        linearFeedRateValid = true;
    };

    const linearPosValidation = () => {
        if (linearPos === '') {
            linearPosValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Start Point</small>
                <br />
            </div>;
        }
        linearPosValid = true;
    };

    const linearPos2Validation = () => {
        if (linearPos2 === '') {
            linearPos2Valid = false;
            return <small className="text-danger">Please Enter A Valid End Point</small>;
        }
        linearPos2Valid = true;
    };

    const LinearForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">choice</label>
            <input 
                type="drop-down"
                className="form-control"
                name="username-input"
                value={linearChoice}
                onChange={(e) => setLinearChoice(e.target.value)}
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
                type="password"
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
                type="password"
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
        <Modal.Header closeButton>Linear Movement</Modal.Header>
        <Modal.Body>{LinearForm()}</Modal.Body>
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
            >Submit</button>
        </Modal.Footer>
    </Modal>;
}
