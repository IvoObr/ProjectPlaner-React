import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import {PrivateRoute} from "./components/privateRoute/PrivateRoute";
import {NotFound} from "./components/auth/NotFound";
import Logout from "./components/auth/Logout";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar/>
                    <Switch>
                        <PrivateRoute exact path='/' component={Dashboard}/>
                        <PrivateRoute path='/project/:id' component={ProjectDetails}/>
                        <Route exact path='/login' component={SignIn}/>
                        <Route exact path='/signup' component={SignUp}/>
                        <PrivateRoute path='/create' component={CreateProject}/>
                        <Route path='/notfound' component={NotFound}/>
                        <Route path='/logout' component={Logout}/>
                        <Redirect from='*' to='/notfound'/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
