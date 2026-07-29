import React, { useState } from "react";

const ShowHidePassword = () => {
    const [show, setShow] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-96">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Enter Your Password
                </h1>

                <input
                    type={show ? "text" : "password"}
                    placeholder="Enter your password" autoComplete="off"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />

                <button
                    onClick={() => setShow(!show)}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                >
                    {show ? "Hide Password" : "Show Password"}
                </button>
            </div>
        </div>
    );
};

export default ShowHidePassword;