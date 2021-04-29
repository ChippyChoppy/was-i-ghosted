import React, { useState } from 'react'

const Results = ({resultsArr}) => {
    const [ affirmation, setAffirmation ] = useState(resultsArr[Math.floor(Math.random() * resultsArr.length)])
        console.log(resultsArr )
        
        const ghostedResults = () => {
            setAffirmation(resultsArr[Math.floor(Math.random() * resultsArr.length)])
    }

    return (
        <div>
            <h1>Not ghosted</h1>
            <p>{affirmation}</p>
            <button onClick={ghostedResults}>Validate me again plz</button>
        </div>
    )
}

export default Results