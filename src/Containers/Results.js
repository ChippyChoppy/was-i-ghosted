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


    return (
        <Main style={{
            backgroundImage: `url("${backgroundImg.imgUrl}")`
        }}>
            {/* <RandomBackgroundImage getImage={backgroundImg}/> */}
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
`

const Heading = styled.h1`
background: radial-gradient(circle, rgba(183,100,126,1) 65%, rgba(171,122,109,1) 75%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 4px 4px 2px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;
${'' /* height: 100px; */}
text-align: center;
vertical-align: middle;
margin: 10px 175px 50px;
padding: 20px;
font-size: 6vw;
`

const Affirmation = styled.div`
border: 8px ridge #b7647e;
background: radial-gradient( rgba(171,122,109,1) 70%, rgba(183,100,126,1) 85%, rgba(247,198,179,1) 100%);
border-radius: 15px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;background-color: rgba(171,122,109,1);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
text-align: center;
vertical-align: middle;
width: 40%;
height: 350px;
margin: 10x;
font-size: 3vw;
`

const Button = styled.button`
background: radial-gradient(circle, rgba(183,100,126,1) 35%, rgba(171,122,109,1) 70%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;

width: 100%;
height: 125px;
font-size: 2.3vw;
`

const ButtonContainer = styled.div `
display: flex;
${'' /* border: 5px solid red; */}
flex-flow: column wrap;
justify-content: space-evenly;
align-items: center;
height: 350px;
width: 35%;

`