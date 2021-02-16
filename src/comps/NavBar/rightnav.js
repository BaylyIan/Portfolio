import React from 'react';
import styled from 'styled-components';
import Pdf from './Resume_v1.pdf';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items:center;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size:20px;
    font-family: 'Roboto Mono';
    li {
      padding: 6px 20px;
      color:#fff;
      font-size:14px;
      :hover {
		    color:#64FFDA;
		    cursor: pointer;
        }
    }
    a {
      & > li{
       
        border:2px solid #64FFDA;
            border-radius:3px;
            color:#64FFDA;
            :hover {
		        /* background-color: #292929; */
		        cursor: pointer;
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
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    font-size:18px;
    li {
      color: #fff;
      margin-top:20px;
    }
    & > a{
      & > li {
        border:2px solid #64FFDA;
        border-radius:3px;
        color:#64FFDA;
        :hover {
		      cursor: pointer;
        }
      }
    }
  }
`;

const RightNav = ({ open, scrollHome, scrollAbout, scrollProjects, handleOpen }) => {

  return (
    <Ul open={open}>
      <li onClick={scrollHome}>Home</li>
      <li onClick={scrollAbout}>About</li>
      <li onClick={scrollProjects}>Projects</li>
      <li >Contact</li>
      <a href={Pdf} target="_blank" style={{textDecoration:"none"}}><li >Resume</li></a>
    </Ul>
  )
}

RightNav.defaultProps = {
  scrollProjects: () => { },
  scrollAbout: () => { },
  scrollHome: () => { },
}

export default RightNav