import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'
const headerLink = [
    {
        id:1,
        name:"Home",
        path:'/'
    },
    {
        id:2,
        name:"About",
        path:'/about'
    },
    {
        id:3,
        name:"Login",
        path:'/login'
    },
]
const Header = () => {
    const {user,userName, userSignOut} = useContext(AuthContext)
    const link = headerLink.map(link => <NavLink key={link.id} to={link.path} className={({isActive})=>isActive?'text-rose-500':''}>
        {link.name}
    </NavLink>)

const handleSignOut = ()=>{
  userSignOut()
  .then((res)=>{console.log(res)})
  .catch((err)=>{
    console.log(err);
  })
 
}

  return (
    <>
      <div className="text-center text-lg bg-gray-50 p-3 sticky top-0 z-20 drop-shadow-sm flex justify-between items-center">
        <div className="space-x-3">{link}</div>

        <div className="flex items-center">
          {user && (
            <div className="">
              <span className="mr-3 font-bold">{userName ? userName : ""}</span>
              <button
                className="py-1 px-2 border border-gray-800 text-gray-800 font-medium"
                onClick={handleSignOut}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header