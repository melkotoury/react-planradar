import React from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./store/index";
import Login from './components/login/login';
import Signup from './components/signup/signup';
import NotFound from "./components/not-found/not-found";
import ForgetPassword from "./components/forget-password/forget-password";
import './App.css';


const App = () => (
        <div>
            {routes}
        </div>


);
const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact={true}/>
                <Route path="/signup" component={Signup} exact={true}/>
                <Route path="/forget-password" component={ForgetPassword} exact={true}/>
                <Route  component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);















export default App;
