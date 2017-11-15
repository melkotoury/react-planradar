import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Login from './components/login/login';
import Signup from './components/signup/signup';
import NotFound from "./components/not-found/not-found";
import './App.css';

const App = () => (
        <div>
            {routes}
        </div>


);
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="/signup" component={Signup} exact={true}/>
            <Route  component={NotFound}/>
        </Switch>
    </BrowserRouter>
);















export default App;
