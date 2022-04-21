import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function ToolChangeForm(props) {
    const [toolNumber, setToolNumber] = useState('');
    const [cutterCompensation, setCutterCompensation] = useState('G40');
    const [toolNotes, setToolNotes] = useState('');

    // Validations 
    let toolNumberValid = false;
    let cutterCompensationValid = false;
    let toolNotesValid = false;

    const resetFormValues = () => {
        setToolNumber('');
        setCutterCompensation('');
        setToolNotes('');
    };

    const toolNumberValidation = () => {
        if (toolNumber === '') {
            toolNumberValid = false;
            return <small className="text-danger">Please Enter a Valid Tool Number</small>;
        }
        toolNumberValid = true;
    };

    const cutterCompensationValidation = () => {
        if (cutterCompensation === '') {
            cutterCompensationValid = false;
            return <small className="text-danger">Please Enter A Valid Compensation</small>;
        }
        cutterCompensationValid = true;
    };

    const toolNotesValidation = () => {
        if (toolNotes === '') {
            toolNotesValid = false;
            return <div>
                <small className="text-danger">Please Enter Some Notes</small>
                <br />
            </div>;
        }
        toolNotesValid = true;
    };

    const ToolChangeForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">Tool number:</label>
            <input 
                type="text"
                placeholder="Tool Pocket Number"
                className="form-control"
                name="username-input"
                value={toolNumber}
                onChange={(e) => setToolNumber(e.target.value)}
            />
            {toolNumberValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Cutter Compensation:</label>
            <select 
                name="Cutter Compensation" 
                id="axis" 
                className="form-control" 
                value={cutterCompensation}
                onChange={(e) => setCutterCompensation(e.target.value)}>
                <option value="G40">None (G40)</option>
                <option value="G41">Left (G41)</option>
                <option value="G42">Right (G42)</option>
            </select>
            {cutterCompensationValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Tool Notes:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Notes About Tool"
                value={toolNotes}
                onChange={(e) => setToolNotes(e.target.value)}
            />
            {toolNotesValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (toolNumberValid && cutterCompensationValid && toolNotesValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                toolNumber,
                cutterCompensation,
                toolNotes
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Tool Change</Modal.Header>
        <Modal.Body>{ToolChangeForm()}</Modal.Body>
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
