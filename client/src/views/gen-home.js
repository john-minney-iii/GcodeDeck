import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function GenHome(props) {

  // States for modals
  const [G01ModalShow, setG01ModalShow] = useState(false);
  const [drillModalShow, setDrillModalShow] = useState(false);

  const handleModal = (which) => {
      if (which === 'G01Modal')
          setG01ModalShow(!G01ModalShow);
      else if (which === 'drill')
          setDrillModalShow(!drillModalShow);
      //resetFormStates();
  };


  const G01Form = () => <form>
        <div className="form-group">
          <label for="toolDiameter">Tool Diameter</label>
          <input type="" className="form-control" id="toolDiameter" />
        </div>
        <div className="form-group">
          <label for="feedRate">feedRate</label>
          <input type="" className="form-control" id="feedRate" />
        </div>
        <div className="form-group">
          <label for="spindleSpeed">Offset</label>
          <input type="" className="form-control" id="spindleSpeed" />
        </div>
        <div className="form-group">
          <label for="x-start">X-Start</label>
          <input type="" className="form-control" id="x-start" />
        </div>
        <div className="form-group">
          <label for="y-start">Y-Start</label>
          <input type="" classNameName="form-control" id="y-start" />
        </div>
        <div className="form-group">
          <label for="x-end">X-End</label>
          <input type="" className="form-control" id="x-end" />
        </div>
        <div className="form-group">
          <label for="y-end">Y-End</label>
          <input type="" className="form-control" id="y-end" />
        </div>
      </form>;


  return (
    <div className='gen-home'>
      <div className="m-5">
          <Navbar authenticated={props.authenticated} changeView={props.changeView} />
          <h2>GCODE Generation Home</h2>
          <div className ="container-justify-content-start py-2">
          <div className="row">
              <div className ="col">
              Tool Path Options
              </div>
              <div className="col-7">
              Graphical Output
              </div>
              <div className="col">
              Real-Time GCODE Gen
              </div>
          </div>
          <div className="row">
              <div className ="col">
              <div className="line-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('line')}
                  >
                  Line
                  </button>
              </div>
              <div className="radius-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('drill')}
                  >
                  Drill
                  </button>
              </div>
              <div className="circle-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  >
                  Idk
              </button>
              </div>
              <div className="-button py-3">
                  <button className="btn btn-outline-primary btn-lg w-75">
                  Template
                  </button>
              </div>
              <div className="-button py-3">
                  <button className="btn btn-outline-primary btn-lg w-75">
                  Template
                  </button>
              </div>
              </div>
              <div className="col-7">
              <div className="container-justify-content-start">
                  Placeholder for graphical output
              </div>
              </div>
              <div className="col">
              <div className="container-justify-content-start">
                  Placeholder for GCODE Gen
              </div>
              </div>
          </div>
          </div>
      </div>

      <Modal show={G01ModalShow} onHide={() => handleModal('G01Modal')}>
          <Modal.Header closeButton>
          Line Tool
          </Modal.Header>
          <Modal.Body>
            {G01Form()}
          </Modal.Body>
          <Modal.Footer>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => handleModal('G01Modal')}
              >Cancel</button>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => {
                      handleModal('G01Modal');
                  }}
              >Submit</button>
          </Modal.Footer>
      </Modal>

      <Modal show={drillModalShow} onHide={() => handleModal('drill')}>
          <Modal.Header closeButton>
          Drill Tool
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => handleModal('drill')}
              >Cancel</button>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => {
                      handleModal('drill');
                  }}
              >Submit</button>
          </Modal.Footer>
      </Modal>

    </div>
  );

}
