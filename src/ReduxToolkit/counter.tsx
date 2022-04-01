import React, { useState } from "react";
import { RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, add, remove , calculate, CalcAns} from "./counterSlice";


export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const answer = useSelector((state: RootState)=> state.counter.CalcAns)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    // const [answer, setAnswer] = useState(0)
    const [showValue, setShowValue] = useState("")
    const [removeValue, setRemoveValue] = useState(0)

    const handleClick = (e: any) => {
        setShowValue(showValue.concat(e.target.value))
        dispatch(calculate(showValue.concat(e.target.value)))
    }
    const handleClear = () => {
        setShowValue("0")
    }
    const calculatee = () => {
        setShowValue(eval(showValue).toString())
        dispatch(CalcAns())
    }
    return (
        <>
            <div>
                <button aria-label="Increment value" onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrement</button>
                <input type="text" onChange={(e) => setValue(Number(e.target.value))} />
                <button aria-label="add value" onClick={() => dispatch(add(value))}>add</button>
                <input type="text" onChange={(e) => setRemoveValue(Number(e.target.value))} />
                <button aria-label="remove value" onClick={() => dispatch(remove(removeValue))}>Delete</button>
            </div>
            <br />

            {/* <div className="main_div">
                <div>
                    {answer}
                </div>
                <div className="text_div">
                    <input type="text" placeholder="0" className="text_div1" value={showValue} onChange={handleClick} />
                </div>
                <hr />
                <div>
                    <button type="button" className="btn_7" value="7" onClick={handleClick} >7</button>
                    <button type="button" className="btn_8" value="8" onClick={handleClick} >8</button>
                    <button type="button" className="btn_9" value="9" onClick={handleClick} >9</button>
                    <button type="button" className="btn_divide" value="/" onClick={handleClick} >/</button>
                </div>

                <div>
                    <button type="button" className="btn_4" value="4" onClick={handleClick} >4</button>
                    <button type="button" className="btn_5" value="5" onClick={handleClick} >5</button>
                    <button type="button" className="btn_6" value="6" onClick={handleClick} >6</button>
                    <button type="button" className="btn_mult" value="*" onClick={handleClick} >x</button>
                </div>

                <div>
                    <button type="button" className="btn_1" value="1" onClick={handleClick} >1</button>
                    <button type="button" className="btn_2" value="2" onClick={handleClick} >2</button>
                    <button type="button" className="btn_3" value="3" onClick={handleClick} >3</button>
                    <button type="button" className="btn_minus" value="-" onClick={handleClick} >-</button>
                </div>

                <div>
                    <button type="button" className="btn_0" value="0" onClick={handleClick} >0</button>
                    <button type="button" className="btn_dot" value="." onClick={handleClick} >.</button>
                    <button type="button" className="btn_mod" value="%" onClick={handleClick} >%</button>
                    <button type="button" className="btn_plus" value="+" onClick={handleClick} >+</button>
                </div>

                <div>
                    <button type="button" className="btn btn-primary" onClick={handleClear}>AC</button>
                    <button type="button" className="btn btn-primary" onClick={calculatee}>=</button>
                </div>
            </div> */}
        </>
    )
}