
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";
import { useEffect, useState } from "react";



const SubmittedAssignment = () => {
    // const data = useLoaderData()

    // const filter =data.filter(e => e.Status.includes("pending") )
    // console.log(filter);


    // const length = (Submit.length);

    const [submitAssignment,setSubmitAssignment] = useState([])

    const url = ` http://localhost:5000/submitstatus?Status=pending` 

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSubmitAssignment(data))

    },[])
    

    console.log(submitAssignment);




    return (


        <div>

            

            {
                submitAssignment.length > 0 ?  <>
                
                <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Date : MM/DD/YYYY</th>
                            <th>Difficulty</th>
                            <th>Main Marks</th>
                            <th>Status</th>
                            <th>Give Mark</th>
                            <th>Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {/* {
                            filter?.map(data => <SubmittedAssignmentCard key={data._id} AllCards={data} ></SubmittedAssignmentCard>)
                        } */}

                        {
                            submitAssignment?.map(data => <SubmittedAssignmentCard key={data._id} AllCards={data} ></SubmittedAssignmentCard>)
                        }



                    </tbody>

                </table>
            </div>

                </> :
                <h1 className="text-center text-3xl font-semibold mt-10">There is no pending assignment here</h1>
            }

        </div>
    );
};

export default SubmittedAssignment;