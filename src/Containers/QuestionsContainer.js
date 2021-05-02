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
background: radial-gradient(circle, rgba(183,100,126,1) 65%, rgba(171,122,109,1) 75%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 4px 4px 2px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;
text-align: center;
vertical-align: middle;
margin: 10px 175px 50px;
padding: 20px;
font-size: 6vw;
`

