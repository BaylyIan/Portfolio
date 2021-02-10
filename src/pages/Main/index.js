import React, {useRef} from 'react';
import NavBar from '../../comps/NavBar';
import Title from '../../comps/Title';
import AboutText from '../../comps/AboutText';
import Skills from '../../comps/Skills';
import Projects from '../../comps/Projects';
import Footer from '../../comps/Footer';

const Main = () => {
    const proj = useRef(null);
    const ab = useRef(null);
    const hom = useRef(null);

    const scrollProjects = () => proj.current.scrollIntoView();
    const scrollHome = () => hom.current.scrollIntoView();
    const scrollAbout = () => ab.current.scrollIntoView();

    return <div className="main">
        <NavBar 
            scrollHome={scrollHome}
            scrollAbout={scrollAbout}
            scrollProjects={scrollProjects}
        />
            <div ref={hom}><Title /></div>
            <div ref={ab}className="about" >
            <AboutText />
            <Skills />
            </div>
        <div ref={proj} className="projects"><Projects /></div>
        <div><Footer /></div>
    </div>
}

export default Main;
