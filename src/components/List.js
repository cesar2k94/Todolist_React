import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const List = ({ list1, setList1 }) => {
    const DeleteElement=(delList)=>{
        setList1(list1.filter(list2=>list2!==delList));
    }
    return (
        <ul className="list">
            {list1.map((list) =>
                <li className="element">
                    <div className="text-element">
                        {list}
                    </div>
                    <FontAwesomeIcon
                        icon={faTimes}
                        className="delete-element"
                        onClick={()=>DeleteElement(list)}
                    />
                </li>
            )}
        </ul>
    );
}

export default List;