import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Results = ({ resultsArr, isGhosted }) => {
    const history = useHistory()
    const [affirmation, setAffirmation] = useState(resultsArr[Math.floor(Math.random() * resultsArr.length)])
    console.log(resultsArr, isGhosted)
    const [backgroundImg, setBackgroundImg] = useState("https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZXdvcmtzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")

    const ghostedResults = () => {
        setAffirmation(resultsArr[Math.floor(Math.random() * resultsArr.length)])
        setBackgroundImg(backgroundArr[Math.floor(Math.random() * backgroundArr.length)])
    }

    let backgroundArr = ["https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmlyZXdvcmtzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1548386135-b47fa5a79ae6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlyZXdvcmtzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1535408913330-a71d0a3e29ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpcmV3b3Jrc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]

    return (
        <div>
            <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1535408913330-a71d0a3e29ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZpcmV3b3Jrc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")` }} >
                <h1>{isGhosted ? "Ghosted" : "Not Ghosted"}</h1>
                <p>{affirmation}</p>
                <button onClick={ghostedResults}>Validate me again plz</button>
                <button onClick={() => history.push('/questions')}>back</button>
            </div>

        </div>
    )
}

export default Results

const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
`