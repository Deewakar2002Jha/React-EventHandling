import React from 'react'

const WelcomeUser = (props) => {
    const handlegreeting = () => {
        console.log("Hey user, thanks for greeting!");
    };

    return (
        <>
            <div className="flex items-center justify-center gap-6 min-h-screen">
                <button
                    className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    onClick={props.onClick}
                >
                    Click Me
                </button>

                <button
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    onMouseEnter={props.onMouseEnter}
                >
                    Hover Me
                </button>

                <button
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
                    onClick={handlegreeting}
                >
                    Greeting Me
                </button>
            </div>
        </>
    );
};

export default WelcomeUser