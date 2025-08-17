import useWatchPage from '../hooks/useWatchPage';

const WatchPage = () => {

    const { searchParam } = useWatchPage();

    return (
        <div className='px-5'>
            <iframe
                width="900"
                height="500"
                src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

        </div>
    )
}

export default WatchPage
