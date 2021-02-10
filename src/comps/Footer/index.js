import React, { useState} from "react";
import styled from 'styled-components';
import Twitter from './twitter-green.png';
import Github from './github-green.png';
import Linked from './linkedin-green.png';

const Container = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    background-color:#181818;
    padding-top:5vh;
    padding-bottom:5vh;
    @media (max-width: 768px) {
        flex-direction:column;
        padding-top:2vh;
        padding-bottom:2vh;
        & > h3{
            font-size: 14px;
        }
  }


`;
const IconCont = styled.div`
    width:200px;
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;

const Icon = styled.img`
    width:1.5rem;
    height:1.5rem;
    border:2.5px solid #64FFDA;
    padding:4px;
    border-radius:10px;
    @media (max-width: 768px) {
        width:1rem;
        height:1rem;
  }
`;

const Footer = ({}) => { 

    return<div>
    <Container>
       <div><h2>Logo</h2></div>
       <IconCont>
           <Icon src={Twitter} />
           <Icon src={Github} />
           <Icon src={Linked} />
       </IconCont>
       <h3>ianbaylyy@gmail.com</h3>
       <h3>@ 2021 Ian Bayly. All rights reserved</h3>
    </Container>
    </div>
}

Footer.defaultProps = {
  

}

export default Footer;