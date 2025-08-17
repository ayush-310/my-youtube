import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const useVideos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getVideos = async () => {
        try {
            setLoading(true);
            const res = await fetch(YOUTUBE_VIDEOS_API);
            const data = await res.json();
            setVideos(data.items || []);
        } catch (err) {
            console.error("Error fetching videos:", err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getVideos();
    }, []);

    return { videos, loading, error, refetch: getVideos };
};

export default useVideos;
