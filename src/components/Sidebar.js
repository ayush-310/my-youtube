import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // Early return pattern 
    // if(!isMenuOpen) return null;

    return isMenuOpen ? null : (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li className="text-lg">Homes</li>
                <li className="text-lg">Shorts</li>
                <li className="text-lg">Lives</li>
            </ul>
            <h2 className="font-bold pt-5">Subscriptions</h2>
            <ul>
                <li className="text-lg">Music</li>
                <li className="text-lg">Trending</li>
                <li className="text-lg">Sports</li>
            </ul>
            <h2 className="font-bold pt-5">Subscriptions</h2>
            <ul>
                <li className="text-lg">Music</li>
                <li className="text-lg">Trending</li>
                <li className="text-lg">Sports</li>
            </ul>
        </div>
    )
}

export default Sidebar
