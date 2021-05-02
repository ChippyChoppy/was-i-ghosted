import React from 'react'
import hearts from '../Images/GhostieGiphyBackground.gif'
import question from '../Images/GhostedLandingType.png'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Landing = () => {
  const history = useHistory()

  const buttonClick = () => {
    history.push('/questions')
  }

  return (

    <Bg style={{ backgroundImage: `url("${hearts}")` }}>
      <WasI src={question} />
      <Button onClick={buttonClick}> 
      Come on in! Let's find out!
      </Button>
    </Bg>

  )
}

export default Landing

const WasI = styled.img `
max-width: 65%;
height: 50%;
margin: 0px 0px 75px 0px;
`

const Bg = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: flex-end;
height: 100%;
width: auto;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
${'' /* border: 5px solid red; */}
`

const Button = styled.button`
background: radial-gradient(circle, rgba(183,100,126,1) 35%, rgba(171,122,109,1) 70%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;
width: 25%;
height: 125px;
font-size: 2.3vw;
${'' /* align-self: flex-end; */}
margin: 0px 45px 90px 0px
`