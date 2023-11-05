/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";

import { useContext, useEffect, useState, } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";
// import { AuthContext } from "../Login/Firebase/AuthProvider";






const Navbar = () => {


    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)

    }, [theme])

    const toggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }



    const { user, logOut } = useContext(AuthContext)





    const hendleSignOut = () => {
        logOut()
            .then(() =>
                console.log("logout done"))
            .catch(error => console.log(error.massage))
    }






    return (
        <div>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/Addproduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                <NavLink
                                    to="/mycart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>



                            {/* {
                            user && (<>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FFB606] underline" : ""
                                        }
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/contactus"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FFB606] underline" : ""
                                        }
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                            </>)
                        } */}



                            {/* {
                                user ? (
                                    <>
                                        <li onClick={hendleSignOut} className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                            <NavLink
                                                to="/SignIn"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                                }
                                            >
                                                Sign Out
                                            </NavLink>
                                        </li>

                                    </>
                                ) : (<>
                                    <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                        <NavLink
                                            to="/SignIn"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                            }
                                        >
                                            Sign In
                                        </NavLink>
                                    </li>

                                </>)
                            } */}



                        </ul>
                    </div>
                    <Link to={"/"}><img className="w-20 ml-4" src="https://i.ibb.co/4pX8HKv/abstract-book-and-group-study-logo-icon-template-vector-33133567-removebg-preview-1.png" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="ml-auto  mr-8 hidden items-center gap-2 lg:flex">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/assinments"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                }
                            >
                                Assignments
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            {/* <NavLink
                                to="/signin"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-500  underline" : ""
                                }
                            >
                                Login
                            </NavLink> */}
                        </li>

                        {
                            user && (<>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/addassinments"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                        }
                                    >
                                        Create Assignments
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to=""
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                        }
                                    >
                                        My Assignments
                                    </NavLink>
                                </li>
                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to=""
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                        }
                                    >
                                         Submitted Assignments
                                    </NavLink>
                                </li>
                            </>)
                        }

                        {
                            user ? (
                                <>
                                    <li onClick={hendleSignOut} className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                        <NavLink
                                            to="/SignIn"
                                            className={({ isActive, isPending }) =>
                                                isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                            }
                                        >
                                            Sign Out
                                        </NavLink>
                                    </li>

                                </>
                            ) : (<>

                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/register"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                        }
                                    >
                                        Register
                                    </NavLink>
                                </li>

                                <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                                    <NavLink
                                        to="/SignIn"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-blue-500 underline" : ""
                                        }
                                    >
                                        Sign In
                                    </NavLink>
                                </li>


                            </>)
                        }

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center justify-center">





                        <div className="dropdown dropdown-end mt-2">

                            <div tabIndex={0} className="mt-3.5 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">

                            </div>
                        </div>

                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input className="opacity-0" type="checkbox" onChange={toggle} checked={theme === "light" ? false : true} />

                            {/* sun icon */}
                            <svg className="swap-on fill-current mt-1 mr-1 w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current mr-1 mt-1 w-7 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                user && (<>
                                    <div className="">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} />

                                            </div>
                                        </label>

                                    </div>
                                </>)
                            }
                        </label>











                    </div>
                </div>
            </div>






        </div>
    );
};

export default Navbar;