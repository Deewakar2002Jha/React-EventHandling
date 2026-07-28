import React from 'react'
import { useState } from 'react'

const CountStateButton = () => {

    const [Count, setCount] = useState(0);
    const handleCounterButton = () => {
        setCount(Count + 1);
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                    <h1 className="text-5xl font-bold text-blue-600 mb-6">
                        {Count}
                    </h1>

                    <button
                        onClick={handleCounterButton}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Button
                    </button>
                </div>
            </div>
        </>
    )
}

export default CountStateButton