import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videos = await data.json();
        console.log(videos.items);
        setVideos(videos.items);
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {videos?.map((video) => (
                <VideoCard key={video.id} info={video} />
            ))}
        </div>
    )
}

export default VideoContainer
