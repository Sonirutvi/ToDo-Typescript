import React, { useState } from "react";
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, add, remove } from "./counterSlice";


export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const [answer, setAnswer] = useState(0)
    const [showValue, setShowValue] = useState("0")
    const [removeValue, setRemoveValue] = useState(0)

    const handleClick = (event:any) => {
        setShowValue(showValue.concat(event.target.value))
    }
    const handleClear = () => {
        setShowValue("0")
    }
    return (
        <>
            {/* <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <input type="text" onChange={(e) => setValue(Number(e.target.value))} />
                <button aria-label="add value" onClick={() => dispatch(add(value))}>add</button>
                <input type="text" onChange={(e) => setRemoveValue(Number(e.target.value))} />
                <button aria-label="remove value" onClick={() => dispatch(remove(removeValue))}>Delete</button>
            </div> */}
            <br />

            <div className="main_div">
                <div>
                    {answer}
                </div>
                <div className="text_div">
                    <input type="text" id="answer" className="text_div1" value={showValue} onChange={(e) => setShowValue(e.target.value)}/>
                </div>
                <hr />
                <div>
                    <button type="button" className="btn_7" onClick={() => handleClick("7")} >7</button>
                    <button type="button" className="btn_8" onClick={() => handleClick("8")} >8</button>
                    <button type="button" className="btn_9" onClick={() => handleClick("9")} >9</button>
                    <button type="button" className="btn_divide" onClick={() => handleClick("/")} >/</button>
                </div>

                <div>
                    <button type="button" className="btn_4" onClick={() => handleClick("4")} >4</button>
                    <button type="button" className="btn_5" onClick={() => handleClick("5")} >5</button>
                    <button type="button" className="btn_6" onClick={() => handleClick("6")} >6</button>
                    <button type="button" className="btn_mult" onClick={() => handleClick("x")} >x</button>
                </div>

                <div>
                    <button type="button" className="btn_1" onClick={() => handleClick("1")} >1</button>
                    <button type="button" className="btn_2" onClick={() => handleClick("2")} >2</button>
                    <button type="button" className="btn_3" onClick={() => handleClick("3")} >3</button>
                    <button type="button" className="btn_minus" onClick={() => handleClick("-")} >-</button>
                </div>

                <div>
                    <button type="button" className="btn_0" onClick={() => handleClick("0")} >0</button>
                    <button type="button" className="btn_dot" onClick={() => handleClick(".")} >.</button>
                    <button type="button" className="btn_mod" onClick={() => handleClick("%")} >%</button>
                    <button type="button" className="btn_plus" onClick={() => handleClick("+")} >+</button>
                </div>

                <div>
                    <button type="button" className="btn btn-primary" onClick={handleClear}>AC</button>
                    <button type="button" className="btn btn-primary" onClick={() => {}}>=</button>
                </div>
            </div>
        </>
    )
}