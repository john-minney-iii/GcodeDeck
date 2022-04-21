import { Modal } from "react-bootstrap";
import { useState } from "react";

export default function DrillingFormModal(props) {
    const [drillXPos, setDrillXPos] = useState(0);
    const [drillYPos, setDrillYPos] = useState(0);
    const [drillZPos, setDrillZPos] = useState(0);
    const [drillRef, setDrillRef] = useState(0);
    const [drillPeckDepth, setDrillPeckDepth] = useState(0);
    const [drillFeedRate, setDrillFeedRate] = useState(0);

    //Validations
    let drillXPosValid = false;
    let drillYPosValid = false;
    let drillZPosValid = false;
    let drillRefValid = false;
    let drillPeckDepthValid = false;
    let drillFeedRateValid = false;

    const resetFormValues = () => {
        setDrillXPos('');
        setDrillYPos('');
        setDrillZPos('');
        setDrillRef('');
        setDrillPeckDepth('');
        setDrillFeedRate('');
    };

    const drillXPosValidation = () => {
        if (drillXPos === '') {
            drillXPosValid = false;
            return <small className="text-danger">Please Enter an X Position</small>;
        }
        drillXPosValid = true;
    };

    const drillYPosValidation = () => {
        if (drillYPos === '') {
            drillYPosValid = false;
            return <small className="text-danger">Please Enter a Y Position</small>;
        }
        drillYPosValid = true;
    };

    const drillZPosValidation = () => {
        if (drillZPos === '') {//|| drillZPos.length > 150
            drillZPosValid = false;
            return <div>
                <small className="text-danger">Please Enter a Z Position</small>
                <br />
            </div>;
        }
        drillZPosValid = true;
    };

    const drillRefValidation = () => {
        if (drillRef === '') {
            drillRefValid = false;
            return <small className="text-danger">Please Enter A Valid Plane of Reference</small>;
        }
        drillRefValid = true;
    };

    const drillPeckDepthValidation = () => {
        if (drillPeckDepth === '') {
            drillPeckDepthValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Peck Depth</small>
                <br />
            </div>;
        }
        drillPeckDepthValid = true;
    };

    const drillFeedRateValidation = () => {
        if (drillFeedRate === '') {
            drillFeedRateValid = false;
            return <div>
                <small className="text-danger">Please Enter a Valid Feed Rate</small>
            </div>;
        }
        drillFeedRateValid = true;
    };

    const DrillForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">X:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="X Coordinate of hole"
                value={drillXPos}
                onChange={(e) => setDrillXPos(e.target.value)}
            />
            {drillXPosValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Y:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Y Coordinate of hole"
                value={drillYPos}
                onChange={(e) => setDrillYPos(e.target.value)}
            />
            {drillYPosValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Z:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Bottom of hole location"
                value={drillZPos}
                onChange={(e) => setDrillZPos(e.target.value)}
            />
            {drillZPosValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">R:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Top of part + some clearance"
                value={drillRef}
                onChange={(e) => setDrillRef(e.target.value)}
            />
            {drillRefValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Q:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Depth per peck"
                value={drillPeckDepth}
                onChange={(e) => setDrillPeckDepth(e.target.value)}
            />
            {drillPeckDepthValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Feed Rate:</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                placeholder="Drilling Feedrate"
                value={drillFeedRate}
                onChange={(e) => setDrillFeedRate(e.target.value)}
            />
            {drillFeedRateValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (drillXPosValid && drillYPosValid && drillZPosValid && drillRefValid && drillPeckDepthValid && drillFeedRateValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                drillXPos,
                drillYPos,
                drillZPos,
                drillRef,
                drillPeckDepth,
                drillFeedRate
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Drill</Modal.Header>
        <Modal.Body>{DrillForm()}</Modal.Body>
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
