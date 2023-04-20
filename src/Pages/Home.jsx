import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders'


const Home = () => {
  const {name} = useContext(AuthContext)
  return (
    <div>
     <h1>Home page </h1>
    </div>
  )
}

export default Home