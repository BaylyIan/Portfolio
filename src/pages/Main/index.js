import React, {useRef, useState, useEffect} from 'react';
import NavBar from '../../comps/NavBar';
import Title from '../../comps/Title';
import AboutText from '../../comps/AboutText';
import Skills from '../../comps/Skills';
import Projects from '../../comps/Projects';
import Footer from '../../comps/Footer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

const Modal = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    background-color:white;
    z-index:5;
    & > div {
        width:90%;
        height: 90vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        & > button {
        width:150px;
        height:50px;
        background-color:white;
        margin-top:20px;
        border:2px solid black;
        :hover{
            background-color:black;
            color:white;
        
        }
    }
    }
`;




const Main = () => {
    const proj = useRef(null);
    const ab = useRef(null);
    const hom = useRef(null);
    const con = useRef(null);
    const scrollProjects = () => proj.current.scrollIntoView();
    const scrollHome = () => hom.current.scrollIntoView();
    const scrollAbout = () => ab.current.scrollIntoView();
    const scrollContact = () => con.current.scrollIntoView();

    const [modal, setModal] = useState(true)

    return <div className="main">
        {modal &&<Modal>
            <div>
            <h1> I have a new portfolio! Check it out here:</h1>
            <button onClick={(e) => window.location = 'https://portfolio-v2-r5l20vvwn-baylyian.vercel.app/'}>New Site</button>
            <button onClick={()=> {
                setModal(false)
            }}>Close</button>

            </div>
        </Modal>}
         <div className="nav"><NavBar 
            scrollHome={scrollHome}
            scrollAbout={scrollAbout}
            scrollProjects={scrollProjects}
            scrollContact={scrollContact}
        /></div>


            <div ref={hom} className={`title`}><Fade left><Title scrollContact={scrollContact}/></Fade></div>
            <div ref={proj} className={`projects`}><Fade><Projects /></Fade></div>
            <div ref={ab} className={`about`} >
            <Fade><AboutText />
            <Skills /></Fade>
            </div>
            
        <div ref={con}><Footer/></div>
    </div>
}

export default Main;
