import React, { useState } from "react";
import styled from 'styled-components';
import meditracker from './medi_bg.png';
import walk from './walk_bg.png';
import crm from './crm.png'
import replay from './replay.png'
import crypto from './crypto.png'
import { FiGithub } from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { FiLayers } from 'react-icons/fi';

import ProjectCard from "../ProjectCard";

const Container = styled.div`
    display:flex;
    flex-direction:row;
    /* padding-bottom:3rem; */
    z-index:1;
    min-height:auto;
    /* background-color:#BBB; */
    @media (max-width: 768px) {
      flex-direction:column;
    }
`;
const Title = styled.div`
    flex:1;
    width:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:-1;
    /* background-color:green; */
    & > h2 {
        transform: rotate(270deg);
    }
    @media (max-width: 768px) {
        & > h2 {
        transform: rotate(0)
    }
    }
`;
const Content = styled.div`
    width:100%;
    display: grid;
    grid-template-columns: minmax(200px, auto);
    /* grid-gap: 20px; */
    min-height: auto;
    @media (min-width: 550px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(2, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 750px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(3, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 980px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(4, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1200px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(5, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1650px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(6, minmax(200px, 1fr))' : null};
        padding: 10px;
    }
    @media (min-width: 1900px) {
        grid-template-columns:${({ toggle }) => toggle ? 'repeat(7, minmax(200px, 1fr))' : null};
        padding: 20px;
    }

    @media (min-width: 750px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(2, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1000px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(3, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1250px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(4, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1450px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(5, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 1750px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(6, minmax(200px, 1fr))'};
        padding: 10px;
    }
    @media (min-width: 2090px) {
        grid-template-columns:${({ toggle }) => toggle ? null : 'repeat(7, minmax(200px, 1fr))'};
        padding: 20px;
    } 
`;
const Project = styled.img`
    width:35%;
    max-width:1000px;
    flex:1;
    height:17rem;
    object-fit:cover;
    @media (max-width: 656px) {
        width:20em;
        height:20rem;
        margin-top:1rem;
    }
`;

const ProjCont = styled.div`
    width:70vw;
    height:auto;
    /* background-color:red; */
    display:flex;
    flex-direction:row;
    margin:1rem;
    @media (max-width: 656px) {
        flex-direction:column;
        width:20rem;
        margin-top:1rem;
    }
`;

const Projects = ({ }) => {

    // const [hover, setHover] = useState(false);

    const projects = [
        {
            title: 'CRM System',
            role: 'Front-end Developer',
            desc: 'A Customer relations managment platform built for the Burnaby Board of Trade. Built with Next.js, Node.js, ServerSide rendering, dynamic routes, custom react hooks.',
            github: 'https://github.com/HenryBcit/BBoT',
            demo: 'https://crm.techiesoftomorrow.com/',
            image:crm,
            extra1:'Email: ianbaylyy@gmail.com',
            extra2:'Password: admin'
        },
        {
            title: 'Replay',
            role: 'Full-Stack Developer',
            desc: 'A social media application built around the love of music. Create playlists and share them with your fiends.',
            github: 'https://github.com/BaylyIan/replay-v2',
            demo: 'https://replay-v2.vercel.app/',
            image:replay,
        },
        {
            title: 'Cryptoverse',
            role: 'Full-Stack Developer',
            desc: 'A cryptocurrency platform that shows live updates on crypto prices, trends, news, exhanges, and more. Built with React, Redux Toolkit, and Rapid API.',
            github: 'https://github.com/BaylyIan/cryptoapp',
            demo: 'https://cryptoapp-khaki.vercel.app/',
            image:crypto
        },
        {
            title: 'Medicine Tracker',
            role: 'Full-Stack Developer ',
            desc: 'Our team was assigned to build a to-do list application with various sorting/filtering features features. Using React, MySql and Express, we built a medication tracker which allows you to keep track of all your medications for the day. ',
            github: "https://github.com/RinaHan/Tracking-List",
            demo: "https://tracking-list-q42m6u091.vercel.app/",
            image:meditracker
        },
        {
            title: 'Walk',
            role: 'Front-end Developer',
            desc: 'Walk is the first social media dating app built for dogs. With a simple, intuitive user interface complimented by a attractive colour pallete, Walk connects people through their common love of dogs. Built in React Native, features included profile setup, posts, likes, chatting, and more..',
            github: 'https://github.com/BaylyIan/Walk',
            demo: 'https://www.figma.com/proto/JtKPACD7VGerurfYImEY8J/WALK?node-id=1%3A82&scaling=min-zoom',
            image:walk
        }

    ]

    return <Container>
        <Title>
            {/* <h2>Projects</h2> */}
        </Title>
        <Content>

            {projects ? projects.map((o, i) => {
                return (
                    <ProjectCard 
                        title={o.title}
                        role={o.role}
                        desc={o.desc}
                        github={o.github}
                        demo={o.demo}
                        image={o.image}
                        extra1={o.extra1}
                        extra2={o.extra2}
                    />
                )
            }) : null}

            {/* <ProjCont>
                <Project src={meditracker}/>
                <Info>
                    <div>
                    <h2>Replay</h2>
                    <p style={{fontStyle:"italic", fontWeight:"300"}}>Full-stack developer</p> 
                    <p>A playlist sharing application built using React, Node.js, Express, MySQL, and Heroku.   </p>
                    </div>
                    <div>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/BaylyIan/Replay">
                        <FiGithub size={27} style={{color:"white"}}/>
                    </a>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://tracking-list-q42m6u091.vercel.app/">
                        <FiPlay size={27} style={{color:"white", marginLeft:"20px"}}/>
                    </a>
                    </div>
                </Info>
            </ProjCont> 

            <ProjCont>
                <Project src={meditracker}/>
                <Info>
                    <div>
                    <h2>Medication Tracker</h2>
                    <p style={{fontStyle:"italic", fontWeight:"300"}}>Front-end developer / UX/UI Designer</p> 
                    <p>Our team was assigned to build a to-do list application with various sorting/filtering features features. Using React, MySql and Express, we built a medication tracker which allows you to keep track of all your medications for the day.   </p>
                    </div>
                    <div>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/RinaHan/Tracking-List">
                        <FiGithub size={27} style={{color:"white"}}/>
                    </a>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://tracking-list-q42m6u091.vercel.app/">
                        <FiPlay size={27} style={{color:"white", marginLeft:"20px"}}/>
                    </a>
                    </div>
                </Info>
            </ProjCont>

            <ProjCont>
                <Project src={walk}/>
                <Info>
                    <div>
                    <h2>Walk</h2>
                    <p style={{fontStyle:"italic", fontWeight:"300"}}>Front-end developer / UX/UI Designer</p> 
                    <p>Walk is the first social media dating app built for dogs. With a simple, intuitive user interface complimented by a attractive colour pallete, Walk connects people through their common love of dogs. Built in React Native, features included profile setup, posts, likes, chatting, and more.</p>
                    </div>
                    <div>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://github.com/BaylyIan/Walk">
                        <FiGithub size={27} style={{color:"white"}}/>
                    </a>
                    <a target="_blank" style={{textDecoration:"none"}} href="https://www.figma.com/proto/JtKPACD7VGerurfYImEY8J/WALK?node-id=1%3A82&scaling=min-zoom">
                        <FiPlay size={27} style={{color:"white", marginLeft:"20px"}}/>
                    </a>
                    </div>
                </Info>
            </ProjCont>  */}


        </Content>
    </Container>
}

Projects.defaultProps = {


}

export default Projects;