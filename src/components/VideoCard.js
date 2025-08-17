const VideoCard = ({ info }) => {
    console.log(info);
    const { snippet, statistics } = info;
    const { title, channelTitle, publishedAt, thumbnails } = snippet;
    const { viewCount } = statistics;

    const timeAgo = (date) => {
        const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
        return diff === 0 ? "Today" : `${diff} day${diff > 1 ? "s" : ""} ago`;
    };

    return (
        <div className="cursor-pointer bg-white text-black rounded-lg overflow-hidden ">
            {/* Thumbnail */}
            <div className="relative">
                <img
                    className="rounded-t-lg w-full"
                    src={thumbnails.medium.url}
                    alt={title}
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    15:14
                </span>
            </div>

            {/* Video info */}
            <div className="flex mt-2 px-2 pb-2">
                {/* Channel icon placeholder */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>

                {/* Title & meta */}
                <div className="ml-3">
                    <h3 className="font-semibold leading-tight line-clamp-2">{title}</h3>
                    <p className="text-gray-500 hover:text-gray-800 text-sm">{channelTitle}</p>
                    <p className="text-gray-500 text-sm">
                        {viewCount} views • {timeAgo(publishedAt)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;