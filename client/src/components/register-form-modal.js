import { Modal } from "react-bootstrap";

export default function RegisterFormModal(props) {
    return <Modal show={props.show} onHide={() => props.setShow(false)} >
        <Modal.Header closeButton>Register</Modal.Header>
        <Modal.Body>Register Form</Modal.Body>
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
            >Register</button>
        </Modal.Footer>
    </Modal>;
}
