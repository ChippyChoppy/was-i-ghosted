import React, { useState } from 'react'
import Landing from './Landing'
import QuestionsContainer from './QuestionsContainer'
import Results from './Results'
import { Switch, Route } from 'react-router-dom'

const ViewContainer = () => {
    const [ghosted, setGhosted] = useState(false)
    console.log(ghosted)

    let ghostedArray = ["sucks", "to", "be", "you"]
    let notGhostedArray = ["you", "don't", "suck", "they", "do"]


    return (
        <>
            <Switch>
                <Route path='/welcome'>
                    <Landing />
                </Route>
                <Route path='/questions'>
                    <QuestionsContainer isGhosted={setGhosted} ghostState={ghosted} />
                </Route>
                <Route path='/results'>
                    {ghosted ? <Results isGhosted={ghosted} resultsArr={ghostedArray} /> : <Results isGhosted={ghosted} resultsArr={notGhostedArray} />}
                </Route>
                

                
            </Switch>

        </>

    )
}

export default ViewContainer

// wasighosted.com -- > landing
// /questions -- > questions
// /results -- > results