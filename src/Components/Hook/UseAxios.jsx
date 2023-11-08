import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: "https://assignment-11-server-side-one.vercel.app",
    withCredentials: true
})

const UseAxios = () => {
    const { logOut } = UseAuth()
    const Navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        },
            error => {
                console.log(error.response)

                if (error?.response?.status === 401 || error?.response?.status === 403) {
                    console.log("logout the user")
                    logOut()
                        .then(() =>
                            console.log("logout done"))

                            Navigate("/signin")

                        .catch(error => console.log(error?.massage))



                }

            })

    }, [])


    return axiosSecure;
};

export default UseAxios;