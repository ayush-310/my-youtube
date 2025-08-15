import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdHome, MdOutlineSubscriptions, MdMusicNote, MdSportsEsports, MdOutlineLiveTv, MdTrendingUp, MdShortText } from 'react-icons/md';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className="p-5 pt-0  w-60  min-h-screen">
            {/* Main Navigation */}
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdHome size={22} />
                    <Link to="/">Home</Link>
                </li>
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdShortText size={22} />
                    <Link to="/shorts">Shorts</Link>
                </li>
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdOutlineLiveTv size={22} />
                    <Link to="/live">Live</Link>
                </li>
            </ul>

            {/* Divider */}
            <hr className="my-5 border-gray-300 dark:border-gray-600" />

            {/* Subscriptions */}
            <h2 className="font-bold mb-3 flex items-center gap-2 text-gray-900 ">
                <MdOutlineSubscriptions size={20} /> Subscriptions
            </h2>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdMusicNote size={22} />
                    <Link to="/music">Music</Link>
                </li>
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdTrendingUp size={22} />
                    <Link to="/trending">Trending</Link>
                </li>
                <li className="flex items-center gap-3 text-lg hover:bg-gray-100 dark:hover:bg-gray-300 p-2 rounded-lg transition">
                    <MdSportsEsports size={22} />
                    <Link to="/sports">Sports</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
