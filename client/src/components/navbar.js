import React, { Component } from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.authenticated) {
            return(
                <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand mx-2" href="/">GCODEdeck</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a href="/" class="nav-item nav-link active" id="homeNavLink">Home</a>
                        <a href="" class="nav-item nav-link" id="myProgramsNavLink">My Programs</a>
                        <a href="" class="nav-item nav-link" id="myToolsNavLink">My Tools</a>
                        <a href="" class="nav-item nav-link" id="communityNavLink">Community</a>
                        <a href='' class="nav-item nav-link" id="accountNavLink">Account</a>
                    </div>
                </div>
            </nav>
            );
        }
        return(
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand mx-2" href="/">GCODEdeck</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mx-2" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a href="/" class="nav-item nav-link active" id="homeNavLink">Home</a>
                        <a href="/community/aboutus/" class="nav-item nav-link" id="aboutusNavLink">About Us</a>
                        <a href="/community/" class="nav-item nav-link" id="communityNavLink">Community</a>
                    </div>
                </div>
            </nav>
        );
    }
}