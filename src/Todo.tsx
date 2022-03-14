import React from "react";

const ToDoList = (props: { id: number, text: string, onDelete: (arg0: number) => void, onEdit: (arg0: number) => void }) => {

    return (
        <>
            <div className="todo_style" >
                <li>{props.text}</li>
                <button type="button" onClick={() => { props.onDelete(props.id) }}>Delete</button>
                <button type="button" onClick={() => { props.onEdit(props.id) }}>Edit</button>
            </div>
        </>
    );
};

export default ToDoList