import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";

export default function GenHome(props) {

  // States for modals
  const [g01ModalShow, setg01ModalShow] = useState(false);
  const [spindleModalShow, setSpindleModalShow] = useState(false);
  const [drillModalShow, setDrillModalShow] = useState(false);
  const [toolChangeModalShow, setToolChangeModalShow] = useState(false);
  const [facingTemplateModalShow, setFacingTemplateModalShow] = useState(false)

  const handleModal = (which) => {
      if (which === 'g01Modal')
          setg01ModalShow(!g01ModalShow);
      else if (which === 'drillModal')
          setDrillModalShow(!drillModalShow);
      else if (which === 'spindleModal')
          setSpindleModalShow(!spindleModalShow);
      else if (which === 'toolChangeModal')
          setToolChangeModalShow(!toolChangeModalShow);
      else if (which === 'facingTemplateModal')
          setFacingTemplateModalShow(!facingTemplateModalShow); 
      //resetFormStates();
  };

  const spindleCommandForm = () => <form>
        <div className="form-group">
          <label for="axisOfMovement">Direction of Rotation: </label>
          <select name="Axis" id="axis" className="form-control">
              <option value="CW (M03)">CW (M03)</option>
              <option value="CCW (M04)">CCW (M04)</option>
          </select>
          <label for="spindleSpeed">Spindle RPM:</label>
          <input type="" className="form-control" id=""></input>
        </div>
      </form>;

      const facingTemplateForm = () => <form>
        <div className="form-group">
          <label for="axisOfMovement">Tool Number:</label>
          <input type="" className="" id="" placeholder="Tool number for facing"></input>
          <label for="spindleSpeed">Spindle RPM:</label>
          <input type="" className="form-control" id="" placeholder="Spindle RPM for facing"></input>
          <label for="spindleSpeed">Feed Rate:</label>
          <input type="" className="form-control" id="" placeholder="Feed Rate for Facing"></input>
          <label for="spindleSpeed">Width:</label>
          <input type="" className="form-control" id="" placeholder="Width (along x) for facing"></input>
          <label for="spindleSpeed">Depth:</label>
          <input type="" className="form-control" id="" placeholder="Depth (along y) for facing"></input>
          <label for="spindleSpeed">Clearance: </label>
          <input type="" className="form-control" id="" placeholder="Z clearance for facing (top of part + clearance)"></input>
          <label for="spindleSpeed">DOC: </label>
          <input type="" className="form-control" id="" placeholder="Depth of cut (how much are you taking off the top?)"></input>
          <label for="spindleSpeed">Plunge Rate:</label>
          <input type="" className="form-control" id="" placeholder="Feed Rate for Z moves"></input>
          <label for="spindleSpeed">Stepover:</label>
          <input type="" className="form-control" id="" placeholder="Amount tool moves over each pass until facing is completed"></input>
        </div>
      </form>;

      const toolChangeForm = () => <form>
        <div className="form-group">
          <label for="Tool Number">Tool Number:</label>
          <input type="" className="" id="" placeholder="Tool pocket Number"></input>
          <label for="Notes">Notes:</label>
          <input type="" className="" id="" placeholder="Notes about tool"></input>
        </div>
      </form>;
      
      const drillForm = () => <form>
        <div className="form-group">
          <label for="X Location">X:</label>
          <input type="" className="" id="" placeholder="X Coordinate of hole"></input>
          <br/>
          <label for="Y Location">Y:</label>
          <input type="" className="" id="" placeholder="y Coordinate of hole"></input>
          <br/>
          <label for="Z Location at bottom of hole">Z:</label>
          <input type="" className="" id="" placeholder="Bottom of hole location"></input>
          <br/>
          <label for="R - reference plane (position above part)">R:</label>
          <input type="" className="" id="" placeholder="Top of part + some clearance"></input>
          <br/>
          <label for="Q - Peck Depth">Q:</label>
          <input type="" className="" id="" placeholder="Depth per peck"></input>
          <br/>
        </div>
      </form>;


  const g01Form = () => <form>
        <div className="form-group">
          <label for="axisOfMovement">Axis of Movement: </label>
          <select name="Axis" id="axis" className="form-control">
              <option value="X">X</option>
              <option value="Y">Y</option>
              <option value="Z">Z</option>
              <option value="XY">XY</option>
          </select>
          <input type="" className="form-control" id="" />
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
                  onClick={() => handleModal('drillModal')}
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
