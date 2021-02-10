import React, { useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
    /* background-color:red; */
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
    /* background-color:#DAD; */
    width:80%;
    margin-top:10vh;
    padding-left:2vw;
    & > h1 {
        margin:0;
        margin-top:-2.5vh;
    }
    @media (max-width: 768px) {
        div{
            & >h1{
            font-size:36px;
            }
        }
        & > h1 {
        margin:0;
        font-size:36px;
    }
  }
`;
const ParagraphCont = styled.div`
    line-height:1.5;
    margin-top:5vh;
    width:60%;
    & > h3{
        color:#b9b9b9;
    }
    @media (max-width: 768px) {
        width:100%;
  }
`;
const ContactButton = styled.button`
    width:148px;
    height:42px;
    border: 2px solid #64FFDA;
    border-radius: 3px;
    background: ${(props) => (props.fillButton ? "#3b3b3b" : "none")};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:5vh;
    & > p {
        font-size:20px;    
    }
    @media (max-width: 768px) {
        width:112px;
        height:36px;
        & > p {
        font-size:16px;    
    }
  }
`;

const Title = ({}) => {

    const [fillButton, setFillButton] = useState(false);


    const handleFillButton = ()=>{
        setFillButton(!fillButton);
    }

    return<Container>
            <Content>
                <div style={{display:"flex", flexDirection:"row"}}> 
                <h1 style={{color:"#FFFFFF"}}>Hi, I'm </h1><h1 style={{color:"#64FFDA", paddingLeft:"8px"}}>Ian.</h1>
                </div>
                <h1 style={{color:"#B9B9B9"}}>I build things that live on the internet.</h1>
                <ParagraphCont><h3>I’m a front-end developer based in Vancouver, BC specializing in building and designing exceptional, high quality websites and applications. </h3></ParagraphCont>
                <ContactButton style={{color:"#64FFDA"}} fillButton={fillButton} onMouseEnter={handleFillButton} onMouseLeave={handleFillButton}><p>Contact Me!</p></ContactButton>
            </Content> 
    </Container>
}

Title.defaultProps = {
  

}

export default Title;