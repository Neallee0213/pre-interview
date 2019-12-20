import React from 'react';
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";

const Head = styled.nav`
    padding:0 30px;
    /* width:100%; */
    height: 90px;
    background:white;
    display:flex;
    align-items:center;
    justify-content: space-around;
    .navbar-brand{
        padding-left:20px;
    }
    .navbar-toggler{
        padding:10px;
        border-radius:50%;
        background:#ffb21a;
        border-color:white;
   .navbar-toggler-icon{
       color:white;
       font-size:70%;
       align-items:center;
   }
    }
    .navbar-nav{
        padding-right:100px;
    
        /* width:30%; */
        align-items:center;
        li{
            padding:0 10px;
            list-style:none;
            font-weight: 300;
        }
        li:nth-child(2){
            font-weight: 500;
        }
        li:nth-last-child(1){
            color:white;
            padding:16px 20px;
            background:#ffb21a;
            border-radius:35px;
            font-weight: 500;
        }    
    }
    
`;
const Header = () => {
    return (
        <Head className="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand" href="#">Hacker News</span>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        The details
                    </li>
                    <li className="nav-item">
                        Magazine
                    </li>
                    <li className="nav-item">
                        Sign in
                    </li>
                    <li className="nav-item">
                        Start investing
                    </li>
                </ul>
            </div>
        </Head >
    )
}

export default Header
