import React from 'react'
import landingvideo from '../Videos/landingvideo.mp4'


const Landing = () => {
    return (
        <div>
            <video autoplay muted loop  >
                <source src={landingvideo} type="video/mp4" />
            </video>
            <button> Come on in! Let's find out!</button>
        </div>
    )
}

export default Landing