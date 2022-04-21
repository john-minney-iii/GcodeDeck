import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function FacingTemplateForm(props) {
    const [facingDir, setFacingDir] = useState(0);
    const [faceToolNumber, setFaceToolNumber] = useState(0);
    const [faceCutDiam, setFaceCutDiam] = useState(0);
    const [faceSpindleRPM, setFaceSpindleRPM] = useState(0);
    const [faceFeedRate, setFaceFeedRate] = useState(0);
    const [faceWidth, setFaceWidth] = useState(0);
    const [faceDepth, setFaceDepth] = useState(0);
    const [faceClearance, setFaceClearance] = useState(0);
    const [faceDOC, setFaceDOC] = useState(0);
    const [facePlunge, setFacePlunge] = useState(0);
    const [faceStepOver, setFaceStepOver] = useState(0);

    // Validations 
    let facingDirValid = false;
    let faceToolNumberValid = false;
    let faceCutDiamValid = false;
    let faceSpindleRPMValid = false;
    let faceFeedRateValid = false;
    let faceWidthValid = false;
    let faceDepthValid = false;
    let faceClearanceValid = false;
    let faceDOCValid = false;
    let facePlungeValid = false;
    let faceStepOverValid = false;

    const resetFormValues = () => {
        setFacingDir('');
        setFaceToolNumber('');
        setFaceCutDiam('');
        setFaceSpindleRPM('');
        setFaceFeedRate('');
        setFaceWidth('');
        setFaceDepth('');
        setFaceClearance('');
        setFaceDOC('');
        setFacePlunge('');
        setFaceStepOver('');
    };

    const facingDirValidation = () => {
        if (facingDir === '') {
            facingDirValid = false;
            return <small className="text-danger">Please Enter A Valid Facing Direction</small>;
        }
        facingDirValid = true;
    };

    const faceToolNumberValidation = () => {
        if (faceToolNumber === '') {
            faceToolNumberValid = false;
            return <small className="text-danger">Please Enter A Valid Face Tool Number</small>;
        }
        faceToolNumberValid = true;
    };

    const faceCutDiamValidation = () => {
        if (faceCutDiam === '') {
            faceCutDiamValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valide Face Cut Diameter</small>
                <br />
            </div>;
        }
        faceCutDiamValid = true;
    };

    const faceSpindleRPMValidation = () => {
        if (faceSpindleRPM === '') {
            faceSpindleRPMValid = false;
            return <small className="text-danger">Please Enter A Valid RPM</small>;
        }
        faceSpindleRPMValid = true;
    };

    const faceFeedRateValidation = () => {
        if (faceFeedRate === '') {
            faceFeedRateValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Feed Rate</small>
                <br />
            </div>;
        }
        faceFeedRateValid = true;
    };

    const faceWidthValidation = () => {
        if (faceWidth === '') {
            faceWidthValid = false;
            return <small className="text-danger">Please Enter A Valid Face Width</small>;
        }
        faceWidthValid = true;
    };

    const faceDepthValidation = () => {
        if (faceDepth === '') {
            faceDepthValid = false;
            return <small className="text-danger">Please Enter A Valid Face Depth</small>;
        }
        faceDepthValid = true;
    };

    const faceClearanceValidation = () => {
        if (faceClearance === '') {
            faceClearanceValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Face Clearance</small>
                <br />
            </div>;
        }
        faceClearanceValid = true;
    };

    const faceDOCValidation = () => {
        if (faceDOC === '') {
            faceDOCValid = false;
            return <small className="text-danger">Please Enter A Valid Face DOC</small>;
        }
        faceDOCValid = true;
    };

    const facePlungeValidation = () => {
        if (facePlunge === '') {
            facePlungeValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Face Plunge</small>
                <br />
            </div>;
        }
        facePlungeValid = true;
    };

    const faceStepOverValidation = () => {
        if (faceStepOver === '') {
            faceStepOverValid = false;
            return <div>
                <small className="text-danger">Please Enter A Valid Face Step Over</small>
                <br />
            </div>;
        }
        faceStepOverValid = true;
    };


    const FacingTemplateForm = () => <form>
        <div className="form-group">
            <label htmlFor="username-input">Facing Direction</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={facingDir}
                onChange={(e) => setFacingDir(e.target.value)}
            />
            {facingDirValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Face Tool Number</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={faceToolNumber}
                onChange={(e) => setFaceToolNumber(e.target.value)}
            />
            {faceToolNumberValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Set Face Cut Diameter</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={faceCutDiam}
                onChange={(e) => setFaceCutDiam(e.target.value)}
            />
            {faceCutDiamValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Spindle RPM</label>
            <input 
                type="text"
                className="form-control"
                name="username-input"
                value={faceSpindleRPM}
                onChange={(e) => setFaceSpindleRPM(e.target.value)}
            />
            {faceSpindleRPMValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Feed Rate</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceFeedRate}
                onChange={(e) => setFaceFeedRate(e.target.value)}
            />
            {faceFeedRateValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Width</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceWidth}
                onChange={(e) => setFaceWidth(e.target.value)}
            />
            {faceWidthValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Depth</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceDepth}
                onChange={(e) => setFaceDepth(e.target.value)}
            />
            {faceDepthValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Clearance</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceClearance}
                onChange={(e) => setFaceClearance(e.target.value)}
            />
            {faceClearanceValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">DOC</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceDOC}
                onChange={(e) => setFaceDOC(e.target.value)}
            />
            {faceDOCValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Plunge</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={facePlunge}
                onChange={(e) => setFacePlunge(e.target.value)}
            />
            {facePlungeValidation()}
        </div>
        <div className="form-group">
            <label htmlFor="username-input">Step Over</label>
            <input 
                type="password"
                className="form-control"
                name="username-input"
                value={faceStepOver}
                onChange={(e) => setFaceStepOver(e.target.value)}
            />
            {faceStepOverValidation()}
        </div>
    </form>;

    const handleSubmit = () => {
        if (facingDirValid && faceToolNumberValid && faceCutDiamValid && faceSpindleRPMValid && faceFeedRateValid && faceWidthValid && faceDepthValid && faceClearanceValid && faceDOCValid && facePlungeValid && faceStepOverValid) {
            props.setShow(false);
            resetFormValues();
            props.registerSubmit(
                facingDir,
                faceToolNumber,
                faceCutDiam,
                faceSpindleRPM,
                faceFeedRate,
                faceWidth,
                faceDepth,
                faceClearance,
                faceDOC,
                facePlunge,
                faceStepOver
            );
        }
    };

    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Facing Template</Modal.Header>
        <Modal.Body>{FacingTemplateForm()}</Modal.Body>
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
