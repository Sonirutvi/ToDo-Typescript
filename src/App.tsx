import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './Todo';

function App() {

  const [inputList, setInputList] = useState(" ")
  const [items, setItems] = useState<string[]>([]);
  const itemEvent = (event: any) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  };

  const deleteItems = (id:any) => {
    console.log("deleted")

    setItems((oldItems) => {
      return oldItems.filter((arrElm, index)=>{
          return index !== id;
      });
    });
  }
  return (

    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />

        <input type="text" placeholder="add items"
          value={inputList}
          onChange={itemEvent} />
        <button type="button" onClick={listOfItems}>Add</button>

        <ol>
          {items.map((itemsval, index) => {
            return <ToDoList
              key={index}
              id={index}
              text={itemsval}
              onSelect={deleteItems}
            />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
