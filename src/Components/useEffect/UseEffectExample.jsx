import React from 'react';
import { useEffect } from "react";

const UseEffectExample = () => {
    useEffect(() => {
        console.log("useEffect called");
    }, []);
    return (
        <div>ReactUseEffect</div>
    )
}

export default UseEffectExample
