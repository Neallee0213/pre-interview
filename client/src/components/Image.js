import React, { useState, useEffect } from 'react'
import { getImages } from '../services'
import styled from 'styled-components';
const Constiner = styled.div`
background:white;
margin:20px 0;
.text{
        h1{
            text-align:center;
           
            padding-top: 35%;
        }
}

`;


const ImgContainer = styled.div`
background-position:center center;
background-size:cover;
`;
const Detail = styled.div`
padding:30px 0;
p{
    text-align:center;
}
`;


const Image = (props) => {
    const [images, setImages] = useState({})
    // console.log(props);
    // console.log(props.title);


    useEffect(() => {
        getImages(props)
            .then(data => setImages(data.img_URL.image))
    }, [])


    return images ? (
        <Constiner>
            <ImgContainer style={{ width: '100%', height: '400px', background: `url(${images})` }} />

            <Detail>
                <p>{props.title}</p>
                <p>by: {props.by}</p>
            </Detail>
        </Constiner>

    ) : <Constiner>
            <ImgContainer style={{ width: '100%', height: '400px' }}>
                <div className="text">
                    <h1> No Image</h1>
                </div>
            </ImgContainer>
            <Detail>
                <p>{props.title}</p>
                <p>by: {props.by}</p>
            </Detail>
        </Constiner>
}

export default Image
