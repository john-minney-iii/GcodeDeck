import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';

export default class GenHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated,
        }
    }

    render() {
      return(
        <div className="m-5">
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
                      data-toggle="modal"
                      data-target="#linetoolModal">
                      Line
                    </button>
                  </div>
                  <div className="radius-button py-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg w-75"
                      data-toggle="modal"
                      data-target="#radiustoolModal">
                      Radius
                    </button>
                  </div>
                  <div className="circle-button py-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-lg w-75"
                      data-toggle="modal"
                      data-target="#circletoolModal">
                      Circle
                  </button>
                  </div>
                  <div className="-button py-3">
                    <button className="btn btn-outline-primary btn-lg w-75">Button</button>
                  </div>
                  <div className="-button py-3">
                    <button className="btn btn-outline-primary btn-lg w-75">Button</button>
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
      )
    }

}
