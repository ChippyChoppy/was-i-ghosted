import React, { useState } from 'react'

const Results = ({resultsArr}) => {
console.log(resultsArr )

    const ghostedResults = () => {
        // const randomQuotes = Math.floor(Math.random() * resultsArr.length - 1)
        // const quoteDisplay = 
        return resultsArr[Math.floor(Math.random() * resultsArr.length)]
    }

    return (
        <div>
            <h1>Not ghosted</h1>
            <p>{ghostedResults()}</p>
            <button onClick={ghostedResults}>Validate me again plz</button>
        </div>
    )
}

export default Results