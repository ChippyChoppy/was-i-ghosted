import { getElementError } from '@testing-library/dom'
import React from 'react'
// import landingvideo from '../Videos/landingvideo.mp4'
import ghosted from '../Images/ghosted.gif'
import styled from 'styled-components'


const Landing = () => {
  return (

    <Bg>
      <BackgroundImage src={ghosted} alt="blurry shiny hearts" />
      <button > Come on in! Let's find out!</button>
    </Bg>

  )
}

export default Landing

const BackgroundImage = styled.img`
  background-image: cover;
  position: fixed; 
  ${'' /* position: absolute;  */}
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  margin: auto; 
  min-width: 50%;
  min-height: 50%;
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