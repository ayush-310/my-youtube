import React, { useEffect, useState } from 'react';
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
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ps-3 pt-1">
            {videos?.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
