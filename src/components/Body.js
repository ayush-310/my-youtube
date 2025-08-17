import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Body = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main container that adjusts with sidebar */}
            <motion.div
                key={isMenuOpen ? "open" : "closed"} // helps framer detect change
                initial={{ width: `calc(100vw - ${isMenuOpen ? 200 : 113}px)` }}
                animate={{ width: `calc(100vw - ${isMenuOpen ? 200 : 113}px)` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen bg-white px-3"
            >
                <Outlet />
            </motion.div>
        </div>
    );
};

export default Body;
