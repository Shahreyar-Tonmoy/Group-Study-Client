import { useLoaderData } from "react-router-dom";
import SubmittedAssignmentCard from "./SubmittedAssignmentCard";


const SubmittedAssignment = () => {

    const Submit = useLoaderData()
    // const length = (Submit.length);



    return (


        <div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date : MM/DD/YYYY</th>
                            <th>Difficulty</th>
                            <th>Main Marks</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            Submit?.map(data => <SubmittedAssignmentCard key={data._id} AllCards={data} ></SubmittedAssignmentCard>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default SubmittedAssignment;