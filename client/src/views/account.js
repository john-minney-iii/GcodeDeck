import { useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import axios from "axios";
import '../assets/css/community.css';

export default function Account(props) {
    const [changePassModalShow, setChangePassModalShow] = useState(false);
    const [username, setUsername] = useState('');
    const [currentPswd, setCurrentPswd] = useState('');
    const [newPswd, setNewPswd] = useState('');
    const [confNewPswd, setConfNewPswd] = useState('');

    const handleModal = (which) => {
        if (which === 'changePass')
            setChangePassModalShow(!changePassModalShow);
        resetFormStates();
    };

    const resetFormStates = () => {
        setUsername('');
        setCurrentPswd('');
        setNewPswd('');
        setConfNewPswd('');
    };

    const ChangePswdForm = () => <form>
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
            <label htmlFor='currentPswd'>Current Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='currentPswd'
                value={currentPswd}
                onChange={(e) => setCurrentPswd(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='newPswd'>New Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='newPswd' 
                value={newPswd}
                onChange={(e) => setNewPswd(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label htmlFor='confNewPswd'>Confirm New Password</label>
            <input 
                type='password' 
                className='form-control' 
                id='confNewPswd' 
                value={confNewPswd}
                onChange={(e) => setConfNewPswd(e.target.value)}
            />
        </div>
    </form>;

    const submitPasswordChange = async () => {
        axios.post('http://localhost:8000/api/v1/user/changePass/', {
            username: username,
            currentPassword: currentPswd,
            newPassword: newPswd
        },
        {
            headers: {
                Authorization: 'TOKEN ' + props.token
            }
        }).then(res => {
            if (res.status === 200)
                props.logOut();
        });
    };

    return <div>
        <Navbar authenticated={props.authenticated} changeView={props.changeView} />
        <div className="account-main-container">
            <div>
                <div className="card text-center p-4">
                    <div className="card-body">
                        <h3 className="card-title">Account</h3>
                        <hr />
                        <button
                            className="btn btn-primary btn-lg rounded-pill"
                            onClick={() => handleModal('changePass')}
                        >Change Password</button>
                        <br />
                        <button
                            className="btn btn-danger btn-lg rounded-pill mt-2"
                            onClick={props.logOut}
                        >Logout</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal show={changePassModalShow} onHide={() => handleModal('changePass')}>
                <Modal.Header closeButton>Report a Bug</Modal.Header>
                <Modal.Body>{ChangePswdForm()}</Modal.Body>
                <Modal.Footer>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => handleModal('changePass')}
                    >Cancel</button>
                    <button 
                        className='btn btn-primary btn-lg rounded-pill'
                        onClick={() => {
                            handleModal('changePass');
                            submitPasswordChange();
                        }}
                    >Submit</button>
                </Modal.Footer>
            </Modal>
    </div>;
}
