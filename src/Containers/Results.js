import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { backgroundImages } from './JSONBackgroundImgs'
import styled from 'styled-components'

const Results = ({ resultsArr, isGhosted }) => {
    const history = useHistory()
    const [affirmation, setAffirmation] = useState(resultsArr[Math.floor(Math.random() * resultsArr.length)])
    console.log(resultsArr.length, isGhosted)
    const [backgroundImg, setBackgroundImg] = useState(backgroundImages[Math.floor(Math.random() * backgroundImages.length)])

    const ghostedResults = () => {
        setAffirmation(resultsArr[Math.floor(Math.random() * resultsArr.length)])
        setBackgroundImg(backgroundImages[Math.floor(Math.random() * backgroundImages.length)])
    }
    console.log(backgroundImg)

    let fireworksArray = []

    fetch("https://api.unsplash.com/search/photos?page=1&query=fireworks", {
        headers: {
            Authorization:
                'Client-ID 5sTdeOlkmh46kJ2rOPqdr5RzHVFdcPoT8oemq80RP8A'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            fireworksArray = data.results
            console.log(fireworksArray)
        })

    return (
        <Main style={{
            backgroundImage: `url("${backgroundImg.imgUrl}")`
        }}>
            <Heading>
                {isGhosted ? "You were ghosted" : "You weren't ghosted!"}
            </Heading>
            <Affirmation>
                <p>{affirmation}</p>
            </Affirmation>
            <ButtonContainer>
                <Button onClick={ghostedResults}>
                    Another affirmation please
                </Button>
                
                <Button onClick={() => history.push('/questions')}>
                    Back to the Questions
                </Button>
            </ButtonContainer>
        </Main>
    )
}

export default Results

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
@media (max-width: 1440px) {
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-evenly;
}
@media (max-width: 750px) {
  justify-content: space-evenly;
}
`

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
@media (max-width: 1440px) {
    width: 75%;
    margin: 0%;
    padding: 3%;
    font-size: 9vw;
}
@media (max-width: 750px) {
    width: 75%;
    margin: 0%;
    padding: 3%;
    font-size: 10vw;
}
`

const Affirmation = styled.div`
border: 6px ridge #b7647e;
background: radial-gradient( rgba(183,100,126,1) 75%, rgba(171,122,109,1) 85%, rgba(247,198,179,1) 100%);
border-radius: 15px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;
background-color: rgba(171,122,109,1);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
text-align: center;
vertical-align: middle;
width: 40%;
min-height: auto;
margin: 10x;
font-size: 3vw;
font-family: modesto-text,serif;
font-weight: 400;
font-style: normal;
@media (max-width: 1440px) {
    width: 80%;
    font-size: 5vw;
    margin: 0%;
}
@media (max-width: 750px) {
    width: 93%;
    font-size: 7vw;
    margin: 0%
}
`

const Button = styled.button`
    background: radial-gradient(circle,rgba(183,100,126,1) 75%,rgba(171,122,109,1) 85%,rgba(247,198,179,1) 100%);
    color: #eee2e0;
    text-shadow: 3px 3px 3px #281920;
    border: 6px ridge #b7647e;
    border-radius: 75px;
    box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;
    width: 100%;
    font-size: 1.9vw;
    font-family: modesto-expanded,serif;
    font-weight: 400;
    font-style: normal;
    margin: 5% 2% 0% 2%;
    padding: 5%;
    @media (max-width: 1440px) {
        margin: 5% 0% 9% 0%;
        font-size: 3vw;
        padding: 4%;
        width: 45%;
    }
    @media (max-width: 750px) {
        width: 100%;
        height: auto;
        font-size: 6vw;
        padding: 4%;
        margin: 0%;
    }
`

const ButtonContainer = styled.div `
display: flex;
${'' /* border: 5px solid red; */}
flex-flow: column wrap;
justify-content: space-evenly;
align-items: center;
max-height: 500px;
width: 35%;
@media (max-width: 1440px) {
    width: 95%;
    flex-direction: row;
    flex-wrap: no-wrap;
}
@media (max-width: 750px) {
    flex-direction: column;
    flex-wrap: no-wrap;
    justify-content: space-between;
    width: 88%;
    height: 33%;
}
`