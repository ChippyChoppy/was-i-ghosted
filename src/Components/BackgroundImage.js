import React, { useState } from 'react'
import { backgroundImages } from './JBackgroundImgs'
import styled from 'styled-components'

const RandomBackgroundImage = () => {
    const [backgroundImg, setBackgroundImg] = useState(backgroundImages[Math.floor(Math.random() * backgroundImages.length)])

    console.log(backgroundImg.imgUrl)
    return (
        <div>
            <Background src={backgroundImg.imgUrl} alt={backgroundImg.alt} />
            this is a photo
        </div>
    )
}

export default RandomBackgroundImage

const Background = styled.img `
height: 100vh;
width: 100vw;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
// style={{ backgroundImage: `url({backgroundImg.imgUrl})`}}