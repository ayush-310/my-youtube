import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(closeMenu());
    }, [])
    return (
        <div className='px-5'>
            <iframe
                width="1100"
                height="600"
                src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage
