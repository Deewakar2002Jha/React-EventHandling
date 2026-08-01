import { useState } from "react";

export const ContactForm = () => {
    const [contacts, setContacts] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setContacts((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(contacts);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 via-blue-100 to-indigo-100 px-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
                    Contact Us
                </h1>

                <p className="text-center text-gray-500 mb-6">
                    We'd love to hear from you. Fill out the form below.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                    {/* Username */}
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            required
                            autoComplete="off"
                            value={contacts.username}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            autoComplete="off"
                            value={contacts.email}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Message
                        </label>

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write your message..."
                            required
                            value={contacts.message}
                            onChange={handleInputChange}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>

                {/* Live Preview */}
                <div className="mt-8 bg-gray-100 rounded-xl p-5">
                    <h2 className="text-lg font-semibold text-indigo-600 mb-3">
                        Live Preview
                    </h2>

                    <p className="text-gray-700">
                        <strong>Username:</strong>{" "}
                        <span className="text-indigo-600">
                            {contacts.username || "Not entered"}
                        </span>
                    </p>

                    <p className="text-gray-700 mt-2">
                        <strong>Email:</strong>{" "}
                        <span className="text-indigo-600">
                            {contacts.email || "Not entered"}
                        </span>
                    </p>

                    <p className="text-gray-700 mt-2">
                        <strong>Message:</strong>
                    </p>

                    <div className="mt-2 rounded-lg bg-white border p-3 text-gray-700 min-h-[100px]">
                        {contacts.message || "Your message will appear here..."}
                    </div>
                </div>
            </div>
        </div>
    );
};