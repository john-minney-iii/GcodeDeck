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

    const ContactRequestForms = (msg) => <form>
        <small id='usernameHelp' className='form-text text-muted'>{msg}</small>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='emailInput'>Email</label>
            <input 
                type='email' 
                className='form-control' 
                id='emailInput' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='messageInput'>Message</label>
            <input 
                type='textarea' 
                className='form-control' 
                id='messageInput' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                height={200}
            />
        </div>
    </form>

    const ReportABugForm = () => <form>
        <small id='usernameHelp' className='form-text text-muted'>Report a Bug</small>
        <div className='form-group'>
            <label htmlFor='usernameInput'>Username</label>
            <input 
                type='text' 
                className='form-control' 
                id='usernameInput'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='emailInput'>Email</label>
            <input 
                type='email' 
                className='form-control' 
                id='emailInput' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='subjectInput'>Subject</label>
            <input 
                type='text' 
                className='form-control' 
                id='subjectInput' 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='messageInput'>Message</label>
            <input 
                type='textarea' 
                className='form-control' 
                id='messageInput' 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                height={200}
            />
        </div>
    </form>

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
                <Modal.Header closeButton>Report a Bug</Modal.Header>
                <Modal.Body>{ReportABugForm()}</Modal.Body>
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
                <Modal.Header closeButton>System Request</Modal.Header>
                <Modal.Body>{ContactRequestForms('Got an idea for a feature? Let us know!')}</Modal.Body>
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
                <Modal.Header closeButton>Contact Us</Modal.Header>
                <Modal.Body>{ContactRequestForms('Send us a message!')}</Modal.Body>
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
