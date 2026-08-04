import { useEffect } from "react";

const UseEffectExcampleWithCss = () => {
    useEffect(() => {
        console.log("useEffect called");
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="rounded-xl bg-white p-8 shadow-lg border border-gray-200 text-center">
                <h1 className="text-3xl font-bold text-blue-600 mb-4">
                    React useEffect
                </h1>
                <p className="text-gray-600">
                    Open the browser console to see the <code>useEffect</code> execution.
                </p>
            </div>
        </div>
    );
};

export default UseEffectExcampleWithCss;