import React, { useState } from 'react';
import './App.css';
import ToDoList from './Todo';

function ToDoApp() {

  const [inputList, setInputList] = useState<string>("")
  const [editTodo, setEditTodo] = useState<string>("")
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [items, setItems] = useState<string[]>([]);
  const itemEvent = (event: { target: { value: string; }; }) => {
    setInputList(event.target.value)
  };
  const handleEditTodo = (event: { target: { value: string; }; }) => {
    setEditTodo(event.target.value)
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList,]
    });
    setInputList("");
  };
  const editItem = (id: number) => {
    setIsEdit(true)
    setEditTodo(items[id])
    return items[id] = editTodo;
  }

  const deleteItems = (id: number) => {

    setItems((oldItems) => {
      return oldItems.filter((_arrElm, index) => {
        return index !== id;
      });
    });
  }
  console.log(items, "items");

  return (

    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>ToDo List</h1>
        <br />
        {isEdit ?
          <>
            <input type="text" placeholder="add items"
              value={editTodo}
              onChange={handleEditTodo} />
            <button type="button" onClick={listOfItems}>Update</button>
          </>
          : <>        <input type="text" placeholder="add items"
            value={inputList}
            onChange={itemEvent} />
            <button type="button" onClick={listOfItems}>Add</button>
          </>
        }

        <ol>
          {items.map((itemsval, index) => {
            return <ToDoList
              key={index}
              id={index}
              text={itemsval}
              onDelete={deleteItems}
              onEdit={editItem}
            />;
          })}
        </ol>
      </div>
    </div>
  );
}

export default ToDoApp;
