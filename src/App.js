import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom'
import Header from './components/header/header';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import './App.css';

const App = () => (
    <div className="App">
        <Header/>
        <div className="App-intro">
            {routes}
        </div>

    </div>
);
const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/signup" component={Signup} exact={true}/>
        </div>
    </BrowserRouter>
);















export default App;
