import React, { useState} from "react";
import styled from 'styled-components';
import meditracker from './medi_bg.png';
import walk from './walk_bg.png';
import {FiGithub} from 'react-icons/fi';
import {FiPlay} from 'react-icons/fi';


const Container = styled.div`
    display:flex;
    flex-direction:row;
    padding-bottom:3rem;
    z-index:1;
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
        transform: rotate(270deg);
    }
    @media (max-width: 768px) {
        & > h2 {
        transform: rotate(0)
    }
    }
`;
const Content = styled.div`
    flex:20;
    height:auto;
    display:flex;
    flex-direction:row;
    padding:10px;
    flex-wrap:wrap;
    justify-content:center;
    @media (max-width: 768px) {
       justify-content:center;
       
    }
    & > a{
        /* background-color:red; */
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:-1;
        & > h2 {
            position:absolute;
            color:black;
            font-size:16px;
            margin-top:20px;
        }
    }
`;
const Project = styled.img`
    width:35%;
    max-width:1000px;
    flex:1;
    height:17rem;
    object-fit:cover;
    @media (max-width: 656px) {
        width:20em;
        height:20rem;
        padding-top:1rem;
    }
`;
const Info = styled.div`
    width:65%;
    flex:1.25;
    height:17rem;
    /* background-color:#DAD; */
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-left:1rem;
    justify-content:space-between;
    @media (max-width: 656px) {
        width:100%;
        margin-left:0;
        margin-top:10px;
    }
    & > div{
        & > h2{
            color:white;
            margin-top:0;
            font-size:20px;
        }
        & > p{
            color:white;
            font-size:14px;
            font-weight:700;
        }
    }
`;
const ProjCont = styled.div`
    width:80vw;
    height:auto;
    /* background-color:red; */
    display:flex;
    flex-direction:row;
    margin:1rem;
    @media (max-width: 656px) {
        flex-direction:column;
        width:20rem;
        margin-top:40px;
    }
`;

const Projects = ({}) => { 

    // const [hover, setHover] = useState(false);

    return<Container>
         <Title>
             <h2>Projects</h2>
         </Title>
         <Content>

            <ProjCont>
                <Project src={meditracker}/>
                <Info>
                    <div>
                    <h2>Medication Tracker</h2>
                    <p style={{fontStyle:"italic"}}>Front-end developer</p> 
                    <p>Our team was assigned to build a to-do list application with various sorting/filtering features features. Using React, MySql and Express, we built a medication tracker which allows you to keep track of all your medications for the day.   </p>
                    </div>
                    <div style={{}}>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/RinaHan/Tracking-List">
                        <FiGithub size={27} style={{color:"white"}}/>
                    </a>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://tracking-list-q42m6u091.vercel.app/">
                        <FiPlay size={27} style={{color:"white", paddingLeft:"20px"}}/>
                    </a>
                    </div>
                </Info>
            </ProjCont>

            <ProjCont>
                <Project src={walk}/>
                <Info>
                    <div>
                    <h2>Walk</h2>
                    <p style={{fontStyle:"italic"}}>Front-end developer / UX/UI Designer</p> 
                    <p>Walk is the first social media dating app built for dogs. With a simple, intuitive user interface complimented by a attractive colour pallete, Walk connects people through their common love of dogs. Built in React Native, features included profile setup, posts, likes, chatting, and more.</p>
                    </div>
                    <div style={{}}>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/BaylyIan/Walk">
                        <FiGithub size={27} style={{color:"white"}}/>
                    </a>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://www.figma.com/proto/JtKPACD7VGerurfYImEY8J/WALK?node-id=1%3A82&scaling=min-zoom">
                        <FiPlay size={27} style={{color:"white", paddingLeft:"20px"}}/>
                    </a>
                    </div>
                </Info>
            </ProjCont>


         </Content>
    </Container>
}

Projects.defaultProps = {
  

}

export default Projects;