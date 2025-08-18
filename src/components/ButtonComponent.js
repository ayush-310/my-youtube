import React from 'react'
import { useSelector } from 'react-redux';

const ButtonComponent = ({ name }) => {

    const darktheme = useSelector((store) => store.app.darktheme);


    return (
        <div>
            <button className={`px-4 py-2 text-black font-semibold rounded-lg ${darktheme ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>{name}</button>
        </div>
    )
}

export default ButtonComponent
