import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const useChannelData = (channelId) => {
    const [channelThumbnail, setChannelThumbnail] = useState(null);

    useEffect(() => {
        if (!channelId) return;

        const fetchChannelThumbnail = async () => {
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${GOOGLE_API_KEY}`
                );
                const data = await res.json();
                const thumbnailUrl =
                    data?.items?.[0]?.snippet?.thumbnails?.default?.url;
                setChannelThumbnail(thumbnailUrl);
            } catch (error) {
                console.error("Error fetching channel thumbnail:", error);
            }
        };

        fetchChannelThumbnail();
    }, [channelId]);

    // 🔹 Format Views
    const formatViews = (num) => {
        if (num >= 1_000_000) {
            return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
        } else if (num >= 1_000) {
            return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
        }
        return num?.toString();
    };

    // 🔹 Format Duration (ISO8601 -> H:MM:SS)
    const formatDuration = (isoDuration) => {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
        const hours = parseInt(match?.[1] || 0, 10);
        const minutes = parseInt(match?.[2] || 0, 10);
        const seconds = parseInt(match?.[3] || 0, 10);

        const h = hours > 0 ? `${hours}:` : "";
        const m = hours > 0 ? String(minutes).padStart(2, "0") : minutes;
        const s = String(seconds).padStart(2, "0");
        return `${h}${m}:${s}`;
    };

    // 🔹 Time Ago
    const timeAgo = (date) => {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);

        const intervals = [
            { label: "year", seconds: 31536000 },
            { label: "month", seconds: 2592000 },
            { label: "week", seconds: 604800 },
            { label: "day", seconds: 86400 },
            { label: "hour", seconds: 3600 },
            { label: "minute", seconds: 60 },
            { label: "second", seconds: 1 },
        ];

        for (let i of intervals) {
            const count = Math.floor(diffInSeconds / i.seconds);
            if (count > 0) {
                return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
            }
        }
        return "Just now";
    };

    return { channelThumbnail, formatViews, formatDuration, timeAgo };
};

export default useChannelData;
