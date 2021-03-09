import React, { useState } from 'react';
import List from './List';

const NewElement = () => {

    const [element, setElement] = useState('');

    const [list1, setList1] = useState(['Make the bed', 'Eat', 'Walk the dog']);

    const InputElement = (e) => {
        setElement(e.target.value);
    }

    const addElement = (e) => {
        e.preventDefault();
        setList1(list1.concat(element));
        setElement('');
        console.log(list1);
    }

    return (
        <>
            <form className="tolist" onSubmit={addElement} >
                <input
                    type="text"
                    className="new-tolist"
                    placeholder="What needs to be done?"
                    value={element}
                    onChange={InputElement}
                />
                <List list1={list1} setList1={setList1}/>
            </form>
            
        </>
    );
}

export default NewElement