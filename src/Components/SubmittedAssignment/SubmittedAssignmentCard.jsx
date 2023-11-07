/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";







const SubmittedAssignmentCard = ({ AllCards }) => {
    const {_id, Title, AssignmentDifficulty, Marks, Description, Date, email, pdfLink, ImageURL, QuickNote, Status } = AllCards

   
      



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
                {Title}

            </td>
            <td>{Date}</td>
            <td>{AssignmentDifficulty}</td>
            <td>{Marks}</td>
            <td>{Status}</td>
            <th>
                <Link to={`/givemark/${_id}`}>
                <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
                Give Mark
                </button>
                </Link>

            </th>
            
        </tr>
        
    );
};

export default SubmittedAssignmentCard;