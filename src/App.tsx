import React from 'react';
import logo from './logo.svg';
// import './App.css';
import ToDoApp from './todoApp';
import List from './list';
import Example from './hooks/effect';
import UseReducer from './hooks/usereduce';
import TextInputWithFocusButton from './hooks/useref';
import LoginControl from './hooks/login';
import MyForm from './hooks/form';
import Calculator from './hooks/calculator';
import Index from './Show forms';
import { Button } from 'react-bootstrap';
import { Counter } from './ReduxToolkit/counter';
import './ReduxToolkit/counter.scss';
import Calc from './ReduxToolkit/exp';
import Todo from './ToDoToolkit/todolist';


function App() {
  return (
    <div className="App">
      {/* <Button onClick={()=>alert("hello")}>Submit</Button> */}
     {/* <ToDoApp/> */}
     {/* <List/> */}
     {/* <Example/> */}
     {/* <UseReducer/> */}
     {/* <TextInputWithFocusButton/> */}
     {/* <LoginControl/> */}
     {/* <MyForm/> */}
     {/* <Calculator/> */}
     {/* <Index/> */}
     {/* <Counter/> */}
     {/* <Calc/> */}
     <Todo/>
    </div>
  );
}

export default App;
