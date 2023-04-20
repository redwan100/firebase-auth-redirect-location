import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders'


const Home = () => {
  const { userName, setUserName, createGoogleSingIn } = useContext(AuthContext);
  const signInGoogle = ()=>{
    createGoogleSingIn()
      .then((res) => {
        const loggedIn = res.user;
        setUserName(loggedIn.displayName);
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <div>
      <h1>Home page </h1>
      <button className='border border-gray-400 py-1 px-2' type="button" onClick={signInGoogle}>
       Sign In with Google
      </button>
    </div>
  );
}

export default Home