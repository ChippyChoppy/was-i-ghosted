import React from 'react'
import Questions from '../Components/Questions'
import brick from '../Images/QuestionsBackground.jpg'
import styled from 'styled-components'

const QuestionsContainer = ({isGhosted, ghostState}) => {
    return (
        <Main style={{
            backgroundImage: `url("${brick}")`
        }}>
            <Heading>Were you ghosted?</Heading>
            <Questions isGhosted={isGhosted} ghostState={ghostState} />
        </Main>

    )
}

export default QuestionsContainer

const Main = styled.div `
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
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
height: 50px;
text-align: center;
vertical-align: middle;
margin: 20px 100px 35px;
padding: 50px;
font-size: 3em;
`

