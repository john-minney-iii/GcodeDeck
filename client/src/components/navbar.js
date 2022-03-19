import React, { Component } from 'react';

export default function Navbar(props) {
    if (props.authenticated) {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand mx-2" href="/">GCODEdeck</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link active" id="homeNavLink">Home</a>
                        <a href="" className="nav-item nav-link" id="myProgramsNavLink">My Programs</a>
                        <a href="" className="nav-item nav-link" id="myToolsNavLink">My Tools</a>
                        <a href="" className="nav-item nav-link" id="communityNavLink">Community</a>
                        <a href='' className="nav-item nav-link" id="accountNavLink">Account</a>
                    </div>
                </div>
            </nav>
        );
    } else {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand mx-2" href="/">GCODEdeck</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a href="/" className="nav-item nav-link active" id="homeNavLink">Home</a>
                        <a href="/community/aboutus/" className="nav-item nav-link" id="aboutusNavLink">About Us</a>
                        <a href="/community/" className="nav-item nav-link" id="communityNavLink">Community</a>
                    </div>
                </div>
            </nav>
        );
    }
};
