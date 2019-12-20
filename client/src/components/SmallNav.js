import React from 'react'
import styled from 'styled-components';

const SNav = styled.div`
background-color: #f9f8f6;
padding:3rem 0;
    /* width:100wv;
    height: 90px;
    background:white; */
    display:flex;
    align-items:center;
    justify-content: center;
    
    .link{
        justify-content: space-around;
        display:flex;
        width:55%;
        padding:0;
        li{
            color:grey;
            font-weight:300;
        }
        li:nth-child(1){
            list-style:none;
            color:black;
        }
    }
    @media screen and (max-width: 992px) {
        .sNav{
            padding:0;
        }
     .link{
         visibility:hidden;
         font-size:0;
     }   
    }
`;
const Container = styled.div`
  @media screen and (max-width: 992px) {
        .snav{
            padding:0;
        }}
`;
const SmallNav = () => {
    return (
        <Container className="container">
            <div className="row">
                <div className="col-12">
                    <SNav className="snav">
                        <ul className="link">
                            <li>Even Numbered Articles</li>
                            <li>Odd Numbered Articles</li>
                        </ul>
                    </SNav>
                </div>
            </div>
        </Container>
    )
}

export default SmallNav
