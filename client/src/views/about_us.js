import React, { Component } from 'react';
import Navbar from '../components/navbar';

export default class AboutUs extends Component {

constructor(props) {
    super(props);
    this.state = {
        authenticated: this.props.authenticated
    }
  }

  render() {
    return (
      <div>
        <div className="AboutUs">
          <Navbar authenticated={this.state.authenticated} />
        </div>
        <div className='m-5'>
          <div className="main">
              <h1 className='heading'>About Us</h1>
              <p className='text'>
                GCODEdeck is the first conversational online GCODE generation tool.
                Our aim is to create an open-source web application for the purpose of
                making the creation of simple tool paths for CNC Mills and Lathes faster
                and simpler, along with the portability and cost effectiveness that comes with a web application.
              </p>
          </div>
        </div>
    </div>
    );
  }
}
