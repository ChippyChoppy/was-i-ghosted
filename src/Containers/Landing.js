import React, { useState, useEffect } from 'react'
import wideBackground from '../Images/GhostieGiphyBackground.gif'
import middleBackground from '../Images/ghostielanding1440max.gif'
import mobileBackground from '../Images/mobileBackground.gif'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const Landing = () => {
  const history = useHistory()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const buttonClick = () => {
    history.push('/questions')
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  const ghostsAndHearts = (windowWidth >=651 && windowWidth <= 1440 ? middleBackground : (windowWidth <= 650 ? mobileBackground : wideBackground ))
// if (windowWidth <= 650) {
//     ghostsAndHearts = mobileBackground
//   } else {
//     ghostsAndHearts = wideBackground
//   }

  return (

    <Bg style={{ backgroundImage: `url("${ghostsAndHearts}")` }}>
      <Title>Was I<br />Ghosted?</Title>
      <Button onClick={buttonClick} >
        Come on in!<br/>Let's find out!
      </Button>
    </Bg>

  )
}

export default Landing

const Bg = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: flex-end;
height: 100%;
width: auto;
overflow: hidden;
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 1440px) {
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: flex-end;
}
@media (max-width: 750px) {
  justify-content: center;
}
`

const Title = styled.p`
font-family: modesto-expanded,serif;
font-weight: 400;
font-style: normal;
max-width: 65%;
height: auto;
margin: 0% 0% 6% 0%;
font-size: 12vw;
color: #b7647e;
text-shadow: 8px 8px 6px #281920;
@media (max-width: 1440px) {
    margin: 0% 0% 6% 0%;
    text-align: center;
}
@media (max-width: 750px) {
  margin: 42% 0% 10% 0%;
  font-size: 12vw;
  width: 100%;
  text-shadow: 4px 4px 4px #281920;
}
`


const Button = styled.button`
font-family: modesto-expanded,serif;
font-weight: 400;
font-style: normal;
background: radial-gradient(circle, rgba(183,100,126,1) 35%, rgba(171,122,109,1) 70%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;
width: 21%;
height: auto;
font-size: 2vw;
margin: 0% 0% 8% 0%;
padding: 1.75%;
@media (max-width: 1440px) {
  width: 70%;
  padding: 3% 0%;
  font-size: 5vw;
}
@media (max-width: 750px) {
  width: 85%;
  padding: 6% 0%;
  font-size: 8vw;
  margin: 0%;
}
`