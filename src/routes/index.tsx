import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ResetPassword from '../pages/ResetPassword';
import Dashboard from '../pages/Dashboard';


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/reset-password' component={ResetPassword} />
            <Route path='/signup' component={SignUp} />
            <Route path='/dashboard'  component={Dashboard} />
        </Switch>
    )
}

export default Routes;