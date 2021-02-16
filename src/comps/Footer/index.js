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
    border:2px solid #64FFDA;
    padding:4px;
    border-radius:8px;
    @media (max-width: 768px) {
        width:1rem;
        height:1rem;
  }
`;

const Footer = ({}) => { 

    return<div>
    <Container>
       <div><h2 style={{color:"white", fontSize:"16px"}}>Ian Bayly</h2></div>
       <IconCont>
       <a target="_blank" style={{textDecoration:"none"}} href="https://twitter.com/wellthatsuxks?lang=en/">
       <Icon src={Twitter} />
        </a>
        <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/BaylyIan?tab=repositories/">
       <Icon src={Github} />
        </a>
        <a target="_blank" style={{textDecoration:"none"}} href="https://www.linkedin.com/in/ian-bayly-635829204//">
       <Icon src={Linked} />
        </a>
       </IconCont>
       <h3>ianbaylyy@gmail.com</h3>

    </Container>
    </div>
}

Footer.defaultProps = {
  

}

export default Footer;