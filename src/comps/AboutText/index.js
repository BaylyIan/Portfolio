import React, { useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
    flex:1;
    display:flex;
    padding-left:2vw;
    padding:4vw;
    /* background-color:#BED; */
    @media (max-width: 768px) {
      width:90%;
    }
`;
const Content = styled.div`
    display:flex;
    align-items:flex-start;
    flex-direction:column;
`;
const SubTitle = styled.text`
    @media (max-width: 768px) {
      & >h2{
          font-size:18px;
      }
    }
`;

const AboutText = ({}) => { 

    return<Container>
            <Content>
            <SubTitle><h2>About Me</h2></SubTitle>
            <div style={{width:"100%", height:"2px", backgroundColor:"#3A3A3A"}} />
            <h3>Hello! My name is Ian Bayly, a front-end developer and UX/UI designer based in <span style={{color:"#64FFDA"}}>Vancouver, BC.</span> <br/><br/>I develop exceptional websites and applications that provide intuitive, pixel-perfect user interfaces. I strive to enhance user satisfaction in anything that I make. I am a well-organized person, a problem solver, I pay high attention to detail, and also a capable leader.<br/><br/> Recently graduated from the <span style={{color:"#64FFDA"}}>British Columbian Institute of Technology</span> I am interested in opportunities to further my skills and connect with people.
            </h3>
            </Content>
    </Container>
}

AboutText.defaultProps = {
  

}

export default AboutText;