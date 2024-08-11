import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = async (data) => {
    const userInfo = {
    
      email: data.email,
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
        if(res.data)
        {
         
          toast.success("Login successful", { duration: 15000 });
          document.getElementById("my_modal_3").close()
        }
        window.location.reload()
        localStorage.setItem("users",JSON.stringify(res.data.user))
        
    }).catch((err)=>{
      if(err.response)
      {
       
        toast.error(err.response.data.message)
      } 
     
    })
    
  }


  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gradient-to-br from-green-200 via-blue-200 to-purple-300 text-black shadow-xl">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_modal_3").close()}>
              ✕
            </Link>
        
          <h3 className="font-bold text-3xl text-gray-800">Login</h3>
          <div className="justify-center flex flex-col items-center">
            <div className="justify-center flex flex-col items-center mb-5">
              <span className="font-bold">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg text-center  border-gray-300 mb-5 w-70 px-3 py-1 outline-none  "
                {...register("email")}
                required
              />
              <span className="font-bold">Password</span>
              <input
                type="password" 
                placeholder="Enter your Password"
                className="rounded-lg text-center border-gray-300 mb-5 w-70 px-3 py-1  outline-none "
                {...register("password")}
                required
              />
            </div>
            <div className="text-center">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md p-2 mb-2">Login</button>
                <p>Not registered yet? <Link to="/signup" className="cursor-pointer text-indigo-500 hover:text-indigo-600">Signup</Link></p>
            </div>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
