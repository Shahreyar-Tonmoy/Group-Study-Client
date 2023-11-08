/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from "react-router-dom";
import AllAssignmentCard from "./AllAssignmentCard";
import { useEffect, useState } from "react";
import { } from "react";
import { HiArrowSmRight, HiArrowSmLeft } from 'react-icons/hi';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';





const AllAssignment = () => {
    const Assignment = useLoaderData()
    const [myCartData, setMyCartData] = useState(Assignment)





    const [count, setCount] = useState()
    const [itemPerPages, setItemPerPages] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    console.log(count);


    const hendleChange = (e) => {
        const value = parseInt(e.target.value)
        setItemPerPages(value)
        console.log(value);
        console.log(itemPerPages);
    }


    // eslint-disable-next-line no-undef
    const numberOfPages = Math.ceil(count / itemPerPages)
    console.log(numberOfPages);



    const pages = []
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i)
    }

    // const pages = [...Array(numberOfPages).keys()]

    // console.log(pages);

    useEffect(() => {
        fetch(` http://localhost:5000/addassignmentCount`)
            .then(res => res.json())
            .then(data => setCount(data.Count))

    }, [])

    useEffect(() => {
        fetch(` http://localhost:5000/addassignment?page=${currentPage}&size=${itemPerPages}`)
            .then(res => res.json())
            .then(data => setMyCartData(data))

    }, [currentPage, itemPerPages])

    // console.log(count);

    const color = "mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm text-dark shadow-md transition duration-150 ease-in-out cursor-pointer"
    const active = "mx-1 flex h-9 w-9 items-center justify-center rounded-full  p-0 text-sm  shadow-md transition duration-150 bg-pink-500 text-white ease-in-out cursor-pointer"




    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)

        },);
    }, 2000)

    const hendlePlus = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1)
        }

    }
    const hendleminus = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

        const filter3 =myCartData.filter(e => e.AssignmentDifficulty.toLowerCase().includes("Hard".toLowerCase()) )
         const filter1 =myCartData.filter(e => e.AssignmentDifficulty.toLowerCase().includes("Easy".toLowerCase()) )
          const filter2 =myCartData.filter(e => e.AssignmentDifficulty.toLowerCase().includes("Medium".toLowerCase()) )


    




  





    return (
        <div className="mx-auto">
            {
                myCartData.length > 0 ? <>
                    <div className="mx-auto my-10   max-w-[510px] text-center">
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


            <div className="flex justify-center mb-10">
                <Tabs>
                    <TabList>
                        <Tab>All Assignment</Tab>
                        <Tab>Easy </Tab>
                        <Tab>Medium</Tab>
                        <Tab>Hard</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            loading ? <><div className="flex justify-center items-center"><span className="loading mx-auto loading-dots loading-lg"></span></div></> : <>
                                <div className=" max-w-screen-xl  lg:px-12 mx-auto lg:gap-5  grid md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        myCartData?.map(data => <AllAssignmentCard key={data._id} myCartData={myCartData} AllCards={data} setMyCartData={setMyCartData} ></AllAssignmentCard>)
                                    }
                                </div>
                            </>
                        }

                    </TabPanel>
                    <TabPanel>

                    {
                            loading ? <><div className="flex justify-center items-center"><span className="loading mx-auto loading-dots loading-lg"></span></div></> : <>
                                <div className=" max-w-screen-xl  lg:px-12 mx-auto lg:gap-5  grid md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        filter1?.map(data => <AllAssignmentCard key={data._id} myCartData={myCartData} AllCards={data} setMyCartData={setMyCartData} ></AllAssignmentCard>)
                                    }
                                </div>
                            </>
                        }

                   
                        
                    </TabPanel>
                    <TabPanel>
                    {
                            loading ? <><div className="flex justify-center items-center"><span className="loading mx-auto loading-dots loading-lg"></span></div></> : <>
                                <div className=" max-w-screen-xl  lg:px-12 mx-auto lg:gap-5  grid md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        filter2?.map(data => <AllAssignmentCard key={data._id} myCartData={myCartData} AllCards={data} setMyCartData={setMyCartData} ></AllAssignmentCard>)
                                    }
                                </div>
                            </>
                        }

                        
                        
                    </TabPanel>
                    <TabPanel>
                    {
                            loading ? <><div className="flex justify-center items-center"><span className="loading mx-auto loading-dots loading-lg"></span></div></> : <>
                                <div className=" max-w-screen-xl  lg:px-12 mx-auto lg:gap-5  grid md:grid-cols-2 lg:grid-cols-3">
                                    {
                                        filter3?.map(data => <AllAssignmentCard key={data._id} myCartData={myCartData} AllCards={data} setMyCartData={setMyCartData} ></AllAssignmentCard>)
                                    }
                                </div>
                            </>
                        }

                        
                        
                    </TabPanel>
                    
                </Tabs>
            </div>














            <div className="flex  justify-center mt-10">
                <nav>
                    <ul className="flex">
                        <a onClick={hendleminus} className={active}><HiArrowSmLeft /></a>


                        {
                            pages.map(page => <> <li>
                                <div key={page}
                                    onClick={() => setCurrentPage(page)}

                                    className={currentPage === page ? active : color}



                                >
                                    {page}
                                </div>
                            </li></>)
                        }

                        <a onClick={hendlePlus} className={active}><HiArrowSmRight /></a>


                        <div className="relative h-10 w-20 ">
                            <select value={itemPerPages} onChange={hendleChange} className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">

                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </select>
                            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Pages
                            </label>
                        </div>


                    </ul>
                </nav>

            </div>





        </div>
    );
};

export default AllAssignment;