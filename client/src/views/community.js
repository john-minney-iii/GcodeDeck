import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";
import '../assets/css/community.css';

export default function Community(props) {
    const [reportModalShow, setReportModalShow] = useState(false);
    const [systemModalShow, setSystemModalShow] = useState(false);
    const [contactModalShow, setContactModalShow] = useState(false);
    // States for forms
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleModal = (which) => {
        if (which === 'report')
            setReportModalShow(!reportModalShow);
        else if (which === 'system')
            setSystemModalShow(!systemModalShow);
        else if (which === 'contact')
            setContactModalShow(!contactModalShow);
        resetFormStates();
    };

    const resetFormStates = () => {
        setUsername('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return <div className='community-view'>
        <Navbar authenticated={props.authenticated} changeView={props.changeView} />
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
                                onClick={() => handleModal('report')}
                            >Report a Bug</button>
                            <button
                                className='btn btn-primary btn-lg rounded-pill mx-2 w-36'
                                onClick={() => handleModal('system')}
                            >System Request</button>
                            <button
                                className='btn btn-primary btn-lg rounded-pill w-36'
                                onClick={() => handleModal('contact')}
                            >Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={reportModalShow} onHide={() => handleModal('report')}>
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                <Modal.Body>This is a Modal Body</Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('report')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('report')}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
            <Modal show={systemModalShow} onHide={() => handleModal('system')}>
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                <Modal.Body>This is a Modal Body</Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('system')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('system')}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
            <Modal show={contactModalShow} onHide={() => handleModal('contact')}>
                <Modal.Header closeButton>This is a Modal Heading</Modal.Header>
                <Modal.Body>This is a Modal Body</Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('contact')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('contact')}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>

}
