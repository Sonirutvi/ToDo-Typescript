import React from "react";

const ToDoList = (props: { id: number, text: string, onSelect: (arg0: number) => void }) => {

    return (
        <>
            <div className="todo_style" >
                <button type="button" onClick={() => { props.onSelect(props.id) }}>Delete</button> <li>{props.text}</li>
            </div>
        </>
    );
};

export default ToDoList