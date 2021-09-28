import React from 'react';
import styled from 'styled-components';

import Footer from '../../comps/Footer';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import meditracker from './medi_bg.png';
import ax from './axios.png';
import sort from './sorting.png';
import map from './comp_map.png';
import al from './alert.png';
import {FiChevronLeft} from 'react-icons/fi';

const Image = styled.img`
    width:98%;
    height:auto;
    object-fit:cover;
    @media (max-width: 656px) {
        width:20em;
        height:auto;
        object-fit:cover;

    }
`;
const Bar = styled.div`
    width:90%;
    height:2px;
    background-color:#3A3A3A;
`;


const Med = () => {

    return <div className="main">
          <div className="content">
              <div className="back"><FiChevronLeft size={34} style={{color:"white"}}/></div>
            <div className="intro">
                <Image src={meditracker} />
                <p>This medication tracking application was created for my Advanced Dynamic Content Design class. The objective of this project was to create a to-do list with a creative spin. The application lets users implement their medications through a form, and asks to set a time that they wish to be reminded to take the medication. All medications are then displayed on the interface, and sorted based on time.</p>
                <p>Role</p>
                <p>Front-End Developer / UX/UI Designer</p>
                <p>Duration</p>
                <p>Janurary 2020 - February 2020</p>
                <p>UI/UX + Design</p>
                <p>InVision, Figma, Adobe Photoshop, Adobe Illustrator</p>
                <p>Development</p>
                <p>GitHub, React.js, Express, MySQL</p>
                <Bar />
            </div>
            <div className="axios">
                <h2>Axios</h2>
                <Image src={ax} />
                <p>- Other than building components and pages, my first challenge was to create functions to send and recieve data from the database. </p>
                <p>- utilized Axios Await to retrieve data and update the initial state of arrays</p>
                <p>- Created handler functions to retrieve values from form inputs and send a new medication to the database</p>
                <Bar />
            </div>
            <div className="sort">
                <h2>Sorting</h2>
                <Image src={sort} />
                <p>- Taking the original array of medications, filter functions where aplied to divide all medications into three seperate arrays by comparing the reminder time to the current time of day.</p>
                <p>- Sorting functions were developed to organize the arrays based on time and alphabetical order.</p>
                <p>- These functions are what differentiates this medication tracker from a regular to do list.</p>
                <Bar />
            </div>
            <div className="mapping">
                <h2>Component Mapping</h2>
                <Image src={map} />
                <p>- Each array of medications was then passed thorugh mapping functions, returning medicine components with personalized data from the database.</p>
                <Bar />
            </div>
            <div className="alert">
                <h2>Alert Feature</h2>
                <Image src={al} />
                <p>- I utalized useState, useImperativeHandle and forwardRef hooks to create an alert component that is then handled on the main page.</p>         
                <p>- Using the UseEffect hook, I was able to set an interval every 31 seconds to look for medication times that were equal to the current time to trigger the alert.</p>
            </div> 
          </div>
        <div className="footer"><Footer/></div>
    </div>
}

export default Med;
