import React from 'react'
import {Navigate} from 'react-router-dom';

const PrivateRoute = ({isLoggedIn, children}) => {//Dashboard was Private Route's children, So children will be passed here by default
  if(isLoggedIn) {
    return children;
  }
  else {
    return <Navigate to="/login"/>
  }
}

export default PrivateRoute
