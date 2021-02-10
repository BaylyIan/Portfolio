import React, {useState} from 'react';
import styled from 'styled-components';
import codinggreen from './coding-green.png';
import codinggrey from './coding-grey.png';
import paintbrushgreen from './paint-brush-green.png';
import paintbrushgrey from './paint-brush-grey.png';

const Container = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    margin-top:3.1vh;
    padding:4vw;
`;
const Icon = styled.img`
    width:30px;
    height:30px;
    display:${props => props.showIcon ? "flex" : "none"};
`;
const Bar = styled.div`
    width:100%;
    height:2px;
    background-color:${props => props.color ? "#64FFDA" : "#3a3a3a"};
`;

const Code = styled.div`
    width:100%;
    height:auto;
    display:${props => props.showText ? "flex" : "none"};
    flex-direction:row;
    justify-content:space-evenly;
`;
const Art = styled.div`
    width:100%;
    height:auto;
    display:${props => props.showText ? "flex" : "none"};
    flex-direction:row;
    justify-content:center;
`;

const Skills = () => {

const [color, setColor] = useState(true);
const [icon, setIcon] = useState(true);
const [text, setText] = useState(true);

const handleClick = () =>{
    setColor(!color);
    setIcon(!icon);
    setText(!text)
}
    
    return<Container>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} onClick={handleClick}>
           <Icon src={codinggreen}
           showIcon={icon}/>
           <Icon src={codinggrey}
           showIcon={!icon}/>
           <Icon src={paintbrushgreen}
           showIcon={!icon}/>
           <Icon src={paintbrushgrey}
           showIcon={icon}/>
        </div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
           <Bar/><Bar color={color} style={{borderRadius:"4px", height:"2px"}}/><Bar />
           <Bar/><Bar color={!color} style={{borderRadius:"4px", height:"2px"}}/><Bar />
        </div>
        <Code showText={text}>
            <div>
                <h3>- HTML</h3>
                <h3>- (S)CSS</h3>
                <h3>- PHP</h3>
                <h3>- MySQL</h3>
                <h3>- WordPress</h3>
            </div>
            <div>
                <h3>- JavaScript(ES6+)</h3>
                <h3>- React</h3>
                <h3>- Node.JS</h3>
                <h3>- Express</h3>
            </div>
        </Code>
        <Art showText={!text}>
            <div>
                <h3>- Adobe Illustrator</h3>
                <h3>- Adobe Photoshop</h3>
                <h3>- Adobe XD</h3>
                <h3>- Figma</h3>
                <h3>- Invision</h3>
            </div>
        </Art>

    </Container>
}

Skills.defaultProps = {

}
export default Skills;