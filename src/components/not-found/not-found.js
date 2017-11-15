import React from 'react';
import './not-found.css';
import Header from '../header/header';


const NotFound = () => (
    <div className="App">
        <Header page='not-found'/>
        <div className="App-intro">
        <header className="not-found-header">
            <h1 className="not-found-title">Page Not Found!</h1>
        </header>
        </div>
    </div>
);

export default NotFound;