import { useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${dark ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
        >
            <h1>
                {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </h1>

            <button
                onClick={() => setDark(!dark)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${dark
                        ? "bg-yellow-400 text-black hover:bg-yellow-300"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
            >
                Toggle Theme
            </button>
        </div>
    );
}