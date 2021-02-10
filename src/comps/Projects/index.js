import React, { useState} from "react";
import styled from 'styled-components';
import meditracker from './meditracker.png';
import walk from './walk.png';


const Container = styled.div`
    display:flex;
    flex-direction:row;
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

    return<Container>
         <Title>
             <h2>Projects</h2>
         </Title>
         <Content>
            <Project src={meditracker}/>
            <Project src={walk}/>
            <Project />
         </Content>
    </Container>
}

Projects.defaultProps = {
  

}

export default Projects;