import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RandomBackgroundImage from '../Components/BackgroundImage'
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
        <Background style={{
            backgroundImage: `url("${backgroundImg.imgUrl}")`
        }}>
            {/* <RandomBackgroundImage getImage={backgroundImg}/> */}
            <h1>{isGhosted ? "Ghosted" : "Not Ghosted"}</h1>
            <p>{affirmation}</p>
            <button onClick={ghostedResults}>Validate me again plz</button>
            <button onClick={() => history.push('/questions')}>back</button>
        </Background>
    )
}

export default Results

const Background = styled.div `
height: auto;
width: 100vw;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
`