import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const useWatchPage = () => {
    const [searchParam] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch])
    
    return { searchParam };
}

export default useWatchPage
