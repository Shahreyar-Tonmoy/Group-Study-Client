/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Login/Firebase/AuthProvider';
import MyAssignmentCard from './MyAssignmentCard';
import { useLoaderData } from 'react-router-dom';

const MyAssignment = () => {
    // const data =useLoaderData()

    const { user } = useContext(AuthContext)
    const email = user?.email

    // const filter =data.filter(e => e.email.includes(email) )
    // console.log(filter);



    const [myAssignment, setMyAssignment] = useState([])

    const url = `http://localhost:5000/submitemail?email=${email}`
    console.log(url);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyAssignment(data)


            )


    }, [])
    




    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                        <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Main Marks</th>
                            <th>Got Mark</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th></th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>

                    {/* {
                            filter?.map(data => <MyAssignmentCard key={data._id} AllCards={data} ></MyAssignmentCard>)
                        } */}


                    {
                            myAssignment?.map(data => <MyAssignmentCard key={data._id} AllCards={data} ></MyAssignmentCard>)
                        }





                    </tbody>


                </table>
            </div>



        </div>
    );
};

export default MyAssignment;