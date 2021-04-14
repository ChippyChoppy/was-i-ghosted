import React from 'react'
import landingvideo from '../Videos/landingvideo.mp4'


const Landing = () => {
    return (
        <div>
            <video autoplay muted loop  >
                <source src={landingvideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Landing