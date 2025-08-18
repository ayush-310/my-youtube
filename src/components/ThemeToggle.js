// src/components/ThemeToggle.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme } from "../utils/appSlice"; // 👈 make sure this action exists

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darktheme = useSelector((store) => store.app.darktheme);

    return (
        <button
            onClick={() => dispatch(toggleDarkTheme())}
            className={`relative w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300
        ${darktheme ? "bg-gray-700" : "bg-gray-300"}`}
        >
            {/* Circle Knob */}
            <div
                className={`w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
                ${darktheme ? "translate-x-6 bg-yellow-400" : "translate-x-0 ps-0 bg-blue-600"}`}
            />
        </button>
    );
};

export default ThemeToggle;
