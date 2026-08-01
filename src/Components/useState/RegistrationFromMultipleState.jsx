import { useState } from "react";

export const RegistrationFromMultipleState = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "phone":
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const formData = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };

        console.log(formData);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
            <h1 className="mb-4">This is not the right way to handle data in the form</h1>
            <form
                onSubmit={handleFormSubmit}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
            >
                <h1 className="text-3xl font-bold text-center text-gray-800">
                    Sign Up
                </h1>

                <p className="text-center text-gray-500 mt-2 mb-6">
                    Please fill in this form to create an account.
                </p>

                {/* First Name */}
                <div className="mb-4">
                    <label
                        htmlFor="firstName"
                        className="block mb-2 font-medium text-gray-700"
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        required
                        value={firstName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                    <label
                        htmlFor="lastName"
                        className="block mb-2 font-medium text-gray-700"
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        required
                        value={lastName}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block mb-2 font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        required
                        value={email}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-2 font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        required
                        value={password}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                {/* Phone */}
                <div className="mb-6">
                    <label
                        htmlFor="phone"
                        className="block mb-2 font-medium text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="9876543211"
                        required
                        value={phoneNumber}
                        onChange={handleInputChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>

                <p className="text-sm text-gray-500 mb-6">
                    By creating an account you agree to our{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Terms & Privacy
                    </a>
                </p>

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700"
                >
                    Sign Up
                </button>
            </form>

            {/* Summary Card */}
            <section className="mt-8 w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
                <h2 className="mb-3 text-xl font-semibold text-gray-800">
                    User Summary
                </h2>

                <p className="text-gray-700 leading-7">
                    Hello, my name is{" "}
                    <span className="font-semibold text-blue-600">
                        {firstName} {lastName}
                    </span>
                    .
                    <br />
                    My email address is{" "}
                    <span className="font-semibold text-blue-600">
                        {email}
                    </span>
                    .
                    <br />
                    My phone number is{" "}
                    <span className="font-semibold text-blue-600">
                        {phoneNumber}
                    </span>
                    .
                </p>
            </section>
        </div>
    );
};