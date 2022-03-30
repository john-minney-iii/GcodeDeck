import { Component, useState } from "react";
import Navbar from "../components/navbar";
import { Modal } from "react-bootstrap";
import '../assets/css/community.css';

export default function Community(props) {
    const [reportModalShow, setReportModalShow] = useState(false);
    const [systemModalShow, setSystemModalShow] = useState(false);
    const [contactModalShow, setContactModalShow] = useState(false);

    const handleModal = (which) => {
        if (which === 'report')
            setReportModalShow(!reportModalShow);
        else if (which === 'system')
            setSystemModalShow(!systemModalShow);
        else if (which === 'contact')
            setContactModalShow(!contactModalShow);
    };

    return <div className='community-view'>
        <Navbar authenticated={props.authenticated} />
    </div>

}
