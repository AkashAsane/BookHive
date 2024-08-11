import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const[authUser,setAuthUser]=useAuth()

    const handleLogout=()=>{
        try {
               setAuthUser({
               ...authUser,
               user:null
            })
            localStorage.removeItem("users")
            toast.success("Logout succesfully")
            window.location.reload()
        } catch (error) {
            toast.error("Error"+error.message)
        }

    }

  return (
    <div>
        <button className='px-3 py-2 cursor-pointer bg-red-500 text-white rounded-md' onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Logout
