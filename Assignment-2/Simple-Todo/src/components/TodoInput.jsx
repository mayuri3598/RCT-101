import "./todo.css"


import { useState } from "react";

export const TodoInput = ({ getData }) => {
    const [ todo, setTodo ] = useState("");
    const handleinput = (e) => {
        setTodo(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className="InputDiv">
            <input type="text" onChange={ handleinput } name="ItemName" placeholder="Enter Todo" />
            <button onClick={ () => { getData(todo); } } >Add</button>
        </div>
    );
};