import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    // Early return pattern 
    if(!isMenuOpen) return null;

    return  (
        <div className='p-5 shadow-lg w-48'>
            <ul>
                <li className="text-lg"> <Link to={"/"}>Homes</Link></li>
                <li className="text-lg"> <Link to={"/shorts"}>Shorts</Link></li>
                <li className="text-lg"> <Link to={"/live"}>Lives</Link></li>
            </ul>
            <h2 className="font-bold pt-5">Subscriptions</h2>
            <ul>
                <li className="text-lg"> <Link to={"/music"}>Music</Link></li>
                <li className="text-lg"> <Link to={"/trending"}>Trending</Link></li>
                <li className="text-lg"> <Link to={"/sports"}>Sports</Link></li>
            </ul>
            <h2 className="font-bold pt-5">Subscriptions</h2>
            <ul>
                <li className="text-lg"> <Link to={"/music"}>Music</Link></li>
                <li className="text-lg"> <Link to={"/trending"}>Trending</Link></li>
                <li className="text-lg"> <Link to={"/sports"}>Sports</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
