import React, { useState } from "react";

function List() {

    const [inputData, setInputData] = useState<string>('');
    const [items, setItems] = useState<string[]>([]);

    //add items

    const addItem = () => {
        if (!inputData) {

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData.name]);
            setInputData('')
        }
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
    
    const editItem = (index: number) => {
        let newEditItem = items.find((elem)=>{
            return index === index
        })
        console.log(newEditItem);
    }

    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    <figcaption>Add your list here</figcaption>
                    <div className="addItems">
                        <input type="text" placeholder="add items" value={inputData}
                            onChange={(e) => setInputData(e.target.value)} />
                        <button type="button" onClick={addItem}>Add</button>
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