import { useContext } from "react";
import { AuthContext } from "../Login/Firebase/AuthProvider";


const UseAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default UseAuth;