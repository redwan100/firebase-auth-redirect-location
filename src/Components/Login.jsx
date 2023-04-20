import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/'



 
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    setError("");
    userSignIn(email, password)
      .then((result) => {
        const loggedIn = result.user;
        form.reset();
        navigate(from,{replace:true})
      })
      .catch((error) => setError(error.message));
  };


  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-4xl font-semibold my-5">Please Sign in</h1>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSignIn}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                error ? " border-red-500" : ""
              }`}
              name="password"
              id="password"
              type="password"
              placeholder="********"
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
          </div>
          <div className="flex items-center justify-between flex-col">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </p>
          </div>
          <small>
            Don't have an account?{" "}
            <Link
              className="text-blue-600 font-medium hover:text-blue-400"
              to={"/signup"}
            >
              Sign up
            </Link>
          </small>
        </form>
      </div>
    </>
  );
};

export default Login;
