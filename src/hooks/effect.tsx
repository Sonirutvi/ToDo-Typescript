import React, { useEffect, useState } from "react";

function Example() {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return(
        <>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>Click Me</button>
        </>
    );
}

export default Example