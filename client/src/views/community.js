import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";
import '../assets/css/community.css';
import InputForm from "./old/InputForm";

export default function Community(props) {
    const [reportModalShow, setReportModalShow] = useState(false);
    const [systemModalShow, setSystemModalShow] = useState(false);
    const [contactModalShow, setContactModalShow] = useState(false);
    // States for forms
    const [values, setValues] = useState({
        username: "",
        email: "",
        message: "",
      });

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
        setValues('');
    };
//////////////////////////////////////////////////////////////
    const bugUsername = [
        {
            id: 1,
            name: "username",
            type: "text",
            errorMessage:
              "You must enter your username",
            placeholder: "Username",
            pattern: "^[A-Za-z0-9@_+-]{1,150}$",
            required: true,
          },
    ];
    const bugEmail = [
        {
            id: 1,
            name: "email",
            type: "email",
            errorMessage: "A valid email address must be entered",
            placeholder: "Email",
            required: true,
          },
    ];
    const bugMessage = [
        {
          id: 3,
          name: "message",
          type: "text",
          errorMessage:
            "Message can only be between 1 and 1000 characters",//I made these numbers I made up so feel free to change them
          placeholder: "Message",
          pattern: "^[A-Za-z0-9@_+-.!?_*&$#():;]{1,1000}$",
          required: true,
        },
    ];
    /////////////////////////////////////////////////////////////////////////////////////////
    const systemUsername = [
        {
            id: 1,
            name: "username",
            type: "text",
            errorMessage:
              "You must enter your username",
            placeholder: "Username",
            pattern: "^[A-Za-z0-9@_+-]{1,150}$",
            required: true,
          },
    ];
    const systemEmail = [
        {
            id: 1,
            name: "email",
            type: "email",
            errorMessage: "A valid email address must be entered",
            placeholder: "Email",
            required: true,
          },
    ];
    const systemMessage = [
        {
          id: 3,
          name: "message",
          type: "text",
          errorMessage:
            "Message can only be between 1 and 1000 characters",//I made these numbers I made up so feel free to change them
          placeholder: "Message",
          pattern: "^[A-Za-z0-9@_+-.!?_*&$#():;]{1,1000}$",
          required: true,
        },
    ];
    /////////////////////////////////////////////////////////////////////////////////////////////////
    const contactUsername = [
        {
            id: 1,
            name: "username",
            type: "text",
            errorMessage:
              "You must enter your username",
            placeholder: "Username",
            pattern: "^[A-Za-z0-9@_+-]{1,150}$",
            required: true,
          },
    ];
    const contactEmail = [
        {
            id: 1,
            name: "email",
            type: "email",
            errorMessage: "A valid email address must be entered",
            placeholder: "Email",
            required: true,
          },
    ];
    const contactMessage = [
        {
          id: 3,
          name: "message",
          type: "text",
          errorMessage:
            "Message can only be between 1 and 1000 characters",//I made these numbers I made up so feel free to change them
          placeholder: "Message",
          pattern: "^[A-Za-z0-9@_+-.!?_*&$#():;]{1,1000}$",
          required: true,
        },
    ];

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const submitContactRequest = async () => {
        axios.post('http://localhost:8000/api/v1/community/contactUs/', {
            'username': contactUsername,
            'email': contactEmail,
            'content': contactMessage
        }).then(res => {
            if (res.status === 201)
                alert('Thanks for reaching out!');
        })
    };

    const submitSystemRequest = async () => {
        axios.post('http://localhost:8000/api/v1/community/systemRequest/', {
            'username': systemUsername,
            'email': systemEmail,
            'content': systemMessage
        }).then(res => {
            if (res.status === 201)
                alert('Thanks for the system request!');
        })
    };

    const submitBugReport = async () => {
        axios.post('http://localhost:8000/api/v1/community/bugReport/', {
            'username': bugUsername,
            'email': bugEmail,
            'content': bugMessage
        }).then(res => {
            if (res.status === 201)
                alert('Thanks for the bug report!');
        })
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
            <Modal show={reportModalShow} onHide={() => handleModal('report')}>
                <Modal.Header closeButton>Report a Bug</Modal.Header>
                <Modal.Body>
                    {bugUsername.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {bugEmail.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {bugMessage.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('report')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('report');
                            submitBugReport();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
            <Modal show={systemModalShow} onHide={() => handleModal('system')}>
                <Modal.Header closeButton>System Request</Modal.Header>
                <Modal.Body>'Got an idea for a feature? Let us know!'
                    {systemUsername.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {systemEmail.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {systemMessage.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('system')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('system');
                            submitSystemRequest();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
            <Modal show={contactModalShow} onHide={() => handleModal('contact')}>
                <Modal.Header closeButton>Contact Us</Modal.Header>
                <Modal.Body>Send us a message!
                    {contactUsername.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {contactEmail.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                    <p></p>
                    {contactMessage.map((input) => (
                    <InputForm
                        key={input.id[1,2]}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('contact')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('contact');
                            submitContactRequest();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
        </div>
    </div>

}
