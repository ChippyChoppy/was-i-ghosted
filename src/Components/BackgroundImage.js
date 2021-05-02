import React, { useState } from 'react'
// import { backgroundImages } from './JBackgroundImgs'
import styled from 'styled-components'

const RandomBackgroundImage = ( {getImage }) => {
    fetch("https://api.unsplash.com/search/photos?page=1&query=fireworks")
        .then(response => response.json())
        .then(array => console.log(array))

    console.log(getImage)
    return (
        <Default>
            <Background src={getImage.imgUrl} alt={getImage.alt} />
        </Default>
    )
}

export default RandomBackgroundImage

const Default = styled.div `
    position: center
    background-color: black;
`

const Background = styled.img `
height: auto;
width: 100vw;
background-position: center;
background-repeat: no-repeat;
object-fit: cover;
`
// style={{ backgroundImage: `url({backgroundImg.imgUrl})`}}