import React, { useState} from "react";
import styled from 'styled-components';
import Twitter from './twitter-green.png';
import Github from './github-green.png';
import Linked from './linkedin-green.png';

const Container = styled.div`
    width:100%;
    height:300px;
    display:flex;
    flex-direction:row;
    position:relative;
    bottom:0;
    justify-content:space-around;
    align-items:center;
    background-color:#181818;
`;
const IconCont = styled.div`
    width:20%;
    height:auto;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:relative;
`;

const Icon = styled.img`
    width:40px;
    height:40px;
    border:5px solid #64FFDA;
    padding:4px;
    border-radius:10px;
`;

const Footer = ({}) => { 

    return<div>
    <Container>
       <div style={{width:"8%"}}><h2>Logo</h2></div>
       <IconCont>
           <Icon src={Twitter} />
           <Icon src={Github} />
           <Icon src={Linked} />
       </IconCont>
       <h3>@ 2021 Ian Bayly. All rights reserved</h3>
    </Container>
    </div>
}

Footer.defaultProps = {
  

}

export default Footer;