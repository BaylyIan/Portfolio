import React, { useState} from "react";
import styled from 'styled-components';
import Burger from './burger';

const Nav = styled.div`
    width:100%auto;
    height:55px;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;
    background-color:#181818;
    .logo{
        padding: 15px 0;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <div>
                <h3>Ian Bayly</h3>
            </div>
            <Burger />
        </Nav>
    )
}



// const Container = styled.div`
// width:100%;
// height:10vh;
// display:flex;
// background-color:#181818;
// justify-content:space-between;
// `;
// const LogoCont = styled.img`
//     width:10%;
//     height:auto;
//     border:none;
// `;
// const Nav = styled.div`
// width:auto;
// height:auto;
// //background-color:red;
// display:flex;
// align-items:Center;
// flex-direction:row;
// justify-content:space-evenly;

// `;
// const NavText1 = styled.text`
// color: ${(props) => (props.textColor1 ? "white" : "#64FFDA")};
// font-size: ${(props) => (props.fontSize1 ? "18px" : "22px")}; 
// text-align:center;
// `;
// const NavText2 = styled.text`
// color: ${(props) => (props.textColor2 ? "white" : "#64FFDA")};
// font-size: ${(props) => (props.fontSize2 ? "18px" : "22px")}; 
// text-align:center; 
// `;
// const NavText3 = styled.text`
// color: ${(props) => (props.textColor3 ? "white" : "#64FFDA")};
// font-size: ${(props) => (props.fontSize3 ? "18px" : "22px")}; 
// text-align:center; 
// `;
// const ResumeButton = styled.button`
//     width:110px;
//     height:54px;
//     border: 2px solid #64FFDA;
//     border-radius: 2px;
//     background: ${(props) => (props.fillButton ? "#2a2a2a" : "none")};
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     & > p {
//         font-size:20px;    
//     }
// `;


// const NavBar = ({}) => {

// const [textColor1, setTextColor1] = useState(true);
// const [textColor2, setTextColor2] = useState(true);
// const [textColor3, setTextColor3] = useState(true);
// const [fontSize1, setFontSize1] = useState(true);
// const [fontSize2, setFontSize2] = useState(true);
// const [fontSize3, setFontSize3] = useState(true);
// const [fillButton, setFillButton] = useState(false);

// const handleChangeText1 = () =>{
//     setTextColor1(!textColor1);
//     // setFontSize1(!fontSize1);
// }
// const handleChangeText2 = () =>{
//     setTextColor2(!textColor2);
//     // setFontSize2(!fontSize2)
// }
// const handleChangeText3 = () =>{
//     setTextColor3(!textColor3);
//     // setFontSize3(!fontSize3)
// }
// const handleFillButton = ()=>{
//     setFillButton(!fillButton);
// }

//     return<Container >
//            <LogoCont />
//            <Nav>
//             <NavText1 textColor1={textColor1} fontSize1={fontSize1} onMouseEnter={handleChangeText1} onMouseLeave={handleChangeText1}>About</NavText1>
//             <NavText2 textColor2={textColor2} fontSize2={fontSize2} onMouseEnter={handleChangeText2} onMouseLeave={handleChangeText2}>Work</NavText2>
//             <NavText3 textColor3={textColor3} fontSize3={fontSize3} onMouseEnter={handleChangeText3} onMouseLeave={handleChangeText3}>Contact</NavText3>
//             <ResumeButton fillButton={fillButton} onMouseEnter={handleFillButton} onMouseLeave={handleFillButton}><p style={{color:"#64FFDA"}}>Resume</p></ResumeButton>
            
            
//            </Nav>
//     </Container>
// }

NavBar.defaultProps = {
  

}

export default NavBar;