import React from 'react'
import ghosties from '../Images/GhostieGiphy.gif'
import hearts from '../Images/ghostedbackground.png'
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
      <Ghosties src={ghosties} />
      <WasI src={question} />
      <Button onClick={buttonClick}> 
      Come on in! Let's find out!
      </Button>
    </Bg>

  )
}

export default Landing
const Ghosties = styled.img `
max-width: 50%;
align-self: right;
margin: 0px 30px 0px 0px;
`

const WasI = styled.img `
max-width: 65%;
align-self: flex-start;
margin: 0px 0px 25px 0px;
`


const Bg = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-end;
${'' /* align-items: flex-end; */}
height: 99%;
width: auto;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border: 5px solid red;
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
align-self: flex-end;
margin: 0px 45px 45px 0px
`