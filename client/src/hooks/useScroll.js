import { useState, useEffect } from 'react'
import { MAX_STORIES, STORY_INC } from '../constants'

export const useScroll = () => {
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(STORY_INC);


    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
            return false;
        }
        setLoading(true)
    }
    useEffect(() => {
        if (!loading) return;

        if (count + STORY_INC >= MAX_STORIES) {
            setCount(MAX_STORIES)
        } else {
            setCount(count + STORY_INC);
        }
        setLoading(false)
    }, [loading])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])
    return { count };

}