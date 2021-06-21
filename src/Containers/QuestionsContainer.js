import React, { useState, useEffect } from 'react'
import Questions from '../Components/Questions'
import brick from '../Images/QuestionsBackground.jpg'
import midBrick from '../Images/QuestionsMidCentered.png'
import smallBrick from '../Images/QuestionsMobileBLeft.png'
import styled from 'styled-components'

const QuestionsContainer = ({isGhosted, ghostState}) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

    const bricksAndHeart = (windowWidth >= 651 && windowWidth <= 1000 ? midBrick : (windowWidth <= 650 ? smallBrick : brick ))

    return (
        <Main style={{
            backgroundImage: `url("${bricksAndHeart}")`
        }}>
            <Heading>Were you ghosted?</Heading>
            <Questions isGhosted={isGhosted} ghostState={ghostState} />
        </Main>

    )
}

export default QuestionsContainer

const Main = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: flex-start;
height: 100%;
width: 100%;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
font-family: modesto-expanded,serif;
font-weight: 400;
font-style: normal;
@media (max-width: 1000px) {
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-evenly;
}
`
// const Heading = styled.h1 `
// background-color: pink;
// color: gray;
// width: 100%;
// height: 50px;
// text-align: center;
// vertical-align: middle;
// margin: 20px 100px 35px;
// padding: 50px;
// font-size: 3em;
// `

const Heading = styled.h1`
background: radial-gradient(circle,rgba(183,100,126,1) 75%,rgba(171,122,109,1) 85%,rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 4px 4px 2px #281920;
border: 6px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e;
width: 100%;
text-align: center;
vertical-align: middle;
margin: 3% 13% 0%;
padding: 1.3%;
font-size: 5vw;
font-family: modesto-expanded,serif;
font-weight: 400;
font-style: normal;
@media (max-width: 1000px) {
    width: 75%;
    margin: 0%;
    padding: 3%;
    font-size: 9vw;
}
@media(max-width: 750px) {
    width: 75%;
    margin: 0%;
    padding: 3%;
    font-size: 10vw;
}
`

