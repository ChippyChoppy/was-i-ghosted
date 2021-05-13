import React, { useState } from 'react'
import Landing from './Landing'
import QuestionsContainer from './QuestionsContainer'
import Results from './Results'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ghostedArray } from './GhostedArray'
import {notGhostedArray } from './NotGhostedArray'

const ViewContainer = () => {
    const [ghosted, setGhosted] = useState(false)
    console.log(ghosted)

    return (
        <>
            <Switch>
            <Route 
                exact path="/"
                render={() => {
                    return (
                        <Redirect to="/home" />
                    )
                }}
            />      
                <Route path='/home'>
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