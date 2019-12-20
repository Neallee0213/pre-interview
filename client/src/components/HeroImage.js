import React from 'react'
import styled from 'styled-components';
import main_img from '../img/main_img.jpg'
const HImg = styled.div`

    width:100wv;
    height: 70vh;
    background:white;
    .conteainer-text{
        padding:0;
    }
    .img{
        margin: auto;
        width:60%;
        height:100%;
        background-position:center;
        
        background-size:cover;
        overflow:hidden;
    }
    .text{
        
        background: rgba(255,255,255,0.85);
        padding: 50px 60px;
        
        margin-top:40%;
        h1{
            font-size:1.5rem;
        }
        
    }
    @media screen and (max-width: 992px) {
        .img{
        margin: auto;
        width:100%;
        
    }
     
    }
    @media screen and (max-width: 576px) {
        .img{
        margin: auto;
        width:100%;
        overflow:hidden;
    }
        .text{
        
        background: rgba(255,255,255,0.85);
        padding: 50px 60px;
        overflow:hidden;
        margin-top:100%;
        
        h1{
            font-size:1.5rem;
        }
        p{
            font-size:0;
            visibility:hidden;
        }   
     }
    }
`;
const HeroImage = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <HImg style={{ background: '#f9f8f6' }}>
                        <div className="img" style={{ background: `url(${main_img})` }}>
                            <div className="container">
                                <div className="row d-flex justify-content-end">
                                    <div className="col-md-12 col-lg-6 conteainer-text">
                                        <div className="text">
                                            <h4>News</h4>
                                            <h1>`Quis cupidatat veniam consectetur occaecat officia. Dolore et eiusmod ex nisi do.</h1>
                                            <p>Sunt irure eu minim nisi aute ut ad consequat nostrud exercitation adipisicing. Ea ad exercitation ea duis qui cillum in minim proident aute.
                                                 Amet officia est mollit consectetur et amet reprehenderit quis laborum amet non. Culpa id cupidatat minim fugiat do eiusmod ipsum.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </HImg>
                </div>
            </div>
        </div >
    )
}

export default HeroImage
