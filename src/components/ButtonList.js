import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ButtonComponent from './ButtonComponent';

const list = [
    "All", "Sports", "News", "Movies", "Documentaries", "Gaming", "Music",
    "Comedy", "Travel", "Technology", "Food", "Science", "Education",
    "Podcasts", "Fashion", "Motivation", "Nature", "History", "Business",
    "Anime", "Vlogs", "Live"
];

const ButtonList = () => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    const updateArrows = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setShowLeftArrow(container.scrollLeft > 0);
            setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth - 5);
        }
    };

    useEffect(() => {
        updateArrows();
        window.addEventListener("resize", updateArrows);
        return () => window.removeEventListener("resize", updateArrows);
    }, []);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.clientWidth * 0.8; // scroll 80% width
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative  overflow-hidden">
            {/* Scrollable container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide space-x-3 px-3 ps-1 py-2 scroll-smooth"
                onScroll={updateArrows}
            >
                {list.map((item, index) => (
                    <ButtonComponent key={index} name={item} />
                ))}
            </div>

            {/* Left Arrow */}
            {showLeftArrow && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <button
                        onClick={() => scroll("left")}
                        className="pointer-events-auto bg-white text-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-90 transition"
                    >
                        <FaChevronLeft className="text-gray-700" />
                    </button>
                </div>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    <button
                        onClick={() => scroll("right")}
                        className="pointer-events-auto bg-white bg-opacity-70 p-2 rounded-full shadow-md hover:bg-opacity-90 transition"
                    >
                        <FaChevronRight className="text-gray-700" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ButtonList;
