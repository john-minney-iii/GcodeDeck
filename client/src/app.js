import React, { Component } from 'react';
import Navbar from './components/navbar';
import './assets/css/app.css';

export default class App extends Component {
    render() {
        return(
            <div className='app m-5'>
                <Navbar authenticated={false} />
            </div>
        );
    }
}
