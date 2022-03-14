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
                    <figcaption>Add your list here</figcaption>
                    <div className="addItems">
                        <input type="text" placeholder="add items" value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        {
                            isEdited ? <button type="button" onClick={addItem}>Update</button> :
                                <button type="button" onClick={addItem}>Add</button>
                        }

                    </div>

                    <div className="showItems">
                        {
                            items.map((elem, index) => {
                                return <div className="eachItems" key={index}>
                                    <h3>{elem}</h3>
                                    <button type="button" onClick={() => editItem(index)}>Edit</button>
                                    <button type="button" onClick={() => deleteItem(index)}>Delete</button>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default List