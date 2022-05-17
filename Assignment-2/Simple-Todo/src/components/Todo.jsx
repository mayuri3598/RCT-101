import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
    const [ todosList, setTodosList ] = useState([
        {
            title: "learn React",
            id : 'rh',
            status : false
        },
    ]);
    const getData = (todo) => {
        const payload = {
            title: todo,
            status: false,
            id: nanoid(2),
        };
        setTodosList([ ...todosList, payload ]);
    };

    return (
        <div className="TodoDisplay">
            <TodoInput getData={ getData } />
            { todosList.map((e, i) => (
                <>
                    <TodoItem index={ i } todo={ e }></TodoItem>
                </>
            )) }
        </div>
    );
};
