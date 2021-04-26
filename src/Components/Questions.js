import React, { useState } from 'react';

const Questions = ({isGhosted}) => {
    const [dates, setDates] = useState("once")
    const [kiss, setKiss] = useState("heck yes!")
    const [talk, setTalk] = useState("yes")
    console.log(dates, kiss, talk)

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
        if (talk === "yes" && kiss === "nope" && dates === "once" ) {
            isGhosted = true
        }
        console.log(isGhosted)
    }
    
    return (
        <div>
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
        <br/>
        <button onClick={ghostHandler} >Was I ghosted?</button>
        </form>
        </div>
    )
}

export default Questions