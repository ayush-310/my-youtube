import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useVideos from "../hooks/useVideos";

const VideoContainer = () => {
    const { videos, loading, error } = useVideos();

    if (loading) {
        return <p className="p-4 text-center text-gray-600">Loading videos...</p>;
    }

    if (error) {
        return <p className="p-4 text-red-500">Failed to load videos.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ps-3 pt-1">
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
