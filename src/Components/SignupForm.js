import React from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function SignupForm({ setLoggedIn }) {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    const changeHandler = (event) => {
        setFormData((prev) => {
            return (
                {
                    ...prev, [event.target.name]: event.target.value
                }
            )
        })
    }

    let navigate = useNavigate();

    const submitHandler = (event) => {

        event.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Password and Confirm Password should be same");
            return;
        }

        setLoggedIn(true);
        toast.success("Account Created Successfully");

        const accData = {
            // ...formData , accountType:accountType
             ...formData , accountType
        }

        console.log("Prinitng Account data : ", accData);
        navigate("/dashboard");
    }

    return (
        <div>
            
            {/* Student and Instructor Button */}
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

                <button className={(accountType === "student" ?
                    "bg-richblack-900 text-richblack-5 " :
                    "bg-transparent  text-richblack-200 ") + "py-2 px-5 rounded-full transition-all duration-200"}
                    onClick={() => {
                        setAccountType("student");
                    }}>Student</button>

                <button className={(accountType === "instructor" ?
                    "bg-richblack-900 text-richblack-5 " :
                    "bg-transparent  text-richblack-200 ") + "py-2 px-5 rounded-full transition-all duration-200"}
                    onClick={() => {
                        setAccountType("instructor");
                    }}>Instructor</button>

            </div>

            <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>

                {/* First Name and last Name */}
                <div className='flex gap-x-4'>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            First Name
                            <sup className='text-pink-200'>*</sup>
                        </p>

                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                            type="text" required placeholder='Enter first name'
                            name="firstName" value={formData.firstName} onChange={changeHandler} />

                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Last Name
                            <sup className='text-pink-200'>*</sup>
                        </p>

                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                            type="text" required placeholder='Enter last name'
                            name="lastName" value={formData.lastName} onChange={changeHandler} />
                    </label>

                </div>

                {/* Email Address */}
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email Address
                        <sup className='text-pink-200'>*</sup>
                    </p>

                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                        type="email" required placeholder='Enter email address'
                        name="email" value={formData.email} onChange={changeHandler} />
                </label>

                {/* Password and Confirm Password */}
                <div className='flex gap-x-4' >

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Password
                            <sup className='text-pink-200'>*</sup>
                        </p>

                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                            type={showPassword ? "text" : "password"} required placeholder='Enter your password'
                            name="password" value={formData.password} onChange={changeHandler} />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ?
                                    <AiOutlineEye fontSize={24} fill='#AFB2BF' /> :
                                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                            }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                            Confirm Password
                            <sup className='text-pink-200'>*</sup>
                        </p>

                        <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-2 border-b-richblack-700'
                            type={showConfirmPassword ? "text" : "password"} required placeholder='Re-enter password'
                            name="confirmPassword" value={formData.confirmPassword} onChange={changeHandler} />

                        <span className='absolute right-3 top-[38px] cursor-pointer' onClick={() => setConfirmShowPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ?
                                    <AiOutlineEye fontSize={24} fill='#AFB2BF' /> :
                                    <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />
                            }
                        </span>
                    </label>

                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' type="submit">Create Account</button>

            </form>

        </div>
    )
}

export default SignupForm