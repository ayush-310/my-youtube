// src/hooks/useSearchSuggestions.js
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API, GOOGLE_API_KEY } from "../utils/constants";

/**
 * Custom hook to handle YouTube search suggestions with debouncing.
 * @returns { searchQuery, setSearchQuery, suggestions, showSuggestions, setShowSuggestions }
 */
const useSearchSuggestions = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Fetch suggestions with debounce
    // Debouncing API calls // Make an API call after every key press 
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

    // Fetch from YouTube API
    /** * Key - i * - render the component 
     * * - call useEffect(); 
     * * - start timer => make api call after 200ms 
     * * * Key - ip * - render the component 
     * * * - call useEffect(); 
     * * * - start timer => make api call after 200ms 
     * * * Now - setTimeout(200) - make an API call *
     *  */
    const getSearchSuggestion = async () => {
        try {
            const res = await fetch(
                `${YOUTUBE_SEARCH_API}${encodeURIComponent(searchQuery)}&key=${GOOGLE_API_KEY}`
            );
            const json = await res.json();
            // ✅ YouTube Data API returns `items` not `json[1]`
            console.log(json.items);
            setSuggestions(json.items || []);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    return {
        searchQuery,
        setSearchQuery,
        suggestions,
        showSuggestions,
        setShowSuggestions,
    };
};

export default useSearchSuggestions;
