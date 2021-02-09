import React, { useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:50vh;
    display:flex;
    flex-direction:row;
`;
const Title = styled.div`
    flex:1;
    height:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    /* background-color:green; */
    & > h2 {
        transform: rotate(270deg)
    }
`;
const Content = styled.div`
    flex:8;
    height:auto;
    display:flex;
    flex-direction:row;
    padding:10px;
    flex-wrap:wrap;
`;
const Project = styled.div` 
    width:28vw;
    height:50vh;
    background-color:#c4c4c4;
    margin:10px;
`;

const Projects = ({}) => { 

    return<Container>
         <Title>
             <h2>My Projects</h2>
         </Title>
         <Content>
            <Project />
            <Project />
            <Project />
         </Content>
    </Container>
}

Projects.defaultProps = {
  

}

export default Projects;