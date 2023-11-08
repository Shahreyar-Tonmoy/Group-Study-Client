/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
import Swal from "sweetalert2";
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';








const SubmittedAssignmentCard = ({ AllCards }) => {
    const { _id, Title, AssignmentDifficulty, Marks, name, Description, Date, email, pdfLink, ImageURL, QuickNote, Status } = AllCards

    const Navigate = useNavigate()


    const { user } = useContext(AuthContext)
    const currentUser = user.email






    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // refernces are now sync'd and can be accessed.


    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = e => {

        e.preventDefault()
        const form = e.target

        const QuickNote = form.QuickNote.value
        const pdfLink = form.pdfLink.value

        const products = { Title, AssignmentDifficulty, name, Marks, Status, Description, Date, email, pdfLink, ImageURL, QuickNote }
        console.log(products);


        fetch(` http://localhost:5000/submit/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Submitted Assignment Updated',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    Navigate('/MyAssignment')




                }
            })


    }










    return (
        <tr>
            <td></td>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={ImageURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>

                </div>
            </td>
            <td>
                {name}

            </td>
            <td>
                {Title}

            </td>

            <td>{Date}</td>
            <td>{AssignmentDifficulty}</td>
            <td>{Marks}</td>
            <td>{Status}</td>
            <th>
                {
                    email == currentUser ? <>

                        <button disabled="disabled" className="middle none center  rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                            Give Mark
                        </button>

                    </> : <>

                        <Link to={`/givemark/${_id}`}>
                            <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                                Give Mark
                            </button>
                        </Link>

                    </>
                }

            </th>
            <th>
                {
                    email !== currentUser ? <>
                    <button disabled="disabled" onClick={openModal} className="flex mb-5 lg:mb-0 select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-[#1D4287] to-[#068ABE] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm shadow-[#068ABE] transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    Update
                </button>
                    </> : <>
                    <button  onClick={openModal} className="flex mb-5 lg:mb-0 select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-[#1D4287] to-[#068ABE] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm shadow-[#068ABE] transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    Update
                </button>
                    </>
                }

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    className={"  bg-base-300 rounded-xl  lg:mx-[450px] lg:right-auto bottom-auto "}





                    // style={customStyles}
                    contentLabel="Example Modal"
                >


                    <div>

                        <form onSubmit={handleSubmit} className="card-body rounded-xl  shadow-2xl   ">

                            <div className='flex justify-end'>
                                <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost  ">✕</button>
                            </div>



                            <div className="lg: mx-auto gap-9 ">
                                <div className="">


                                    <label className="label">
                                        <span className="text-lg">PDF Link</span>
                                    </label>


                                    <input name="pdfLink" defaultValue={pdfLink} type="text" placeholder="Enter pdf link" className="input lg:w-[500px] input-bordered" required />



                                    <div className="">
                                        <label className="label">
                                            <span className="text-lg">Quick Note</span>
                                        </label>

                                        <textarea name='QuickNote' defaultValue={QuickNote} className="textarea textarea-bordered lg:w-[500px]" required placeholder="Enter Quick Note"></textarea>

                                        <div className="form-control lg:w-[500px] mt-6">
                                            <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Submit Assignment</button>
                                        </div>

                                    </div>
                                </div>


                            </div>

                        </form>
                    </div>




                </Modal>










            </th>

        </tr>

    );
};

export default SubmittedAssignmentCard;