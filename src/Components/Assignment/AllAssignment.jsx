/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import AllAssignmentCard from "./AllAssignmentCard";
import { useEffect, useState } from "react";



const AllAssignment = () => {
    const Assignment = useLoaderData()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            
        },);
    },2000)



    
    return (
        <div>
            {
                Assignment.length > 0 ? <>
                    <div className="mx-auto my-10  max-w-[510px] text-center">
                        <span className="mb-2 block text-2xl font-semibold text-primary">
                            Assignment
                        </span>
                        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-Dark sm:text-4xl md:text-[40px]">
                            See Here All Assignment
                        </h2>

                    </div></>
                    :
                    <><h1><span className="mb-2 block my-10 text-center text-5xl font-semibold text-primary">
                        There Is No Assignment
                    </span></h1></>
            }

            
            {
                loading ? <><div className="flex justify-center items-center"><span className="loading mx-auto loading-dots loading-lg"></span></div></>:<>
                <div className=" max-w-screen-xl px-12 mx-auto gap-5  grid md:grid-cols-2 lg:grid-cols-3">
                {
                    Assignment?.map(data => <AllAssignmentCard key={data._id} AllCards={data} ></AllAssignmentCard>)
                }
            </div>
                </>
            }

        </div>
    );
};

export default AllAssignment;