import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { Modal } from 'react-bootstrap';
import '../assets/css/community.css';

export default class Community extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: this.props.authenticated,
            reportBugModalShow: false,
            systemRequestModalShow: false,
            contactModalShow: false,
        }
    }

    handleModal = (which) => {
        if (which === 'report') {
            this.setState({ reportBugModalShow: !this.state.reportBugModalShow });
        } else if (which === 'system') {
            this.setState({ systemRequestModalShow: !this.state.systemRequestModalShow });
        } else if (which === 'contact') {
            this.setState({ contactModalShow: !this.state.contactModalShow });
        }
    };

    render() {
        return(
            <div>
                <Navbar authenticated={this.state.authenticated} />
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
                                    <a href='' className='btn btn-primary btn-lg rounded-pill mx-2'>Release Notes</a>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill'
                                        onClick={() => this.handleModal('report')}
                                    >Report a Bug</button>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill mx-2'
                                        onClick={() => this.handleModal('system')}
                                    >System Request</button>
                                    <button
                                        className='btn btn-primary btn-lg rounded-pill'
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
