import React, { Component } from 'react';
import Navbar from '../components/navbar';
import HeadshotShannon from "../assets/img/HeadshotShannon.jpg";
import HeadshotJJ from "../assets/img/jj-headshot.png";
import HeadshotRiley from "../assets/img/Rileyheadshot.jpg";
import HeadshotKatie from "../assets/img/KatieHeadshot.jpg";
import HeadshotMo from "../assets/img/MoHeadshot.png";
import HeadshotWid from "../assets/img/WidHeadshot.JPG";
import "../assets/css/aboutus.css"

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
          <Navbar authenticated={this.props.authenticated} changeView={this.props.changeView} />
        </div>
        <div className='m-5'>
          <div className="main">
              <h1 className='heading'>About Us</h1>
              <p className='text'>
                GCODEdeck is the first conversational online GCODE generation tool.
                Our aim is to create an open-source web application for the purpose of
                making the creation of simple tool paths for CNC Mills faster
                and simpler, along with the portability and cost effectiveness that comes with a web application.
              </p>
          </div>
          <div className="row">
            <h3> Meet our developers! </h3>
            <div className="col w-33">
              <div className="card">
                <img className="card-img-top" src={HeadshotShannon} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Shannon Daly</h5>
                  <p className="card-text">Developer, Project documentation, pretty cool dude</p>
                </div>
                <div className="card-body">
                  <a href="https://www.linkedin.com/in/shannon-daly-a0b111237" target="_blank">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={HeadshotJJ} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">John Minney III</h5>
                  <p className="card-text">Lead Developer, full stack, goat emoji</p>
                </div>
                <div className="card-body">
                  <a href="https://www.linkedin.com/in/jminneyiii/" target="_blank">Linkedin</a>
                </div>
              </div>

            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={HeadshotRiley} alt="Card image cap"></img>
                <div className="card-body">
                  <h5 className="card-title">Riley Peterson</h5>
                  <p className="card-text">Project Manager, CNC expert, resident machinist</p>
                </div>
                <div className="card-body">
                  <a href="https://www.linkedin.com/in/petersonriley18/" target="_blank">Linkedin</a>
                </div>
              </div>

            </div>


          </div>
          <div className="row">
            <div className="col">
                <div className="card">
                  <img className="card-img-top" src={HeadshotKatie} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Katie Williams</h5>
                    <p className="card-text">Developer, Front end</p>
                  </div>
                  <div className="card-body">
                    <a href="https://www.linkedin.com/in/katie-williams-3a32ab238" target="_blank">Linkedin</a>
                  </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                  <img className="card-img-top" src={HeadshotMo} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Mohamed Aden</h5>
                    <p className="card-text">Wireframes</p>
                  </div>
                  <div className="card-body">
                    <a href="">Linkedin</a>
                  </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                  <img className="card-img-top" src={HeadshotWid} alt="Card image cap"></img>
                  <div className="card-body">
                    <h5 className="card-title">Widmaier Saint-Julien</h5>
                    <p className="card-text">Wireframes</p>
                  </div>
                  <div className="card-body">
                    <a href="">Linkedin</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
