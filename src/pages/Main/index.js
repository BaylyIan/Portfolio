import React, {useRef, useState, useEffect} from 'react';
import NavBar from '../../comps/NavBar';
import Title from '../../comps/Title';
import AboutText from '../../comps/AboutText';
import Skills from '../../comps/Skills';
import Projects from '../../comps/Projects';
import Footer from '../../comps/Footer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


const Main = () => {
    const proj = useRef(null);
    const ab = useRef(null);
    const hom = useRef(null);
    const con = useRef(null);
    const scrollProjects = () => proj.current.scrollIntoView();
    const scrollHome = () => hom.current.scrollIntoView();
    const scrollAbout = () => ab.current.scrollIntoView();
    const scrollContact = () => con.current.scrollIntoView();

    return <div className="main">
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
