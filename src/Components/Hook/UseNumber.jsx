import axios from "axios";
import { useEffect, useState } from "react";


const UseNumber = () => {
    const [number,setNumber]=useState(0)

    useEffect(()=>{
        axios.get()
        .then(res =>{
            setNumber(res.data)
        })

    },[])

    return (
        <div>
            
        </div>
    );
};

export default UseNumber;