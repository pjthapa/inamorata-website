import React from "react";
import { DefaultContext } from "react-icons/lib";
import DrinkName from './drink';

function Createcocktaillist({cocktail, onDelete}) {
    return(
        <div className="drinks table">
            <table id="drinks">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {cocktail.map((liquor, i) => <DrinkName bottleName={liquor} 
                    onDelete = {onDelete}
                    key ={i} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Createcocktaillist;