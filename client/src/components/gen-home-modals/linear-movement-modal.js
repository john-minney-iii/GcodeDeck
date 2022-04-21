import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function linearForm(props) {
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
            <label htmlFor="axisOfMovement">Axis of Movement: </label>
            <select name="Axis" id="axis" className="form-control" onChange={(e) => setLinearChoice(e.target.value)}>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
                <option value="XY">XY</option>
            </select>
            {linearFormHelper()}
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

const linearFormHelper = () => {
    let posInput;
    if (linearChoice === 'X')
        posInput = <div>
            <label htmlfor='x-pos-input'>X:</label>
            <input className='form-control' name='x-pos-input' onChange={(e) => setLinearPos(e.target.value)} />
        </div>;
    else if (linearChoice === 'Y')
        posInput = <div>
            <label htmlfor='y-pos-input'>Y:</label>
            <input className='form-control' name='y-pos-input' onChange={(e) => setLinearPos(e.target.value)} />
        </div>;
    else if (linearChoice === 'Z')
        posInput = <div>
            <label htmlfor='z-pos-input'>Z:</label>
            <input className='form-control' name='z-pos-input' onChange={(e) => setLinearPos(e.target.value)} />
        </div>;
    else if (linearChoice === 'XY')
        posInput = <div>
            <label htmlfor='x-pos-input'>X:</label>
            <input className='form-control' name='x-pos-input' onChange={(e) => setLinearPos(e.target.value)} />
            <label htmlfor='y-pos-input'>Y:</label>
            <input className='form-control' name='y-pos-input' onChange={(e) => setLinearPos2(e.target.value)} />
        </div>;
    return <div>
        <label htmlfor='feedrate-input'>Feedrate:</label>
        <input type='text' className='form-control' name='feedrate-input' onChange={(e) => setLinearFeedRate(e.target.value)} />
        {posInput}
    </div>;
};

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
