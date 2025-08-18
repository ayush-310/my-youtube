import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    MdHome,
    MdOutlineSubscriptions,
    MdMusicNote,
    MdSportsEsports,
    MdOutlineLiveTv,
    MdTrendingUp,
    MdShortText,
    MdPersonOutline,
    MdDownload,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const darktheme = useSelector((store) => store.app.darktheme);

    const menuItems = [
        { to: "/", label: "Home", icon: <MdHome size={24} /> },
        { to: "/shorts", label: "Shorts", icon: <MdShortText size={24} /> },
        { to: "/live", label: "Live", icon: <MdOutlineLiveTv size={24} /> },
        { to: "/subscriptions", label: "Subscriptions", icon: <MdOutlineSubscriptions size={24} /> },
        { to: "/music", label: "Music", icon: <MdMusicNote size={24} /> },
        { to: "/trending", label: "Trending", icon: <MdTrendingUp size={24} /> },
        { to: "/sports", label: "Sports", icon: <MdSportsEsports size={24} /> },
        { to: "/you", label: "You", icon: <MdPersonOutline size={24} /> },
        { to: "/downloads", label: "Downloads", icon: <MdDownload size={24} /> },
    ];

    return (
        <motion.div
            initial={{ width: 80 }}
            animate={{ width: isMenuOpen ? 190 : 41 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`min-h-screen mx-2 ms-5 dark:border-gray-700 shadow-sm py-4 ${darktheme ? "bg-[#181818] text-white" : "bg-white"
                }`}
        >
            <ul className="flex flex-col gap-2 ">
                {menuItems.map((item) => (
                    <Link key={item.to} to={item.to}>
                        <li
                            className={`flex items-center mx-auto cursor-pointer p-2 rounded-lg transition-colors duration-200 ${darktheme ? "hover:bg-gray-700" : "hover:bg-gray-200"
                                }`}
                        >
                            {item.icon}
                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="ml-3 text-base whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </li>
                    </Link>
                ))}
            </ul>
        </motion.div>
    );
};

export default Sidebar;
