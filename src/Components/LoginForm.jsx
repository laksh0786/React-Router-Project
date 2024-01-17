import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function LoginForm({ setLoggedIn }) {


    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (event) => {
        setFormData((prev) => {
            return (
                {
                    ...prev, [event.target.name]: event.target.value
                }
            )
        })
    }

    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        setLoggedIn(true);
        console.log("Printing form data", formData);
        toast.success("Logged In Successfully");
        navigate("/dashboard");
    }

    return (
        <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>

            {/* If we write input tag inside label then it automatically links with the label */}
            <label className='w-full '>

                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>

                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700' type='email' required placeholder='Enter email address'
                    name="email" value={formData.email} onChange={changeHandler} />

            </label>

            <label className='w-full relative'>

                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-200'>*</sup></p>

                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                    type={showPassword ? ("text") : ("password")} required placeholder='Enter Password'
                    name="password" value={formData.password} onChange={changeHandler} />

                <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                    {
                        showPassword ?
                            <AiOutlineEye fontSize={24} fill='#AFB2BF' /> :
                            <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                    }
                </span>

                <Link to="#">
                    <p className='text-right text-blue-100 text-xs mt-1'>Forgot Password</p>
                </Link>

            </label>

            <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign in</button>

        </form>
    )
}

export default LoginForm;