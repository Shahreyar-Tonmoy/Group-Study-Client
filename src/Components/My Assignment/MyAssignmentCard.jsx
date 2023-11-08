/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const MyAssignmentCard = ({ AllCards }) => {
  const { _id, Title, AssignmentDifficulty,Feedback, Marks, Description, Mark, Date, email, pdfLink, ImageURL, QuickNote, Status } = AllCards







  return (
    <tr>
      <th></th>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={ImageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>

        </div>
      </td>
      <th>
        {Title}

      </th>
      <th>{Date}</th>
      <th>{AssignmentDifficulty}</th>
      <th>
        {Marks}
      </th>
      <th>
        {Mark}
      </th>
      {
        Status === "pending" ? <><th className="text-orange-500">
        {Status}
      </th></> : <th className="text-green-500">
        {Status}
      </th>
      }
      <th>
        <button onClick={() => document.getElementById('my_modal_2').showModal()} className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold  text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" data-ripple-light="true">
          Feedback
        </button>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Feedback</h3>
            <p className="py-4">{Feedback}</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>











      </th>
    </tr>
  );
};

export default MyAssignmentCard;