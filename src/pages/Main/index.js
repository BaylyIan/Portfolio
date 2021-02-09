import React from 'react';
import NavBar from '../../comps/NavBar';
import Title from '../../comps/Title';
import AboutText from '../../comps/AboutText';
import Skills from '../../comps/Skills';
import Projects from '../../comps/Projects';
import Footer from '../../comps/Footer';
import Side from '../../comps/Side';

const Main = () => {
    return <div className="main">
        <div className="nav">
            <NavBar />
        </div>
        <div className="title"><Title /></div>
        <div className="about">
            <AboutText />
            <Skills />
        </div>
        <div className="projects">
            <Projects />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
}

export default Main;
