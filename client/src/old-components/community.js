import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';
import '../assets/css/community.css';

export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            reportBugModalShow: false,
            systemRequestModalShow: false,
            contactModalShow: false,
        }
    }

    render() {
        return(
            <div>
                <Navbar authenticated={this.state.authenticated} changeView={props.changeView} />
                <div className='main-container'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg community-text-container'>
                                <h1>GCODEdeck Community</h1>
                                <p>
                                    We would love for you to connect with the GCODEdeck community!
                                    Here you can find our release notes and you can submit Bug Reports,
                                    System Requests, or just leave us a message. We hope you enjoy your stay!
                                </p>
                            </div>
                            <div className='col-lg community-buttons-container'>
                                <div>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill mx-2 my-2 w-36'
                                    >Release Notes</button>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill w-36'
                                        onClick={() => this.handleModal('report')}
                                    >Report a Bug</button>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill mx-2 w-36'
                                        onClick={() => this.handleModal('system')}
                                    >System Request</button>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill w-36'
                                        onClick={() => this.handleModal('contact')}
                                    >Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal show={this.state.reportBugModalShow} onHide={() => this.handleModal('report')}>
                        <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                        <Modal.Body>This is a Modal Body</Modal.Body>
                        <Modal.Footer>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('report')}
                            >Cancel</button>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('report')}
                            >Submit</button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.systemRequestModalShow} onHide={() => this.handleModal('system')}>
                        <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                        <Modal.Body>This is a Modal Body</Modal.Body>
                        <Modal.Footer>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('system')}
                            >Cancel</button>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('system')}
                            >Submit</button>
                        </Modal.Footer>
                    </Modal>
                    <Modal show={this.state.contactModalShow} onHide={() => this.handleModal('contact')}>
                        <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                        <Modal.Body>This is a Modal Body</Modal.Body>
                        <Modal.Footer>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('contact')}
                            >Cancel</button>
                            <button 
                                className='btn btn-primary btn-lg rounded-pill'
                                onClick={() => this.handleModal('contact')}
                            >Submit</button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}