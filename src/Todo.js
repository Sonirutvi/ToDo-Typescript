import React from "react";

const ToDoList = (props) => {

    const deleteItems = () => {
        console.log('deleted')
    }
    return (
        <>
        <div className="todo_style" >
        <button type="button" onClick={()=>{props.onSelect(props.id)}}>Delete</button> <li>{props.text}</li>

            </div>
        </>
    );
};

export default ToDoList