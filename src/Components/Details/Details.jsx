/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Login/Firebase/AuthProvider";
import Swal from "sweetalert2";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';



const Details = () => {
    const Detail = useLoaderData()
    const { Title, AssignmentDifficulty, Marks, Description, Date, ImageURL } = Detail

    const { user } = useContext(AuthContext)
    const email = user?.email
    const name = user?.displayName
    const Status = "pending"

    // modal

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

    const Navigate =useNavigate()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target

        const QuickNote = form.QuickNote.value
        const pdfLink = form.pdfLink.value

        const products = {Title, AssignmentDifficulty,name, Marks, Status, Description, Date, email, pdfLink, ImageURL, QuickNote }
        console.log(products);



        fetch('http://localhost:5000/submit', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })
                    setIsOpen(false);
                    Navigate('/submittedAssignment')

                    e.target.reset()

                }
            })


    }


    return (
        <div>

            <div className="lg:flex lg:justify-between bg-base-200 shadow-2xl rounded-xl">
                <img className="h-[90vh] rounded-l-xl lg:w-2/3" src={ImageURL} alt="" />
                <div className=" mx-1 lg:mr-10">
                    <h1 className="text-5xl mt-10 text-center lg:text-end font-semibold">{Title}</h1>
                    <p className="text-center lg:text-end pl-20 mt-10">{Description}</p>
                    <div className="flex justify-end gap-3 mt-16">
                        <span className="mb-5 inline-block rounded bg-gradient-to-tr from-[#53BCC4] to-[#D2886F] px-4 py-1 text-center text-md font-semibold leading-loose text-white">
                            Date: {Date}
                        </span>
                        <span className="mb-5 inline-block rounded bg-gradient-to-tr from-[#F1E419] to-[#D3B402] px-4 py-1 text-center text-md font-semibold leading-loose text-white">
                            Marks: {Marks}
                        </span>
                        <span className="mb-5 inline-block rounded bg-gradient-to-tr from-blue-600 to-pink-400 px-4 py-1 text-center text-md font-semibold leading-loose text-white">
                            Difficulty: {AssignmentDifficulty}
                        </span>
                    </div>

                    <div className="flex justify-center lg:justify-end mt-3 lg:mt-10">
                        <button onClick={openModal} className="flex mb-5 lg:mb-0 select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-[#1D4287] to-[#068ABE] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm shadow-[#068ABE] transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-light="true">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                            </svg>
                            Take assignment
                        </button>
                    </div>


                    {/* modal */}


                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        className={" lg:mt-52  bg-base-300 rounded-xl  lg:mx-[450px] lg:right-auto bottom-auto "}





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


                                        <input name="pdfLink" type="text" placeholder="Enter pdf link" className="input lg:w-[500px] input-bordered" required />



                                        <div className="">
                                           <label className="label">
                                                <span className="text-lg">Quick Note</span>
                                            </label>

                                            <textarea name='QuickNote' className="textarea textarea-bordered lg:w-[500px]" placeholder="Enter Quick Note"></textarea>

                                            <div className="form-control lg:w-[500px] mt-6">
                                                <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Submit Assignment</button>
                                            </div>

                                        </div>
                                    </div>


                                </div>

                            </form>
                        </div>




                    </Modal>










                </div>
            </div>

        </div>
    );
};

export default Details;


