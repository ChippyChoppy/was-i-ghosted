import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { backgroundImages } from './JBackgroundImgs'
import styled from 'styled-components'

const Results = ({ resultsArr, isGhosted }) => {
    const history = useHistory()
    const [affirmation, setAffirmation] = useState(resultsArr[Math.floor(Math.random() * resultsArr.length)])
    console.log(resultsArr, isGhosted)
    const [backgroundImg, setBackgroundImg] = useState(backgroundImages[Math.floor(Math.random() * backgroundImages.length)])


    const ghostedResults = () => {
        setAffirmation(resultsArr[Math.floor(Math.random() * resultsArr.length)])
        setBackgroundImg(backgroundImages[Math.floor(Math.random() * backgroundImages.length)])
    }


    return (
        <Main style={{
            backgroundImage: `url("${backgroundImg.imgUrl}")`
        }}>
            {/* <RandomBackgroundImage getImage={backgroundImg}/> */}
            <Heading>{isGhosted ? "You were ghosted" : "You weren't ghosted!"}</Heading>
            <Affirmation>{affirmation}</Affirmation>
            <Button onClick={ghostedResults}>Validate me again plz</Button>
            <Button onClick={() => history.push('/questions')}>back</Button>
        </Main>
    )
}

export default Results

const Main = styled.div `
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: flex-start;
height: 100%;
width: auto;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Heading = styled.h1 `
background-color: pink;
color: gray;
width: 100%;
height: 100px;
text-align: center;
vertical-align: middle;
margin: 20px 150px 50px;
padding: 50px;
font-size: 5em;
`

const Affirmation = styled.p `
border: 2px solid black;
background-color: gray;
color: pink;
width: 48%;
height: auto;
margin: 45px;
`

const Button = styled.button `
width: 20%;
height: 25%;
`