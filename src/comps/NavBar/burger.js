import React, {useState} from 'react';
import styled from 'styled-components';
import RightNav from "./rightnav";

const StyledBurger = styled.div`
    width:2rem;
    height:2rem;
    position:fixed;
    top:15px;
    right:20px;
    z-index:20;
    display:none;
    @media (max-width:768px){
        display:flex;
        justify-content:space-around;
        flex-flow: column nowrap;
    }
    div{
        width:2rem;
        height:0.25rem;
        background-color:${({ open }) => open ? '#b9b9b9' : '#555'};
        border-radius:10px;
        transform-origin:1px;
        transition: all 0.3s linear;
        &:nth-child(1){
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2){
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }   
`;

const Burger = ({scrollHome, scrollAbout, scrollProjects, scrollContact}) =>{

    const [open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(!open);
    }

    const HandleScrolls = (func, e) =>{
        setOpen(false)
        func(e)
    }

    return(
        <>
        <StyledBurger open={open} onClick={handleOpen}>
            <div />
            <div />
            <div />
        </StyledBurger>
        <RightNav 
        open={open}
        scrollProjects={HandleScrolls.bind(this, scrollProjects)}
        scrollHome={HandleScrolls.bind(this, scrollHome)}
        scrollAbout={HandleScrolls.bind(this, scrollAbout)}
        scrollContact={HandleScrolls.bind(this, scrollContact)}
        />
        </>
    )
}

export default Burger;