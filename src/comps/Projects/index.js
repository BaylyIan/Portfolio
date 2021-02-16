import React, { useState} from "react";
import styled from 'styled-components';
import meditracker from './medi_bg.png';
import walk from './walk_bg.png';

const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding-bottom:3rem;
    /* background-color:#BBB; */
    @media (max-width: 768px) {
      flex-direction:column;
    }
`;
const Title = styled.div`
    flex:1;
    width:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:-1;
    /* background-color:green; */
    & > h2 {
        transform: rotate(270deg)
    }
    @media (max-width: 768px) {
        & > h2 {
        transform: rotate(0)
    }
    }
`;
const Content = styled.div`
    flex:8;
    height:auto;
    display:flex;
    flex-direction:row;
    padding:10px;
    flex-wrap:wrap;

    @media (max-width: 768px) {
       justify-content:center;
    }
    & > a{
        /* background-color:red; */
        display:flex;
        flex-direction:column;
        align-items:center;
        & > h2 {
            position:absolute;
            color:black;
            font-size:16px;
            margin-top:20px;
        }
    }
`;
const Project = styled.img`
    width:17em;
    height:17rem;
    background-color:#c4c4c4;
    margin:10px;
    object-fit:cover;
    @media (max-width: 768px) {
        width:20em;
        height:20rem;
    }
`;

const Projects = ({}) => { 

    // const [hover, setHover] = useState(false);

    return<Container>
         <Title>
             <h2>Projects</h2>
         </Title>
         <Content>
         <a target="_blank" style={{textDecoration:"none"}} href="https://tracking-list-q42m6u091.vercel.app/">
            <Project src={meditracker}
                    // onMouseEnter={()=> setHover(true)}
                    // onMouseLeave={()=> setHover(false)}
                    ></Project>
                    <h2>Medication Tracker</h2>
        </a>
        <a target="_blank" style={{textDecoration:"none"}} href="https://www.figma.com/proto/JtKPACD7VGerurfYImEY8J/WALK?node-id=1%3A82&scaling=scale-down/">
            <h2 >Walk Social Media</h2>
            <Project src={walk}
                    // onMouseEnter={()=> setHover(true)}
                    // onMouseLeave={()=> setHover(false)}
            ></Project>
        </a>
        <a target="_blank" style={{textDecoration:"none"}} href="https://tracking-list-q42m6u091.vercel.app/">
            <h2>Medication Tracker</h2>
            <Project src={meditracker}
                    // onMouseEnter={()=> setHover(true)}
                    // onMouseLeave={()=> setHover(false)}
            ></Project>
        </a>
         </Content>
    </Container>
}

Projects.defaultProps = {
  

}

export default Projects;