import React from 'react'
import { useEffect, useState } from "react";

const UseEffectWithCount = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect called");
    }, []);
    return (
        <div>
            <h1>USEEFFECT HOOK IN REACT</h1>
            <p>Count : {count}</p>
            <button onClick={() => { setCount(count + 1) }}>Click me</button>
        </div>
    )
}

export default UseEffectWithCount;