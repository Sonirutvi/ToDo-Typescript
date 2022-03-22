import React, { useState } from "react";

function List() {

    const [inputData, setInputData] = useState<string | undefined>('');
    const [items, setItems] = useState<string[]>([]);
    const [toggleSubmit, setToffleSubmit] = useState<boolean>(true);
    const [isEditItem, setIsEditItem] = useState<number | undefined>();
    const [isEdited, setIsEdited] = useState<boolean>(false);

    //add items

    const addItem = () => {
        setIsEdited(false)
        if (!inputData) {
            alert('please fill the data');
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem, ind) => {
                    if (ind === isEditItem) {
                        return inputData
                    }
                    return elem
                })
            )
        }
        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData.name]);
            setInputData('')
        }
        setInputData("")
    }

    //delete items

    const deleteItem = (id: any) => {
        console.log('')
        const updatedItems = items.filter((elem, ind) => {
            return ind !== id;
        });

        setItems(updatedItems)
    }
    console.log(items);

    // Edit items

    const editItem = (index: number) => {
        setIsEdited(true)
        let newEditItem = items.find((elem, ind) => {
            return index === ind;
        });
        setToffleSubmit(false);
        setInputData(newEditItem)
        setIsEditItem(index);
    }

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <figcaption>Add Your List Here</figcaption>

                    <div className="addItems">
                        <input className="text" type="text" placeholder=" Add items ..." value={inputData}
                            onChange={(e) => setInputData(e.target.value)} /><br /><br />
                        {
                            isEdited ? <button className="btn" type="button" onClick={addItem}>UPDATE</button> :
                                <button className="btn" type="button" onClick={addItem}>ADD</button>
                        }

                    </div>
                </div>
            </div>

            <br />

           {items.length ? <div className="second_div">
                <div className="childd_div">
                    <figcaption>ToDo List</figcaption>
                    <div className="showItems">
                        <div className="eachItems">
                            <ol className="ol">
                                {items.map((elem, index) => {
                                    return (
                                        <li className="li">
                                            <div className="li-list">
                                            <h3>{elem}</h3>
                                            <button className="btn list-btn" type="button" onClick={() => editItem(index)}>EDIT</button>
                                            <button className="btn list-btn" type="button" onClick={() => deleteItem(index)}>DELETE</button>
                                            </div>
                                        </li>
                                    )
                                })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>: <></>}
        </>
    )
}

export default List