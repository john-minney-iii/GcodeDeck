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
            {linearChoiceValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Linear Feed Rate</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={linearFeedRate}
                onChange={(e) => setLinearFeedRate(e.target.value)}
            />
            {linearFeedRateValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Username*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={linearPos}
                onChange={(e) => setLinearPos(e.target.value)}
            />
            {linearPosValidation()}
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
                value={linearPos2}
                onChange={(e) => setLinearPos2(e.target.value)}
            />
            {linearPos2Validation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (linearChoice && linearFeedRate && linearPos && linearPos2) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                linearChoice,
                linearFeedRate,
                linearPos,
                linearPos2
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
