import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size:20px;
  li {
    padding: 6px 20px;
    color:#fff;
    :hover {
		    color:#64FFDA;
		    cursor: pointer;
	    }
    &:nth-child(5){
        border:2px solid #64FFDA;
        color:#64FFDA;
        :hover {
		    background-color: #292929;  
	    }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #181818;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    font-size:18px;
    li {
      color: #fff;
      margin-top:20px;
      &:nth-child(5){
            border:2px solid #64FFDA;
            color:#64FFDA;
            :hover {
		        /* background-color: #292929; */
		        cursor: pointer;
	}
        }
    }
  }
`;

const RightNav = ({ open }) => {
  
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
      <li >Resume</li>
    </Ul>
  )
}

export default RightNav