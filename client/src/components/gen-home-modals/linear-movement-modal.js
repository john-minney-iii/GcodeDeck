import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function LinearForm(props) {
    const [linearChoice, setLinearChoice] = useState('X');
    const [linearFeedRate, setLinearFeedRate] = useState();
    const [linearPos, setLinearPos] = useState();

    // Validations 
    let linearChoiceValid = false;
    let linearFeedRateValid = false;
    let linearPosValid = false;

    const resetFormValues = () => {
        setLinearChoice('');
        setLinearFeedRate('');
        setLinearPos('');
    };

    const linearChoiceValidation = () => {
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

    const LinearForm = () => <form>
        <div className="form-group">
            <label htmlFor="axisOfMovement">Axis of Movement: </label>
            <select name="Axis" id="axis" className="form-control" onChange={(e) => setLinearChoice(e.target.value)}>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
                <option value="XY">XY</option>
            </select>
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
            <label htmlFor="username-input">Position:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={linearPos}
                onChange={(e) => setLinearPos(e.target.value)}
            />
            {linearPosValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (linearChoice && linearFeedRate && linearPos) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                linearChoice,
                linearFeedRate,
                linearPos
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
