import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const SignUp = () => {
  const { user,setUserName, createUser } = useContext(AuthContext);
  const [error, setError] = useState('')

  
  const handleSubmit = (e) => {
    setError('')
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    setUserName(username)

    if(password !== confirmPassword){
     setError('password not match')
      return;
    }else if(password.length < 6){
      setError('password must be at least 6 characters')
      return;
    }

    createUser(email, password) 
      .then((result) => {
        const loggedIn = result.user;
        form.reset()
      })
      .catch((error) => setError(error.message));   
   
  };

   
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-4xl font-semibold my-5">
        Please Sign up
      </h1>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="password"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            name="confirmPassword"
            id="confirm-password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between flex-col">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <small className="">
            Already have an account?
            <Link
              className="text-blue-500 hover:text-blue-800 font-medium"
              to={"/login"}
            >
              Sign in
            </Link>
          </small>
        </div>
        {error && <p className="text-rose-500">{error}</p>}
      </form>
    </div>
  );
};

export default SignUp;
