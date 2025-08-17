import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from './../utils/constants';
import VideoCard, { AdvideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const videos = await data.json();
      
        setVideos(videos.items);
    }

    return (
        <div className='ps-2 flex bg-amber-600 flex-wrap'>
            {/* {videos[0] && <AdvideoCard info={videos[0]} />} */}
            {videos?.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            ))}
        </div>
    )
}

export default VideoContainer
