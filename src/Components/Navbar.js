import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function Navbar(props) {

    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;

    const logoutHandler = ()=>{
        setLoggedIn(false);
        toast.success("Logged Out Successfully");
    }

    return (
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            
            <Link to="/">
                <img src={logo} alt="Logo" width="160" height="32" loading="lazy" />
            </Link>
            

            <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/"><li>About</li></Link>
                    <Link to="/"><li>Contact</li></Link>
                </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                
                {   !loggedIn &&
                    <Link to={"/login"}>
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Log in
                        </button>
                    </Link>
                }

                {   !loggedIn &&
                    <Link to={"/signup"}>
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Sign Up
                        </button>
                    </Link>
                }

                {   loggedIn &&
                    <Link to={"/"}>
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"  onClick={logoutHandler}>
                            Logout
                        </button>
                    </Link>
                }

                {   loggedIn &&
                    <Link to={"/dashboard"}>
                        <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
                            Dashboard
                        </button>
                    </Link>
                }

            
            </div>

        </div>
    )
}

export default Navbar;