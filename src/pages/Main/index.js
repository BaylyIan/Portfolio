import React from 'react';
import NavBar from '../../comps/NavBar';
import Title from '../../comps/Title';
import AboutText from '../../comps/AboutText';
import Skills from '../../comps/Skills';
import Projects from '../../comps/Projects';
import Footer from '../../comps/Footer';

const Main = () => {
    return <div className="main">
        <NavBar />
        
            <Title />
            <div className="about">
            <AboutText />
            <Skills />
            </div>
        <Projects />
        <Footer />
    </div>
}

export default Main;
