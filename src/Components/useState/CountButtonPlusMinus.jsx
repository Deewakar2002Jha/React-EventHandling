import React, { useState } from "react";

const CountButtonPlusMinus = () => {
    const [count, setCount] = useState(0);
    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-80 rounded-2xl bg-white p-8 shadow-xl text-center">
                <h1 className="mb-6 text-6xl font-bold text-gray-800">{count}</h1>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setCount(count + 1)}
                        className="rounded-lg bg-green-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-600 active:scale-95"
                    >
                        ➕ Plus
                    </button>

                    <button
                        // onClick={() => setCount(count - 1)}
                        onClick={handleMinus}
                        disabled={count === 0}
                        className="rounded-lg bg-red-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-red-600 active:scale-95"
                    >
                        ➖ Minus
                    </button>

                </div>
            </div>
        </div>
    );
};

export default CountButtonPlusMinus;