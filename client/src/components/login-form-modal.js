import { Modal } from "react-bootstrap";

export default function LoginFormModal(props) {
    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Login</Modal.Header>
        <Modal.Body>Login Form</Modal.Body>
        <Modal.Footer>
            <button
                className='btn btn-primary btn-lg rounded-pill'
                onClick={() => props.setShow(false)}
            >Cancel</button>
            <button
                className='btn btn-primary btn-lg rounded-pill'
                onClick={() => {
                    props.setShow(false);
                }}
            >Login</button>
        </Modal.Footer>
    </Modal>;
}
