import React, { useState} from "react";
import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    position:sticky;
    bottom:0;
    background-color:red;
    text-align:left;
    & > h2 {
        color:white;
        transform:rotate(270deg);
        background-color:green;
    }
`;

const Side = ({}) => { 

    return<Container>
        <h2>ianbaylyy@gmail.com</h2>
        <h2>Front-end Developer || UX/UI Designer</h2>
    </Container>
}

Side.defaultProps = {
  

}

export default Side;