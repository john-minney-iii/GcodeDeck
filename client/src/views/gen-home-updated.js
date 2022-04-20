import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function GenHome(props) {
    const [gcodeList, setGcodeList] = useState([]);         // Gcode data struct
    const [lastBlockUndo, setLastBlockUndo] = useState();   // Used for redo
    const [lastBlock, setLastBlock] = useState();           // Used to copy last operation

    // States for modals
    const [rapidModalShow, setrapidModalShow] = useState(false);
    const [linearModalShow, setlinearModalShow] = useState(false);
    const [spindleModalShow, setSpindleModalShow] = useState(false);
    const [drillModalShow, setDrillModalShow] = useState(false);
    const [toolChangeModalShow, setToolChangeModalShow] = useState(false);
    const [facingTemplateModalShow, setFacingTemplateModalShow] = useState(false);

    // States for tool change
    const [toolNumber, setToolNumber] = useState(0);
    const [cutterCompensation, setCutterCompensation] = useState('G40');
    const [toolNotes, setToolNotes] = useState('');

    // States for spindle command
    const [spindleDirection, setSpindleDirection] = useState('CW');
    const [spindleRPM, setSpindleRPM] = useState(0);

    // States for drilling
    const [drillXPos, setDrillXPos] = useState(0);
    const [drillYPos, setDrillYPos] = useState(0);
    const [drillZPos, setDrillZPos] = useState(0);
    const [drillRef, setDrillRef] = useState(0);
    const [drillPeckDepth, setDrillPeckDepth] = useState(0);
    const [drillFeedRate, setDrillFeedRate] = useState(0);

    // States for rapid movement
    const [rapidChoice, setRapidChoice] = useState('X');
    const [rapidFeedRate, setRapidFeedRate] = useState(0);
    const [rapidPos, setRapidPos] = useState(0);
    const [rapidPos2, setRapidPos2] = useState(0);

    // States for linear movement
    const [linearChoice, setLinearChoice] = useState('X');
    const [linearFeedRate, setLinearFeedRate] = useState(0);
    const [linearPos, setLinearPos] = useState(0);
    const [linearPos2, setLinearPos2] = useState(0);

    // States for Facing
    const [facingDir, setFacingDir] = useState(0);
    const [faceToolNumber, setFaceToolNumber] = useState(0);
    const [faceCutDiam, setCutDiam] = useState(0);
    const [faceSpindleRPM, setfaceSpindleRPM] = useState(0);
    const [faceFeedRate, setFaceFeedRate] = useState(0);
    const [faceWidth, setFaceWidth] = useState(0);
    const [faceDepth, setFaceDepth] = useState(0);
    const [faceClearance, setFaceClearance] = useState(0);
    const [faceDOC, setFaceDOC] = useState(0);
    const [facePlunge, setFacePlunge] = useState(0);
    const [faceStepOver, setFaceStepOver] = useState(0);

    // Used for server posts
    const [baseUrl, setBaseUrl] = useState(
        (props.prod) ? 'https://minn4519.pythonanywhere.com' : 'http://localhost:8000'
    );

    const handleModal = (which) => {
        setLinearChoice('X');
        setRapidChoice('X');
        setSpindleDirection('CW');
        if (which === 'linearModal')
            setlinearModalShow(!linearModalShow);
        else if (which === 'rapidModal')
            setrapidModalShow(!rapidModalShow);
        else if (which === 'drillModal')
            setDrillModalShow(!drillModalShow);
        else if (which === 'spindleModal')
            setSpindleModalShow(!spindleModalShow);
        else if (which === 'toolChangeModal')
            setToolChangeModalShow(!toolChangeModalShow);
        else if (which === 'facingTemplateModal')
            setFacingTemplateModalShow(!facingTemplateModalShow);
    };

    // Functions for Gcode Data Struct ---------------------------------

    const addGcodeBlock = (block) => {
        if (gcodeList.length !== 0) {
            let tempGcode = [...gcodeList];
            tempGcode.push(block);
            setGcodeList(tempGcode);
        } else {
            setGcodeList([block]);
        }
        setLastBlock(block);
    };

    const PrintGcode = () => {
        let gcodeString = '';
        gcodeList.forEach((block) => {
            block.split(',').forEach((line) => gcodeString = gcodeString + line + '\n');
        });
        return <div>
            <textarea
                value={gcodeString}
                rows={20}
                cols={75}
            />
        </div>;
    };

    const gcodeUndo = () => {
        let tempGcode = [...gcodeList];
        setLastBlockUndo(tempGcode.pop());
        setGcodeList(tempGcode);
    };

    const gcodeRedo = () => {
        if (lastBlockUndo) {
            let tempGcode = [...gcodeList];
            tempGcode.push(lastBlockUndo);
            setGcodeList(tempGcode);
        }
    };

    const gcodeCopy = () => {
        let gcodeString = '';
        gcodeList.forEach((block) => {
            block.split(',').forEach((line) => gcodeString = gcodeString + line + '\n');
        });
        navigator.clipboard.writeText(gcodeString);
    };

    const gcodeClear = () => {
        setGcodeList([]);
        setLastBlockUndo();
        setLastBlock();
    };

    const gcodeCopyLast = () => {
        if (lastBlock) {
            let tempGcode = [...gcodeList];
            tempGcode.push(lastBlock);
            setGcodeList(tempGcode);
        }
    };

    // Form Submit Functions ---------------------------------------------

    const toolChangeFormSubmit = () => {
        axios.post(baseUrl + '/api/v1/gcode/toolChange/', {
            'toolNumber': toolNumber,
            'cutterCompensation': cutterCompensation,
            'notes': toolNotes
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        });
    };

    const spindleCommandFormSubmit = () => {
        axios.post(baseUrl + '/api/v1/gcode/spindleCommand/', {
            'directionOfRotation': spindleDirection,
            'spindleRpm': spindleRPM
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        });
    };

    const drillFormSubmit = () => {
        axios.post(baseUrl + '/api/v1/gcode/drilling/', {
            'xPos': drillXPos,
            'yPos': drillYPos,
            'zPos': drillZPos,
            'reference': drillRef,
            'peckDepth': drillPeckDepth,
            'feedRate': drillFeedRate
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        });
    };

    const rapidFormSubmit = async () => {
        axios.post(baseUrl + '/api/v1/gcode/rapidMovement/', {
            'feedrate': rapidFeedRate,
            'axis': rapidChoice,
            'pos': rapidPos,
            'pos2': rapidPos2
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        });
    };

    const linearFormSubmit = async () => {
        axios.post(baseUrl + '/api/v1/gcode/linearMovement/', {
            'feedrate': linearFeedRate,
            'axis': linearChoice,
            'pos': linearPos,
            'pos2': linearPos2
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        })
    };

    const facingTemplateFormSubmit = () => {
        axios.post(baseUrl + '/api/v1/gcode/facingTemplate/', {
            'faceDir': facingDir,
            'toolNumber': faceToolNumber,
            'cutterDiameter': faceCutDiam,
            'spindleRpm': faceSpindleRPM,
            'feedRate': faceFeedRate,
            'width': faceWidth,
            'depth': faceDepth,
            'clearance': faceClearance,
            'doc': faceDOC,
            'plungeRate': facePlunge,
            'stepOver': faceStepOver
        }).then(res => { // flag
            if (res.status === 200)
                addGcodeBlock(res.data)
        });
    };

    // Forms ---------------------------------------------------------------

    const toolChangeForm = () => <form>
        <div className="form-group">
            <label htmlFor="Tool Number">Tool Number:</label>
            <input type="" className="" id="" placeholder="Tool pocket Number" onChange={(e) => setToolNumber(e.target.value)}></input>
            <label htmlFor="Tool Number">Cutter Compensation:</label>
            <select name="Cutter Compensation" id="axis" className="form-control" onChange={(e) => setCutterCompensation(e.target.value)}>
                <option value="G40">None (G40)</option>
                <option value="G41">Left (G41)</option>
                <option value="G42">Right (G42)</option>
            </select>
            <label htmlFor="Notes">Notes:</label>
            <input type="" className="" id="" placeholder="Notes about tool" onChange={(e) => setToolNotes(e.target.value)}></input>
        </div>
    </form>;

    const spindleCommandForm = () => <form>
        <div className="form-group">
            <label htmlFor="axisOfMovement">Direction of Rotation: </label>
            <select name="Axis" id="axis" className="form-control" onChange={(e) => setSpindleDirection(e.target.value)} >
                <option value="CW">CW (M03)</option>
                <option value="CCW">CCW (M04)</option>
            </select>
            <label htmlFor="spindleSpeed">Spindle RPM:</label>
            <input type="" className="form-control" id="" onChange={(e) => setSpindleRPM(e.target.value)}></input>
        </div>
    </form>;

    const drillForm = () => <form>
        <div className="form-group">
            <label htmlFor="X Location">X:</label>
            <input type="" className="" id="" placeholder="X Coordinate of hole" onChange={(e) => setDrillXPos(e.target.value)}></input>
            <br />
            <label htmlFor="Y Location">Y:</label>
            <input type="" className="" id="" placeholder="y Coordinate of hole" onChange={(e) => setDrillYPos(e.target.value)}></input>
            <br />
            <label htmlFor="Z Location at bottom of hole">Z:</label>
            <input type="" className="" id="" placeholder="Bottom of hole location" onChange={(e) => setDrillZPos(e.target.value)}></input>
            <br />
            <label htmlFor="R - reference plane (position above part)">R:</label>
            <input type="" className="" id="" placeholder="Top of part + some clearance" onChange={(e) => setDrillRef(e.target.value)}></input>
            <br />
            <label htmlFor="Q - Peck Depth">Q:</label>
            <input type="" className="" id="" placeholder="Depth per peck" onChange={(e) => setDrillPeckDepth(e.target.value)}></input>
            <br />
            <label htmlFor="FeedRate">Feed Rate:</label>
            <input type="" className="" id="" placeholder="Drilling Feedrate" onChange={(e) => setDrillFeedRate(e.target.value)}></input>
            <br />
        </div>
    </form>;

    const rapidForm = () => <form>
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

    const linearForm = () => <form>
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

    const facingTemplateForm = () => <form>
        <div className="form-group">
        <label htmlFor="facingDir">Facing Direction: </label>
            <select name="direction" id="d" className="" onChange={(e) => setFacingDir(e.target.value)}>
                <option value="Negative">Negative</option>
                <option value="Positive">Positive</option>
            </select>
            <label htmlFor="ToolNumber">Tool Number:</label>
            <input type="" className="" id="" placeholder="Tool number for facing" onChange={(e) => setFaceToolNumber(e.target.value)}></input>
            <label htmlFor="CutterDiameter">Cutter Diameter:</label>
            <input type="" className="" id="" placeholder="Cutter Diameter for facing" onChange={(e) => setCutDiam(e.target.value)}></input>
            <label htmlFor="spindleSpeed">Spindle RPM:</label>
            <input type="" className="form-control" id="" placeholder="Spindle RPM for facing" onChange={(e) => setfaceSpindleRPM(e.target.value)}></input>
            <label htmlFor="FeedRate">Feed Rate:</label>
            <input type="" className="form-control" id="" placeholder="Feed Rate for Facing" onChange={(e) => setFaceFeedRate(e.target.value)}></input>
            <label htmlFor="Width">Width:</label>
            <input type="" className="form-control" id="" placeholder="Width (along x) for facing" onChange={(e) => setFaceWidth(e.target.value)}></input>
            <label htmlFor="Depth">Depth:</label>
            <input type="" className="form-control" id="" placeholder="Depth (along y) for facing" onChange={(e) => setFaceDepth(e.target.value)}></input>
            <label htmlFor="Clearance">Clearance: </label>
            <input type="" className="form-control" id="" placeholder="Z clearance for facing (top of part + clearance)" onChange={(e) => setFaceClearance(e.target.value)}></input>
            <label htmlFor="DOC">DOC: </label>
            <input type="" className="form-control" id="" placeholder="Depth of cut (how much are you taking off the top?)" onChange={(e) => setFaceDOC(e.target.value)}></input>
            <label htmlFor="PlungeRate">Plunge Rate:</label>
            <input type="" className="form-control" id="" placeholder="Feed Rate for Z moves" onChange={(e) => setFacePlunge(e.target.value)}></input>
            <label htmlFor="Stepover">Stepover:</label>
            <input type="" className="form-control" id="" placeholder="Amount tool moves over each pass until facing is completed" onChange={(e) => setFaceStepOver(e.target.value)}></input>
        </div>
    </form>;

    // Main Return ---------------------------------------------------------------------------------------------------------------------------
    return (
        <div className='gen-home'>
            <Navbar authenticated={props.authenticated} changeView={props.changeView} />
            <div className="m-5">
                <h2>GCODE Generation Home</h2>
                <div className="container-justify-content-start py-2" >
                    <div className="row">
                        <div className="col">
                            Tool Path Options
                        </div>
                        <div className="col-7 ">
                            Real-Time GCODE Generation
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="toolChange-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('toolChangeModal')}
                                >
                                    Tool Change
                                </button>
                            </div>
                            <div className="spindleCommand-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('spindleModal')}
                                >
                                    Spindle Command
                                </button>
                            </div>
                            <div className="G00-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('rapidModal')}
                                >
                                    Rapid Movement (G00)
                                </button>
                            </div>
                            <div className="linear-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('linearModal')}
                                >
                                    Linear Movement (G01)
                                </button>
                            </div>
                            <div className="drilling-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('drillModal')}
                                >
                                    Drilling
                                </button>
                            </div>
                            <div className="facingTemplate-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('facingTemplateModal')}
                                >
                                    Facing Template
                                </button>
                            </div>
                            <div className="rectangleTemplate-button py-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary btn-XL rounded-pill w-100"
                                    onClick={() => handleModal('rectangleTemplateModal')}
                                >
                                    Rectangle Template
                                </button>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="container-justify-content-start d-flex d-flex-inline">
                                {PrintGcode()}
                                <div className="ms-2">
                                    <button className="btn btn-primary rounded-pill mb-2 w-100" onClick={() => gcodeClear()}>Clear</button>
                                    <button className="btn btn-primary rounded-pill mb-2 w-100" onClick={() => gcodeUndo()}>Undo</button>
                                    <button className="btn btn-primary rounded-pill mb-2 w-100" onClick={() => gcodeRedo()}>Redo</button>
                                    <button className="btn btn-primary rounded-pill mb-2 w-100" onClick={() => gcodeCopy()}>Copy</button>
                                    <button className="btn btn-primary rounded-pill mb-2 w-100" onClick={() => gcodeCopyLast()}>Copy Last</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={linearModalShow} onHide={() => handleModal('linearModal')}>
                <Modal.Header closeButton>
                    Linear Movement
                </Modal.Header>
                <Modal.Body>
                    {linearForm()}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('linearModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('linearModal');
                            linearFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>

            <Modal show={toolChangeModalShow} onHide={() => handleModal('toolChangeModal')}>
                <Modal.Header closeButton>
                    Tool Change
                </Modal.Header>
                <Modal.Body>
                    {toolChangeForm()}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('toolChangeModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('toolChangeModal');
                            toolChangeFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>

            <Modal show={rapidModalShow} onHide={() => handleModal('rapidModal')}>
                <Modal.Header closeButton>
                    Rapid Movement
                </Modal.Header>
                <Modal.Body>
                    {rapidForm()}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('rapidModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('rapidModal');
                            rapidFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>

            <Modal show={facingTemplateModalShow} onHide={() => handleModal('facingTemplateModal')}>
                <Modal.Header closeButton>
                    Facing Template
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                {facingTemplateForm()}
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('facingTemplateModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('facingTemplateModal');
                            facingTemplateFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>

            <Modal show={drillModalShow} onHide={() => handleModal('drillModal')}>
                <Modal.Header closeButton>
                    Peck Drilling
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                {drillForm()}
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('drillModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('drillModal');
                            drillFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>

            <Modal show={spindleModalShow} onHide={() => handleModal('spindleModal')}>
                <Modal.Header closeButton>
                    Spindle Command
                </Modal.Header>
                <Modal.Body>
                    {spindleCommandForm()}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('spindleModal')}
                    >Cancel</button>
                    <button
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('spindleModal');
                            spindleCommandFormSubmit();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
