import React, { useEffect, useState } from 'react';
import { getStoryIDs } from '../services'
import Article from '../components/Article'
import { useScroll } from '../hooks/useScroll'
import styled from 'styled-components'
const Container = styled.div`
padding:100px 0;
`;

const More = styled.div`   
    padding: 30px 0;
    margin:auto;
    width:200px;
    text-align:center;
    h1{
        font-size:1rem;     
        text-transform:capitalize;
        color:white;
        padding:20px 20px;
        background:#ffb21a;
        border-radius:35px;
        font-weight: 300;

    }
`;

export const StoriesContainer = () => {
    const { count } = useScroll()
    const [storyIds, setStoryIds] = useState([]);


    useEffect(() => {
        getStoryIDs().then(data => setStoryIds(data))
    }, [])

    return (
        <Container>
            <div className="container">
                <div className="row justify-content-center">
                    {storyIds.slice(0, count).map(storyId =>
                        <div className="col-lg-6 col-12" key={storyId}>
                            <Article storyId={storyId} >
                            </Article>
                        </div>
                    )}
                </div>
            </div>

            <More>
                <h1> more load</h1>
            </More>
        </Container>
    )
}

export default StoriesContainer
