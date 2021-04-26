import React,{ useState } from 'react'
import Landing from './Landing'
import QuestionsContainer from './QuestionsContainer'
import Results from './Results'

const ViewContainer = () => {
    const [ghosted, setGhosted] = useState(true)
    console.log(ghosted)

    let ghostedArray = ["sucks", "to", "be", "you"]
    let notGhostedArray = ["you", "don't", "suck", "they", "do"]

    return (
        <div>
            {/* <Landing /> */}
            <QuestionsContainer isGhosted={setGhosted} />
            
            {ghosted ? <Results ghosted={ghostedArray} /> : null}
        </div>
    )
}

export default ViewContainer

// wasighosted.com -- > landing
// /questions -- > questions
// /results -- > results