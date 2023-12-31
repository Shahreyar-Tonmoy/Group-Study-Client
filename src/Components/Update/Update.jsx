
import Swal from 'sweetalert2'



import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { useLoaderData, useNavigate } from 'react-router-dom';


const Update = () => {
    const update = useLoaderData()
    const {_id, Title, AssignmentDifficulty, Marks, Description,ImageURL } = update


    const [startDate, setStartDate] = useState(new Date());

    const Navigate = useNavigate()
    
    

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const Title = form.Title.value
        const AssignmentDifficulty = form.AssignmentDifficulty.value
        const Marks = form.Marks.value
        const Date = form.Date.value
        const Description = form.Description.value



        const ImageURL = form.ImageURL.value
        const products = { Title, AssignmentDifficulty, Marks, Description,Date, ImageURL }
        console.log(products);


        fetch(`https://assignment-11-server-side-one.vercel.app/addassignment/${_id}`, {
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
                        text: 'Assignment Update Succesfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    Navigate("/assinments")
                    e.target.reset()

                }
            })

    }




    return (
        <div className="bg-cover rounded-lg py-10  bg-no-repeat" style={{ backgroundImage: `url(https://i.ibb.co/C86WgKT/undraw-Services-re-hu5n-removebg-preview.png)` }}>
            <div className=' card rounded-xl glass flex-shrink-0 w-full max-w-xl mx-auto '>
                <form onSubmit={handleSubmit} className="card-body rounded-xl  shadow-2xl   ">

                    <div className="lg: mx-auto gap-9 ">
                        <div className="">
                            <label className="label">
                                <span className="text-lg ">Title</span>
                            </label>
                            <input name="Title" defaultValue={Title} type="text" placeholder="Enter Title" className="input input-bordered lg:w-[500px]" required />
                            <label className="label">
                                <span className="text-lg">Assignment Difficulty</span>
                            </label>
                            {/* <input name="brand" type="text" placeholder="Enter Brand Name" className="input input-bordered w-[500px]" required /> */}

                            <select name='AssignmentDifficulty' defaultValue={AssignmentDifficulty}  className="select select-bordered lg:w-[500px] ">
                                <option disabled selected>Assignment Difficulty</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>

                            </select>





                            <label className="label">
                                <span className="text-lg">Marks</span>
                            </label>
                            <input name="Marks" defaultValue={Marks} type="text" placeholder="Enter Type" className="input input-bordered lg:w-[500px]" required />
                            <div className="">
                                {/* <label className="label">
                                <span className="text-lg">Price</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " /> */}

                                <label className="label">
                                    <span className="text-lg">Date</span>
                                </label>

                                <DatePicker name='Date' className="input input-bordered lg:w-[500px]" selected={startDate} onChange={(date) => setStartDate(date)} />

                                <label className="label">
                                    <span className="text-lg">Description</span>
                                </label>

                                <textarea name='Description' defaultValue={Description} className="textarea textarea-bordered lg:w-[500px]" placeholder="Description"></textarea>







                                <label className="label">
                                    <span className="text-lg">Thumbnail</span>
                                </label>


                                <input name="ImageURL" defaultValue={ImageURL} type="text" placeholder="Enter Image URL" className="input lg:w-[500px] input-bordered" required />


                                {/* <input name="photoURL" type="file" className="file-input file-input-bordered lg:w-[500px] file-input-info w-full max-w-xs" /> */}
                                <div className="form-control lg:w-[500px] mt-6">
                                    <button className="btn text-white border-none hover:bg-[#81246A] bg-[#81246A]">Update</button>
                                </div>

                            </div>
                        </div>


                    </div>

                </form>




            </div>
        </div>
    );
};

export default Update;