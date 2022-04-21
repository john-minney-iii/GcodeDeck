import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";
import '../assets/css/community.css';
import ContactRequestForms from "../components/community-modals/contact-us";
import ReportABugForm from "../components/community-modals/report-bug";
import SystemRequestForm from "../components/community-modals/system-request";


export default function Community(props) {
    const [reportModalShow, setReportModalShow] = useState(false);
    const [systemModalShow, setSystemModalShow] = useState(false);
    const [contactModalShow, setContactModalShow] = useState(false);
    // // States for forms
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // Used for server posts
    const [baseUrl, setBaseUrl] = useState(
        (props.prod) ? 'https://minn4519.pythonanywhere.com' : 'http://localhost:8000'
    );

    const handleModal = (which) => {
        if (which === 'report')
            setReportModalShow(!reportModalShow);
        else if (which === 'system')
            setSystemModalShow(!systemModalShow);
        else if (which === 'contact')
            setContactModalShow(!contactModalShow);
    };

    const submitContactRequest = async (username, email, message) => {
        if (username == '' || email == '' || message == '') {
            alert('Please fill out the information');
        } else {
            axios.post(baseUrl + '/api/v1/community/contactUs/', {
                'username': username,
                'email': email,
                'content': message
            }).then(res => {
                if (res.status === 201)
                    alert('Thanks for reaching out!');
            })
        }
    };

    const submitSystemRequest = async (username, email, message) => {
        if (username == '' || email == '' || message == '') {
            alert('Please fill out the information');
        } else {
            axios.post(baseUrl + '/api/v1/community/systemRequest/', {
                'username': username,
                'email': email,
                'content': message
            }).then(res => {
                if (res.status === 201)
                    alert('Thanks for the system request!');
            })
        }
    };

    const submitBugReport = async (username, email, message) => {
        if (username == '' || email == '' || message == '') {
            alert('Please fill out the information');
        } else {
            axios.post(baseUrl + '/api/v1/community/bugReport/', {
                'username': username,
                'email': email,
                'content': message
            }).then(res => {
                if (res.status === 201)
                    alert('Thanks for the bug report!');
            })
        }
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
            <ReportABugForm 
                show={reportModalShow} 
                setShow={setReportModalShow}
                submitBugReport={submitBugReport}
            />
            <SystemRequestForm 
                show={systemModalShow} 
                setShow={setSystemModalShow}
                submitSystemRequest={submitSystemRequest}
            />
            <ContactRequestForms 
                show={contactModalShow} 
                setShow={setContactModalShow}
                submitContactRequest={submitContactRequest}
            />
        </div>
    </div>

}