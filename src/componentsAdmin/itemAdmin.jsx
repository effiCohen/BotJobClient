import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addThisIntervewAdmin } from '../featuers/intervewSlice';

function ItemAdmin(props) {
    const myIntervews = useSelector(state => state.intervewSlice.allMyIntervews);
    let nav = useNavigate();
    const dispatch = useDispatch();
    let item = props.item;
    let index = props.index;

    const toQushtions = () => {
        dispatch(addThisIntervewAdmin({ ThisInterviewAdmin:item._id }));
        nav("/admin/interview");
      };

    return (
        <tr
            className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-4 py-2 font-medium">{index + 1}</td>
            <td className="whitespace-nowrap px-4 py-2 font-medium">{item.user_id}</td>
            <td className="whitespace-nowrap px-4 py-2">{item.date_created.substring(10, length-1)}</td>
            <td className="whitespace-nowrap px-4 py-2">{item.job}</td>
            <td className="whitespace-nowrap px-4 py-2">20:35 min</td>
            <td className="whitespace-nowrap px-4 py-2">{item.questions.length} - questions</td>
            {/* <td onClick={toQushtions} className="whitespace-nowrap px-4 py-2">...</td> */}
            <td onClick={toQushtions} className="whitespace-nowrap px-4 py-2">
    <img src="/src/assets/7740825.gif" alt="GIF" style={{ width: '50px', height: '50px' }} />
</td>

</tr>
    )
}

export default ItemAdmin