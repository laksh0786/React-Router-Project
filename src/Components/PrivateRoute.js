import React from 'react'
import { Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

function PrivateRoute({loggedIn  , children}) {

    // const navigate = useNavigate();
    // console.log(children);

    if(loggedIn){
        // return <Dashboard/>;
        return children;
    }

    else{
        return <Navigate to="/login" />
    }
}

export default PrivateRoute