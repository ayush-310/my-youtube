import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();

    // Debouncing API calls
    // Make an API call after every key press
    // but if the difference between 2 API calls less than 200ms -> DECLINE THE API CALL
    useEffect(() => {
        if (!searchQuery.trim()) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(() => {
            getSearchSuggestion();
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    /** * Key - i
     *  - render the component
     *  - call useEffect();
     *  - start timer => make api call after 200ms
     * 
     * Key - ip
       * - render the component
       *  * - call useEffect();
       *  * - start timer => make api call after 200ms
       *  * Now - setTimeout(200) - make an API call
       *  
    */
    const getSearchSuggestion = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1] || []);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col p-3 shadow-md sticky top-0 justify-between bg-white z-50 items-center">

            {/* Left - Menu & Logo */}
            <div className="flex items-center col-span-1 ms-3 ">
                <img
                    onClick={toggleMenuHandler}
                    className="h-6 cursor-pointer ps-1 hover:scale-110 transition-transform"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
                    alt="menu"
                />
                <img
                    className="h-7 ml-4 cursor-pointer"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="youtube-logo"
                />
            </div>

            {/* Center - Search Bar */}
            <div className="relative flex justify-center col-span-10">
                <div className="flex w-3/5">
                    <input
                        className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // delay to allow click
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="px-5 py-2 border border-gray-300 bg-gray-100 rounded-r-full hover:bg-gray-200">
                        🔍
                    </button>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-12 w-3/5 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                        <ul>
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-100"
                                    onMouseDown={() => setSearchQuery(item)} // keeps input value on click
                                >
                                    🔍 <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right - User Icon */}
            <div className="flex justify-end col-span-1">
                <img
                    className="h-8 cursor-pointer hover:scale-110 transition-transform"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                    alt="user-profile"
                />
            </div>
        </div>
    );
};

export default Head;
