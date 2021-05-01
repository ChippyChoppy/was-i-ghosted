import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Questions = ({ isGhosted, ghostState }) => {
    const history = useHistory()
    const [dates, setDates] = useState("once")
    const [kiss, setKiss] = useState("heck yes!")
    const [talk, setTalk] = useState("yes")

    const dateHandler = (e) => {
        setDates(e.target.value)
    }

    const kissHandler = (e) => {
        setKiss(e.target.value)
    }

    const talkHandler = (e) => {
        setTalk(e.target.value)
    }

    const ghostHandler = (e) => {
        e.preventDefault()
        if (talk === "yes" && kiss === "nope" && dates === "once" || talk === "no") {
            isGhosted(ghostState = false)
            history.push('/results')
        } else {
            isGhosted(ghostState = true)
            history.push('/results')
        }
        // else {
        //     isGhosted(ghostState = false)
        //     history.push('/results')
        // }

        console.log(ghostState)
    }

    return (
        <div>
            <Questionaire>
                <form>
                    <h3>How many times did y'all see each other?</h3>
                    <select onChange={dateHandler}>
                        <option value="once">Once</option>
                        <option value="twice">Twice</option>
                        <option value="thrice">Thrice or more</option>
                    </select>
                    <h3>Did y'all kiss... or more?</h3>
                    <select onChange={kissHandler}>
                        <option value="heck yes!">Heck yes!</option>
                        <option value="nope">Nope</option>
                    </select>
                    <h3>Was contact made or attempted after?</h3>
                    <select onChange={talkHandler}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </form>
            </Questionaire>
            <Button onClick={ghostHandler} >Was I ghosted?</Button>
        </div>
    )
}

export default Questions

const Questionaire = styled.div `
border: 4px solid black;
height: auto;
`

const Button = styled.button `
width: 20%;
height: 25%;
`