import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Results = ({resultsArr, isGhosted}) => {
    const history = useHistory()
    const [ affirmation, setAffirmation ] = useState(resultsArr[Math.floor(Math.random() * resultsArr.length)])
        console.log(resultsArr, isGhosted )
        
        const ghostedResults = () => {
            setAffirmation(resultsArr[Math.floor(Math.random() * resultsArr.length)])
    }

    return (
        <div>
            <h1>{isGhosted ? "Ghosted" : "Not Ghosted"}</h1>
            <p>{affirmation}</p>
            <button onClick={ghostedResults}>Validate me again plz</button>
            <button onClick={() => history.push('/questions')}>back</button>
        </div>
    )
}

export default Results