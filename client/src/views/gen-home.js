import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function GenHome(props) {

  // States for modals
  const [g01ModalShow, setg01ModalShow] = useState(false);
  const [drillModalShow, setDrillModalShow] = useState(false);
  const [spindleModalShow, setspindleModalShow] = useState(false);

  const handleModal = (which) => {
      if (which === 'g01Modal')
          setg01ModalShow(!g01ModalShow);
      else if (which === 'drill')
          setDrillModalShow(!drillModalShow);
      else if (which === 'spindleModal')
          setspindleModalShow(!spindleModalShow);
      //resetFormStates();
  };


  const g01Form = () => <form>
        <div className="form-group">
          <label for="axisOfMovement">Axis of Movement: </label>
          <select name="Axis" id="axis" className="form-control">
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
              <option value="XY">XY</option>
          </select>
          <input type="" className="form-control" id="toolDiameter" />
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
              <div className="toolChange-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('toolChangeModal')}
                  >
                  Tool Change
                  </button>
              </div>
              <div className="spindleCommand-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('spindleModal')}
                  >
                  Spindle Command
                  </button>
              </div>
              <div className="G00-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('g00Modal')}
                  >
                  Rapid Movement (G00)
                  </button>
              </div>
              <div className="G01-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('g01Modal')}
                  >
                  Linear Movement (G01)
                  </button>
              </div>
              <div className="drilling-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('drillingModal')}
                  >
                  Drilling
                  </button>
              </div>
              <div className="facingTemplate-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('facingTemplateModal')}
                  >
                  Facing Template
                  </button>
              </div>
              <div className="rectangleTemplate-button py-3">
                  <button
                  type="button"
                  className="btn btn-outline-primary btn-lg w-75"
                  onClick={() => handleModal('rectangleTemplateModal')}
                  >
                  Rectangle Template
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

      <Modal show={g01ModalShow} onHide={() => handleModal('g01Modal')}>
          <Modal.Header closeButton>
          Linear Movement
          </Modal.Header>
          <Modal.Body>
            {g01Form()}
          </Modal.Body>
          <Modal.Footer>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => handleModal('g01Modal')}
              >Cancel</button>
              <button
                  className='btn btn-primary btn-lg rounded-pill'
                  onClick={() => {
                      handleModal('g01Modal');
                  }}
              >Submit</button>
          </Modal.Footer>
      </Modal>

      <Modal show={drillModalShow} onHide={() => handleModal('drillModal')}>
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
                  }}
              >Submit</button>
          </Modal.Footer>
      </Modal>

    </div>
  );

}
