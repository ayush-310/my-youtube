import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        // Dispatch the toggleMenu action
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    onClick={toggleMenuHandler}
                    className='h-8 cursor-pointer'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
                    alt="menu" />
                <img
                    className='h-8 mx-2'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/800px-YouTube_Logo_2017.svg.png"
                    alt="youtube-logo" />
            </div>
            <div className='flex col-span-10 px-10'>
                <input
                    className='w-1/2 border border-gray-400 rounded-l-full px-4 py-2'
                    type="text"
                />
                <button className="px-5 py-2 border border-gray-400 bg-gray-100  rounded-r-full">
                    🔍 
                </button>
            </div>
            <div className='flex col-span-1'>
                <img
                    className='h-8'
                    src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                    alt="user-profile" />
            </div>
        </div>
    )
}

export default Head
