import { getElementError } from '@testing-library/dom'
import React from 'react'
import landingvideo from '../Videos/landingvideo.mp4'
import styled from 'styled-components'


const Landing = () => {
    return (
        <div>
            <LandingVideo autoplay muted loop >
                <source src={landingvideo} type="video/mp4" />
            </LandingVideo>
            <EnterButton > Come on in! Let's find out!</EnterButton>
        </div>
    )
}

export default Landing

const LandingVideo = styled.video `
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  `
// const LandingDiv = styled.div `
//     height: 100%
//     display: flex;
//     flex-flow: row-reverse column-reverse;
// `


const EnterButton = styled.button`
  position: fixed;
  height: 35px;
  text-align: center;
  display: flex;
  align-self: flex-end;  
`