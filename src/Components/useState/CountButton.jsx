import React from "react";

const CountButton = () => {
    // Local variable initialized to 0.
    // This variable is recreated every time the component renders.
    // It is NOT React state.
    let count = 0;

    // Function that runs when the button is clicked.
    const handleCounterButton = () => {
        // Increase the local variable by 1.
        count++;

        // Print the updated value to the browser console.
        // The console will show: 1, 2, 3, ...
        // because the same event handler closure remembers the variable
        // until the component renders again.
        console.log(count);

        // ❌ The UI will NOT update because React does not know
        // that 'count' has changed.
        // Only state (useState) or props changes trigger a re-render.
    };

    // JSX returned by the component.
    return (
        // Full-screen container
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* White card with shadow and rounded corners */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                {/* Display the current value of count */}
                {/* Since React renders only once, this always shows 0 */}
                <h1 className="text-5xl font-bold text-blue-600 mb-6">
                    {count}
                </h1>

                {/* Button that calls handleCounterButton when clicked */}
                <button
                    onClick={handleCounterButton}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    Button
                </button>
            </div>
        </div>
    );
};

export default CountButton;