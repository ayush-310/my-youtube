import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";
import useButtonList from "../hooks/useButtonList";
import { useSelector } from "react-redux";

const list = [
    "All", "Sports", "News", "Movies", "Documentaries", "Gaming", "Music",
    "Comedy", "Travel", "Technology", "Food", "Science", "Education",
    "Podcasts", "Fashion", "Motivation", "Nature", "History", "Business",
    "Anime", "Vlogs", "Live"
];

const ButtonList = () => {
    const {
        scrollContainerRef,
        showLeftArrow,
        showRightArrow,
        updateArrows,
        scroll,
    } = useButtonList();

    const darktheme = useSelector((store) => store.app.darktheme);


    return (
        <div className="relative my-2 overflow-hidden">
            {/* Scrollable container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-3 px-3 ps-2 py-2 scroll-smooth  z-10" onScroll={updateArrows}
            >
                {list.map((item, index) => (
                    <ButtonComponent key={index} name={item} />
                ))}
            </div>

            {/* Left Arrow */}
            {showLeftArrow && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <button
                        onClick={() => scroll("left")}
                        className={`pointer-events-auto p-2 rounded-full shadow-md 
        ${darktheme
                                ? "bg-black hover:bg-gray-800"
                                : "bg-white hover:bg-gray-300"}`}>
                        <FaChevronLeft className={`-z-40 ${darktheme ? "text-white" : "text-gray-700"}`} />
                    </button>
                </div>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <button
                        onClick={() => scroll("right")}
                        className={`pointer-events-auto p-2 rounded-full shadow-md 
        ${darktheme
                                ? "bg-black hover:bg-gray-800"
                                : "bg-white hover:bg-gray-300"}`}
                    >
                        <FaChevronRight className={`${darktheme ? "text-white" : "text-gray-700"}`} />
                    </button>
                </div>
            )}

        </div>
    );
};

export default ButtonList;
