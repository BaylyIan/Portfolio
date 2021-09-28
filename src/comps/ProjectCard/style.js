import styled from 'styled-components'

export const Container = styled.div`
    padding: 10px 20px 10px 20px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 0.4s ease-in;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    aspect-ratio:1/ 1.6;
    /* min-height:500px; */
    align-items:center;
    justify-content: center;
    border:1px solid #222222;
    & > h2 {
        color:white;
        margin:0;
    }
`;
export const Cover = styled.div`
    width:100%;
    aspect-ratio: 1 / 1;
    display:flex;
    object-fit:cover;
    overflow:hidden;
    /* border:1px solid purple; */
    & > img {
        height:100%;
        width:100%;
        object-fit:cover;
        overflow: hidden;
    }
`;

export const Info = styled.div`
width:100%;
display:flex;
flex-direction:column;
/* border:1px solid purple; */
padding:10px 0px 0px 0px;
min-height:250px;
    & > h2{
        color:white;
        margin:0;
        font-size:20px;
    }
    & > p{
        color:white;
        margin:0;
        font-size:14px;
        font-weight:700;
    }

`;