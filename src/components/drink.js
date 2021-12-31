import React from "react";
import {MdDeleteForever} from 'react-icons/md';

function DrinkName({bottleName, onDelete}){
    return(
        <tr>
            <td>{bottleName.name}</td>
            <td>{bottleName.amount}</td>
            <td>{bottleName.unit}</td>
            <td><MdDeleteForever onClick={onDelete(bottleName._id)} /></td>
        </tr>
    )
}

export default DrinkName;