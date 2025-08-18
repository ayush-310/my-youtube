import React from "react";
import useChannelData from "../hooks/useChannelData";

const VideoCard = React.memo(({ info }) => {
    const { snippet, statistics, contentDetails } = info;
    const { title, channelTitle, publishedAt, thumbnails, channelId } = snippet;
    const { viewCount } = statistics;
    const { duration } = contentDetails;

    const { channelThumbnail, formatViews, formatDuration, timeAgo } =
        useChannelData(channelId);

    return (
        <div className="cursor-pointer bg-white text-black rounded-lg overflow-hidden">
            {/* Thumbnail */}
            <div className="relative">
                <img
                    className="rounded-lg w-full"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {formatDuration(duration)}
                </span>
            </div>

            {/* Video info */}
            <div className="flex my-2 ">
                {/* Channel icon */}
                {channelThumbnail ? (
                    <img
                        className="w-10 h-10 rounded-full flex-shrink-0"
                        src={channelThumbnail}
                        alt={channelTitle}
                    />
                ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                )}

                {/* Title & meta */}
                <div className="ml-3">
                    <h3 className="font-semibold leading-tight line-clamp-2">{title}</h3>
                    <p className="text-gray-500 hover:text-gray-800 text-sm">{channelTitle}</p>
                    <p className="text-gray-500 text-sm">
                        {formatViews(Number(viewCount))} views • {timeAgo(publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    );
});

export default VideoCard;
