import React, { Component } from 'react';
import Navbar from './components/navbar';

export default class App extends Component {
    render() {
        return(
            <div className='app m-5'>
                <Navbar authenticated={true} />
                <h1>GCODEdeck</h1>
            </div>
        );
    }
}
