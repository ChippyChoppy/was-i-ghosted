import React from 'react'
import ghosted from '../Images/ghosted.gif'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Landing = () => {
  const history = useHistory()

  const buttonClick = () => {
    history.push('/questions')
  }

  return (

    <Bg>
      <BackgroundImage src={ghosted} alt="blurry shiny hearts" />
      <button onClick={buttonClick}> Come on in! Let's find out!</button>
    </Bg>

  )
}

export default Landing

const BackgroundImage = styled.img`
  height: auto;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
`

const Bg = styled.div`
  
  ${'' /* top: -50%; 
  left: -50%; 
  width: 200%; 
  height: 200%; */}
`

const EnterButton = styled.button`
  height: 35px;
  text-align: center;
  display: flex;
  align-self: flex-end;  
`