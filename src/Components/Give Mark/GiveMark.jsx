/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';






const GiveMark = () => {

    const Navigate = useNavigate()

    const Data = useLoaderData()

    console.log(Data.Status);

    const { _id, Title, AssignmentDifficulty, Marks, Description, Date, email, pdfLink, ImageURL, QuickNote } = Data
    const Status = "completed"



    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target

        const Feedback = form.Feedback.value
        const Mark = form.Mark.value

        const products = { Title, Feedback, AssignmentDifficulty, Marks, Status, Description, Mark, Date, email, pdfLink, ImageURL, QuickNote }
        console.log(products);



        fetch(`http://localhost:5000/submit/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'

                    })

                    Navigate('/')



                    e.target.reset()

                }
            })


    }









    return (
        <div className='mt-16'>

            <div className="card flex justify-between lg:card-side bg-base-100 shadow-xl">
                <div className='flex-1'><figure><img className='' src={ImageURL} alt="Album" /></figure></div>
                <div className='flex-1'>
                    <div className="card-body">
                        <h2 className="text-2xl font-semibold mb-3 text-center">Title: {Title}</h2>

                        <div className="flex flex-col justify-center ">
                            <div className=' justify-center'>
                                <h1 className="text-3xl text-center font-semibold">Click here for check pdf</h1>

                                <div className='flex justify-center '>
                                    <button onClick={() => document.getElementById('my_modal_2').showModal()} className="flex mt-5 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
                                         PDF
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>



                            {/* Open the modal using document.getElementById('ID').showModal() method */}

                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box w-screen h-screen">
                                    <iframe src={pdfLink} className='w-full h-full rounded-lg' frameborder="0"></iframe>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>

                            <div className=' mx-auto'>
                                <form onSubmit={handleSubmit} className="p-5 rounded-xl     ">

                                    <h1 className='text-2xl'>Main Mark: {Marks}</h1>




                                    <div className="lg: mx-auto gap-9 ">
                                        <div className="">


                                            <label className="label">
                                                <span className="text-lg">Give Mark</span>
                                            </label>


                                            <input name="Mark" type="text" placeholder="Enter Mark" className="input lg:w-[300px] input-bordered" required />



                                            <div className="">
                                                <label className="label">
                                                    <span className="text-lg">Feedback</span>
                                                </label>

                                                <textarea name='Feedback' className="textarea textarea-bordered lg:w-[300px]" placeholder="Enter Feedback" required></textarea>

                                                <div className="form-control lg:w-[300px] mt-6">
                                                    <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Submit</button>
                                                </div>

                                            </div>
                                        </div>


                                    </div>

                                </form>
                            </div>




                            {/* <iframe src="
                https://publuu.com/flip-book/291300/679722" frameborder="0"></iframe> */}












                        </div>
                    </div>
                </div>
            </div>








        </div >
    );
};

export default GiveMark;