import { getElementError } from '@testing-library/dom'
import React from 'react'
// import landingvideo from '../Videos/landingvideo.mp4'
import ghosted from '../Videos/ghosted.gif'
import styled from 'styled-components'


const Landing = () => {
    return (
        <div>
            <BackgroundImage  src={ghosted} alt="Was I Ghosted?" />
               
            <EnterButton > Come on in! Let's find out!</EnterButton>
        </div>
    )
}

export default Landing

const BackgroundImage = styled.img `
  background-size: cover;
`


const EnterButton = styled.button`
  position: fixed;
  height: 35px;
  text-align: center;
  display: flex;
  align-self: flex-end;  
`