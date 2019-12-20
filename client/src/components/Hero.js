import React from 'react'
import styled from 'styled-components';

const Main = styled.div`
    background-color: #f9f8f6;
    text-align:center;
    h3,h1,p{
        letter-spacing:2px;
    }
    h3{
        padding-top:4rem;
        font-size:2rem;
        margin:15px;
    }
    h1{
        font-size:5rem;
        margin:0;
    }
    p{
        margin:15px;
        text-transform:uppercase;
        color:darkgrey;
        font-weight:700;
    }
    @media screen and (max-width: 992px) {
        h1 {
            font-size:4rem;
  }
    @media screen and (max-width: 576px) {
        
        h1 {
            font-size:3rem;
  }
        h3 {
            padding-top:0;
            visibility:hidden;
  }
}
}
`;

const Hero = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Main>
                        <h3>Hacker News</h3>
                        <h1>Magazine</h1>
                        <p>stories and ideas from hacker news</p>
                    </Main>
                </div>
            </div>
        </div>
    )
}

export default Hero
