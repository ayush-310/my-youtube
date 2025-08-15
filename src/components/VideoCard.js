import React from 'react';

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, publishedAt, thumbnails } = snippet;
    const { viewCount } = statistics;

    // Convert date to "x days ago"
    const timeAgo = (date) => {
        const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
        return diff === 0 ? "Today" : `${diff} day${diff > 1 ? "s" : ""} ago`;
    };

    return (
        <div className="w-80 m-2 cursor-pointer text-white">
            {/* Thumbnail */}
            <div className="relative">
                <img
                    className="rounded-xl w-full"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    15:14
                </span>
            </div>

            {/* Video info */}
            <div className="flex mt-2">
                {/* Channel icon placeholder */}
                <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>

                {/* Title & meta */}
                <div className="ml-3">
                    <h3 className="font-semibold leading-tight text-black line-clamp-2">{title}</h3>
                    <p className="text-gray-400 text-sm">{channelTitle}</p>
                    <p className="text-gray-400 text-sm">
                        {viewCount} views • {timeAgo(publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const AdvideoCard = ({info}) => {
    return (
        <div className='p-1 m-1 border border-red-600'>
            <VideoCard info={info} />
        </div>
    )

};

export default VideoCard;
