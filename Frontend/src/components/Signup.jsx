import React from "react";
import { json, Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";


function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    axios.post("http://localhost:4001/user/register",userInfo)
    .then((res)=>{
        if(res.data)
        {
          toast.success("registered sucessfully");
          navigate("/")
          
        }
        localStorage.setItem("users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.res)
      {
        toast.error(err.response.data.message)
      } 
     
    })
    
  };

  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className="flex h-screen justify-center items-center"
        >
          <div className="modal-box bg-gradient-to-br from-green-200 via-blue-200 to-purple-300 text-black shadow-xl">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-3xl text-gray-800">Signup</h3>
              <div className="justify-center flex flex-col items-center">
                <div className="justify-center flex flex-col items-center mb-5">
                  <span className="font-bold">Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="rounded-lg text-center  border-gray-300 mb-5 w-70 px-3 py-1 outline-none "
                    {...register("fullname")}
                  />
                  <span className="font-bold">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-lg text-center  border-gray-300 mb-5 w-70 px-3 py-1 outline-none "
                    {...register("email")}
                  />
                  <span className="font-bold">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="rounded-lg text-center border-gray-300 mb-5 w-70 px-3 py-1  outline-none "
                    {...register("password")}
                  />
                </div>
                <div className="text-center">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-md p-2 mb-2">
                    Signup
                  </button>
                  <p>
                    Already have an account{" "}
                    <Link
                      to="/"
                      className="cursor-pointer text-indigo-500 hover:text-indigo-600"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
