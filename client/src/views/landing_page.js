import { useState } from "react";
import Navbar from "../components/navbar";
import '../assets/css/landing-page.css';

export default function LandingPage(props) {
    return <div className='landing-page'>
        <Navbar authenticated={props.authenticated} />
        <p>Landing page</p>
    </div>;
}
