import { useState } from "react";

export const RegistrationFormState = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100 flex flex-col items-center justify-center p-6">
            {/* Form Card */}
            <form
                onSubmit={handleFormSubmit}
                className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8"
            >
                <h1 className="text-3xl font-bold text-center text-indigo-600">
                    Sign Up
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Please fill in this form to create an account.
                </p>

                {/* First Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700 mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700 mb-2">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                        value={user.email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Phone Number */}
                <div className="mb-6">
                    <label className="block font-medium text-gray-700 mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="9876543211"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <p className="text-sm text-gray-500 mb-6">
                    By creating an account, you agree to our{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        Terms & Privacy
                    </a>
                    .
                </p>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                >
                    Sign Up
                </button>
            </form>

            {/* Summary Card */}
            <section className="mt-8 w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <h2 className="text-xl font-bold text-indigo-600 mb-3 text-center">
                    User Summary
                </h2>

                <p className="text-gray-700 leading-7">
                    👋 Hello, my name is{" "}
                    <span className="font-semibold text-indigo-600">
                        {user.firstName || "First"} {user.lastName || "Last"}
                    </span>
                    .
                </p>

                <p className="text-gray-700 mt-2">
                    📧 Email:{" "}
                    <span className="font-semibold text-indigo-600">
                        {user.email || "example@email.com"}
                    </span>
                </p>

                <p className="text-gray-700 mt-2">
                    📱 Phone:{" "}
                    <span className="font-semibold text-indigo-600">
                        {user.phoneNumber || "9876543210"}
                    </span>
                </p>
            </section>
        </div>
    );
};