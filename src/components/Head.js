import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import useSearchSuggestions from "../hooks/useSearchSuggestions";
import ThemeToggle from "./ThemeToggle"; // 👈 Import the animated toggle
import black_hamburger from "../assets/black_hamburger-menu.png"
import white_hamburger from "../assets/white-hamburger-menu.png"
import black_youtube from "../assets/Black_YouTube_Logo.svg"
import red_youtube from "../assets/red_Youtube.jpg"
import white_youtube from "../assets/WhiteYouTube.webp"
import blackUser from "../assets/blackUser.png"
import whiteUser from "../assets/whiteUser.png"
import black_mic from "../assets/black-microphone.png"
import white_mic from "../assets/white-microphone.png"
import black_magnifyGlass from "../assets/magnifying-glass.png"
import white_magnifyGlass from "../assets/white-magnifying-glass.png"


const Head = () => {
    const dispatch = useDispatch();

    // 🔥 Using custom hook
    const {
        searchQuery,
        setSearchQuery,
        suggestions,
        showSuggestions,
        setShowSuggestions,
    } = useSearchSuggestions();

    const darktheme = useSelector((store) => store.app.darktheme);

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div
            className={`grid grid-flow-col p-3 shadow-md sticky top-0 justify-between z-50 items-center
            ${darktheme ? "bg-[#181818]" : "bg-white"}`}
        >
            {/* Left - Menu & Logo */}
            <div className="flex items-center col-span-2 ms-3">
                <img
                    onClick={toggleMenuHandler}
                    className="h-6 cursor-pointer ps-1 hover:scale-110 transition-transform"
                    src={darktheme ? white_hamburger : black_hamburger}
                    alt="menu"
                />
                <img
                    className="h-6 ml-4 cursor-pointer"
                    src={darktheme ? red_youtube : black_youtube}
                    alt="youtube-logo"
                />
            </div>

            {/* Center - Search Bar */}
            <div className="relative flex justify-center items-center gap-2 col-span-8">
                <div className="flex w-4/5 max-w-2xl">
                    <input
                        className={`w-full border rounded-l-full px-4 py-2 focus:outline-none 
                            ${darktheme
                                ? "bg-[#121212] text-white border-gray-600 focus:border-blue-500"
                                : "bg-white text-black border-gray-300 focus:border-blue-500"
                            }`}
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className={`px-5 py-2 border rounded-r-full
                            ${darktheme
                                ? "bg-[#2c2c2c] border-gray-600 hover:bg-[#3a3a3a]"
                                : "bg-gray-100 border-gray-300 hover:bg-gray-200"
                            }`}
                    >
                        <img className="h-6" src={darktheme ? white_magnifyGlass : black_magnifyGlass} alt="search" />
                    </button>
                </div>
                <div>
                    <img
                        className="h-6 cursor-pointer"
                        src={darktheme ? white_mic : black_mic} alt="microphone" />
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                    <div
                        className={`absolute top-12 w-4/5 max-w-2xl shadow-lg rounded-lg border z-10
                            ${darktheme
                                ? "bg-[#1f1f1f] border-gray-700 text-white"
                                : "bg-white border-gray-200 text-black"
                            }`}
                    >
                        <ul>
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className={`px-4 py-2 flex items-center gap-2 cursor-pointer 
                                        ${darktheme
                                            ? "hover:bg-[#333]"
                                            : "hover:bg-gray-100"
                                        }`}
                                    onMouseDown={() => setSearchQuery(item)}
                                >
                                    🔍 <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right - Theme Toggle + User */}
            <div className="flex items-center justify-end gap-4 col-span-2 pe-4">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* User Icon */}
                <img
                    className="h-9 cursor-pointer hover:scale-110 transition-transform"
                    src={darktheme ? whiteUser : blackUser}
                    alt="user-profile"
                />
            </div>
        </div>
    );
};

export default Head;
