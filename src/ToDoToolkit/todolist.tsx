import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxToolkit/store";
import { add, remove, edit } from "./todoslice"

function Todo() {

    const dispatch = useDispatch()
    const answer = useSelector((state: RootState) => state.todo.value)
    console.log("answer", answer);

    const deletetodo = useSelector((state: RootState) => state.todo.value)
    const [value, setValue] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [removeeValue, setRemoveeValue] = useState("")
    const [index, setIndex] = useState<number>()

    const handleClick = (e: any) => {
        setValue(e.target.value)
    }
    const handleBtnClick = () => {
        dispatch(add(value));
        setValue("")
    }
    const handleEdit = (index: number) => {
        setValue(answer[index])
        setIndex(index)
        setIsEdited(true)
    }
    const handleUpdateClick = () => {
        dispatch(edit({ ind: index, data: value }))
    }

    return (
        <>

            <div>
                <h1>ToDo List</h1>
            </div>
            <div>
                <input type="text" placeholder="Add items..." value={value} onChange={handleClick} />
                {!isEdited ? <button type="button" onClick={handleBtnClick}>
                    Add
                </button> :
                    <button type="button" onClick={handleUpdateClick}>
                        Update
                    </button>}
            </div>
            <ul>
                {answer.map((i: any, index: number) => <li>
                    <h3>{i}</h3>
                    <button type="button" onClick={() => dispatch(remove(index))}>Delete</button>
                    <button type="button" onClick={() => handleEdit(index)}>Edit</button>
                </li>)}
            </ul>
        </>
    )
}

export default Todo