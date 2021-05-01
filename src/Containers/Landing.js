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

    <Bg style={{ backgroundImage: `url("${ghosted}")` }}>
      <Button onClick={buttonClick}> 
      Come on in! Let's find out!
      </Button>
    </Bg>

  )
}

export default Landing

const Bg = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-end;
align-items: flex-end;
height: 100%;
width: auto;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

const Button = styled.button`
  height: 35px;
  text-align: center;
  display: flex;
  align-self: flex-end;  
`