import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Body = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const darktheme = useSelector((store) => store.app.darktheme);

    return (
        <div className="flex" style={{ backgroundColor: darktheme ? "#181818" : "white" }}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main container that adjusts with sidebar */}
            <motion.div
                key={isMenuOpen ? "open" : "closed"} // helps framer detect change
                initial={{ width: `calc(100vw - ${isMenuOpen ? 200 : 113}px)` }}
                animate={{ width: `calc(100vw - ${isMenuOpen ? 200 : 113}px)` }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`min-h-screen  px-3 ps-2 ${darktheme ? "text-white bg-[#181818]" : "text-black bg-white"}`}
            >
                <Outlet />
            </motion.div>
        </div>
    );
};

export default Body;
