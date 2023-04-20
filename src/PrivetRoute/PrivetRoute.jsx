import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

const PrivetRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext)

  const location = useLocation()


  if(loading){
    return <p>Loading...</p>
  }
  
  if(user){
    return children
  }

  return <Navigate to={'/login'} state={{from:location}}/>
}

export default PrivetRoute