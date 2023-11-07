/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { FiEdit } from 'react-icons/fi';
import { HiEye } from 'react-icons/hi';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Login/Firebase/AuthProvider';

import Swal from 'sweetalert2';


const AllAssignmentCard = ({ AllCards,myCartData,setMyCartData }) => {
    const { _id, Title, AssignmentDifficulty, Marks, Description, Date, ImageURL } = AllCards

    const Dist = Description.slice("", 90)

    const { user } = useContext(AuthContext)
    const Navigate = useNavigate()

    const btn = () => {
        if (!user) {
            Swal.fire({
                title: 'You Are Not Sign in!',
                text: "Signin & continue..",
                icon: 'warning',

                confirmButtonColor: '#3085d6',

                confirmButtonText: 'Sign in'
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate("/signin")
                }
            })
        }
    }




    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addassignment/${_id}`,{
                    method :"DELETE"
                }
                
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                                
                            )
                            const remining = myCartData.filter(cart => cart._id !== _id )
                            setMyCartData(remining)
                            
                            
                            
                        }
                       
                        
                        
                    })
                    
            }
        })

    }








    return (
        <div className="w-96 shadow-xl rounded-xl ">
            <div className="mb-10 w-full">
                <div className="mb-8 overflow-hidden rounded">
                    <img src={ImageURL} alt="" className="w-full h-72" />
                </div>
                <div className="px-3">
                    <div className=" flex justify-between">
                        {Date && (
                            <span className="mb-5 inline-block rounded bg-blue-400 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                Date: {Date}
                            </span>
                        )}
                        {AssignmentDifficulty && (
                            <span className="mb-5 inline-block rounded bg-orange-400 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                Difficulty: {AssignmentDifficulty}
                            </span>
                        )}
                        {Marks && (
                            <span className="mb-5 inline-block rounded bg-violet-400 px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                                Marks: {Marks}
                            </span>
                        )}
                    </div>
                    <h3>
                        <a
                            href="/#"
                            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-dark sm:text-2xl lg:text-xl xl:text-2xl"
                        >
                            {Title}
                        </a>
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                        {Dist}
                    </p>

                    <div className="flex justify-end items-end mt-5">
                        <div className="join join-vertical lg:join-horizontal">





                            {
                                user ? <>
                                    <Link to={`/update/${_id}`}>
                                        <button className="btn  hover:bg-blue-400 hover:-translate-x-1 bg-blue-400"><FiEdit className='text-2xl text-white '></FiEdit></button>
                                    </Link>
                                </> :
                                    <button onClick={btn} className="btn  hover:bg-blue-400 hover:translate-x-1 bg-blue-400"><FiEdit className='text-2xl text-white '></FiEdit></button>

                            }

                            {
                                user ? <>
                                    <Link>
                                        <button onClick={()=>handleDelete(_id)} className="btn  hover:bg-blue-400  bg-blue-400"><AiOutlineDelete className='text-2xl text-white '></AiOutlineDelete></button>
                                    </Link>
                                </> :
                                    <button onClick={btn} className="btn  hover:bg-blue-400  bg-blue-400"><AiOutlineDelete className='text-2xl text-white '></AiOutlineDelete></button>

                            }




                            {
                                user ? <>
                                    <Link to={`/details/${_id}`}>
                                        <button  className="btn  hover:bg-blue-400 hover:translate-x-1 bg-blue-400"><HiEye className='text-2xl text-white '></HiEye></button>
                                    </Link>
                                </> :
                                    <button onClick={btn} className="btn  hover:bg-blue-400 hover:translate-x-1 bg-blue-400"><HiEye className='text-2xl text-white '></HiEye></button>

                            }

                        </div>
                    </div>






                </div>
            </div>
        </div>
    );
};

export default AllAssignmentCard;

