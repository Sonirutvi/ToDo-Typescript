import React, { useState } from 'react';
import './App.css';
import ToDoList from './Todo';

function ToDoApp() {

  const [inputList, setInputList] = useState<string>(" ")
  const [items, setItems] = useState<string[]>([]);
  const itemEvent = (event: { target: { value: string; }; }) => {
    setInputList(event.target.value)
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  };

  const deleteItems = (id: number) => {
    console.log("deleted")

    setItems((oldItems) => {
      return oldItems.filter((_arrElm, index) => {
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

export default ToDoApp;
