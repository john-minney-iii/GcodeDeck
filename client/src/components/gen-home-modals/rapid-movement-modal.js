import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function RapidForm(props) {
    const [rapidChoice, setRapidChoice] = useState('X');
    const [rapidPos, setRapidPos] = useState('');

    // Validations 
    let rapidChoiceValid = false;
    let rapidPosValid = false;

    const resetFormValues = () => {
        setRapidChoice('');
        setRapidPos('');
    };

    const rapidChoiceValidation = () => {
        if (rapidChoice === '') {
            rapidChoiceValid = false;
            return <small className="text-danger">Please Enter The Plane of Axis</small>;
        }
        rapidChoiceValid = true;
    };

    const rapidPosValidation = () => {
        if (rapidPos === '') {
            rapidPosValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Position</small>
                <br />
            </div>;
        }
        rapidPosValid = true;
    };

    const RapidForm = () => <form>
        <div className="form-group">
            <label htmlFor="axisOfMovement">Axis of Movement: </label>
            <select name="Axis" id="axis" className="form-control" onChange={(e) => setRapidChoice(e.target.value)}>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
            </select>
            {rapidChoiceValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Position 1</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={rapidPos}
                onChange={(e) => setRapidPos(e.target.value)}
            />
            {rapidPosValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (rapidChoiceValid && rapidPosValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                rapidChoice,
                rapidPos
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Rapid Movement</Modal.Header>
        <Modal.Body>{RapidForm()}</Modal.Body>
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
