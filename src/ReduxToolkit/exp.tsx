import React, { useState } from "react";

function Calc() {

    const [result, setResult] = useState("")

    const handleClick = (event: any) => {
        setResult(result.concat(event.target.value))
    }

    return (
        <>
            <div>
                <input type="text" placeholder="0" value={result} onChange={handleClick} />
            </div>
            <div>
                <button type="button" onClick={handleClick} value="1">1</button>
                <button type="button" onClick={handleClick} value="2">2</button>
                <button type="button" onClick={handleClick} value="9">9</button>
            </div>
        </>
    )
}

export default Calc