import React, { useState, useEffect } from 'react'
import { getArticle } from '../services'
import Image from './Image'

const Article = ({ storyId }) => {
    const [article, setArticle] = useState({})

    useEffect(() => {
        getArticle(storyId).then(data => data && data.url && setArticle(data))
    }, [])
    return article && article.url ? (
        <Image Url={article.url} title={article.title} by={article.by} />
    ) : null

}

export default Article
