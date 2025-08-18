import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
        const darktheme = useSelector((store) => store.app.darktheme);

    return (
        <div className={`mt-1 ${darktheme ? "bg-[#181818]" : "bg-white"}`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer
