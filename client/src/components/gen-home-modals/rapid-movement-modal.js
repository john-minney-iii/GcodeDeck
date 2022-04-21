import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function RapidForm(props) {
    const [rapidChoice, setRapidChoice] = useState('X');
    const [rapidFeedRate, setRapidFeedRate] = useState(0);
    const [rapidPos, setRapidPos] = useState(0);
    const [rapidPos2, setRapidPos2] = useState(0);

    // Validations 
    let rapidChoiceValid = false;
    let rapidFeedRateValid = false;
    let rapidPosValid = false;
    let rapidPos2Valid = false;

    const resetFormValues = () => {
        setRapidChoice('');
        setRapidFeedRate('');
        setRapidPos('');
        setRapidPos2('');
    };

    const rapidFeedRateValidation = () => {
        if (rapidFeedRate === '') {
            rapidFeedRateValid = false;
            return <small className="text-danger">Please Enter The Feed Rate</small>;
        }
        rapidFeedRateValid = true;
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

    const rapidPos2Validation = () => {
        if (rapidPos2 === '') {
            rapidPos2Valid = false;
            return <small className="text-danger">Please Enter A Valid End Position</small>;
        }
        rapidPos2Valid = true;
    };

    const RapidForm = () => <form>
        <div className="form-group">
            <label htmlFor="axisOfMovement">Axis of Movement: </label>
            <select name="Axis" id="axis" className="form-control" onChange={(e) => setRapidChoice(e.target.value)}>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
                <option value="XY">XY</option>
            </select>
            {rapidFormHelper()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Feed Rate</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={rapidFeedRate}
                onChange={(e) => setRapidFeedRate(e.target.value)}
            />
            {rapidFeedRateValidation()}
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
        <div className="form-group">
            <label htmlFor="username-input">Email*</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={rapidPos2}
                onChange={(e) => setRapidPos2(e.target.value)}
            />
            {rapidPos2Validation()}
        </div>
    </form>;

const rapidFormHelper = () => {
    let posInput;
    if (rapidChoice === 'X')
        posInput = <div>
            <label htmlfor='x-pos-input'>X:</label>
            <input className='form-control' name='x-pos-input' onChange={(e) => setRapidPos(e.target.value)} />
        </div>;
    else if (rapidChoice === 'Y')
        posInput = <div>
            <label htmlfor='y-pos-input'>Y:</label>
            <input className='form-control' name='y-pos-input' onChange={(e) => setRapidPos(e.target.value)} />
        </div>;
    else if (rapidChoice === 'Z')
        posInput = <div>
            <label htmlfor='z-pos-input'>Z:</label>
            <input className='form-control' name='z-pos-input' onChange={(e) => setRapidPos(e.target.value)} />
        </div>;
    else if (rapidChoice === 'XY')
        posInput = <div>
            <label htmlfor='x-pos-input'>X:</label>
            <input className='form-control' name='x-pos-input' onChange={(e) => setRapidPos(e.target.value)} />
            <label htmlfor='y-pos-input'>Y:</label>
            <input className='form-control' name='y-pos-input' onChange={(e) => setRapidPos2(e.target.value)} />
        </div>;
    return <div>
        {posInput}
    </div>;
};

    const handleSubmit = () => {
        if (firstNameValid && lastNameValid && usernameValid && rapidPos2) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                rapidChoice,
                rapidFeedRate,
                rapidPos,
                rapidPos2
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
