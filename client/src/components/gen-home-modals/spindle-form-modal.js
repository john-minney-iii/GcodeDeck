import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function SpindleCommandForm(props) {
    const [spindleDirection, setSpindleDirection] = useState('CW (M03)');
    const [spindleRPM, setSpindleRPM] = useState('');

    // Validations 
    let spindleDirectionValid = false;
    let spindleRPMValid = false;

    const resetFormValues = () => {
        setSpindleDirection('');
        setSpindleRPM('');
    };

    const spindleDirectionValidation = () => {
        if (spindleDirection === '') {
            spindleDirectionValid = false;
            return <small className="text-danger">Please Enter a Valid Spindle Direction</small>;
        }
        spindleDirectionValid = true;
    };

    const spindleRPMValidation = () => {
        if (spindleRPM === '') {
            spindleRPMValid = false;
            return <small className="text-danger">Please Enter A Valid RPM</small>;
        }
        spindleRPMValid = true;
    };

    const SpindleForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">Direction of Rotation:</label>
            <select 
                name="Cutter Compensation" 
                id="axis" 
                className="form-control" 
                value={spindleDirection}
                onChange={(e) => setSpindleDirection(e.target.value)}>
                <option value="CW">CW (M03)</option>
                <option value="CCW">CCW (M04)</option>
            </select>
            {spindleDirectionValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Spindle RPM:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={spindleRPM}
                onChange={(e) => setSpindleRPM(e.target.value)}
            />
            {spindleRPMValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (spindleDirection && spindleRPM) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                spindleDirection,
                spindleDirection
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Spindle Command</Modal.Header>
        <Modal.Body>{SpindleForm()}</Modal.Body>
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
