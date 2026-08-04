import { useEffect, useState } from "react";

const UseEffectWithCountwithDependency = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // console.log("Hello useEffect");
        console.log("Count value:", count);
    }, [count]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg text-center">
                <h1 className="mb-6 text-3xl font-bold text-blue-600">
                    useEffect Hook
                </h1>

                <p className="mb-6 text-xl">
                    Count: <span className="font-semibold">{count}</span>
                </p>

                <button
                    onClick={() => setCount(count + 1)}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700 active:scale-95"
                >
                    Increment
                </button>
            </div>
        </div>
    );
};

export default UseEffectWithCountwithDependency;