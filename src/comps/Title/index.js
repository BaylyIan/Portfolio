import React, { useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
`;
const Content = styled.div`
    width:80%;
    height:auto;
    display:flex;
    align-items:flex-start;
    flex-direction:column;
    background-color:red;
    padding-top:10%;
    & > h1 {
        margin-top:-45px;
    }
`;
const ParagraphCont = styled.div`
    width:550px;
    height:auto;
    // color:#b9b9b9
    background-color:blue;
`;
const ContactButton = styled.button`
    width:148px;
    height:42px;
    border: 2px solid #64FFDA;
    border-radius: 2px;
    background: ${(props) => (props.fillButton ? "#3b3b3b" : "none")};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:40px;
    & > p {
        font-size:20px;    
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