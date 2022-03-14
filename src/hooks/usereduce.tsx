import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state : number, action: {type:string}) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {
   // const [count, setCount] = useState(0);
   const [state, dispatch] = useReducer(reducer, initialState); 

    return (
        <>
            <p>{state}</p>
            <div className="btntylePosition">
                <button onClick={() => dispatch({type:"INCREMENT"})}>Inc</button>
                <button onClick={() => dispatch({type:"DECREMENT"})}>Dec</button>
            </div>
        </>
    )
}

export default UseReducer