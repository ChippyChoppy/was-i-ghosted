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
        <Main>
            <Questionaire>
                <Form>
                    <h1>1. How many times did y'all see each other?</h1>
                    <Selection onChange={dateHandler}>
                        <option value="once">Once</option>
                        <option value="twice">Twice</option>
                        <option value="thrice">Thrice or more</option>
                    </Selection>
                    <h1>2. Did y'all kiss?</h1>
                    <Selection onChange={kissHandler}>
                        <option value="heck yes!">Heck yes!</option>
                        <option value="nope">Nope</option>
                    </Selection>
                    <h1>3. Was contact made or attempted after?</h1>
                    <Selection onChange={talkHandler}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Selection>
                </Form>
                <br></br>
            </Questionaire>
            <Button onClick={ghostHandler} >Was I ghosted?</Button>
        </Main>
    )
}

export default Questions
const Main = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: space-evenly;
align-items: flex-start;
height: 65%;
width: 100%;
overflow: hidden;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
align-items: center;
${'' /* border: 5px solid red; */}
`

const Questionaire = styled.div `
border: 8px ridge #b7647e;
background: radial-gradient( rgba(171,122,109,1) 70%, rgba(183,100,126,1) 85%, rgba(247,198,179,1) 100%);
border-radius: 15px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;background-color: rgba(171,122,109,1);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
width: 45%;
margin: 0px 25px
`

const Form = styled.form `
margin: 30px;
`

const Button = styled.button`
background: radial-gradient(circle, rgba(183,100,126,1) 35%, rgba(171,122,109,1) 70%, rgba(247,198,179,1) 100%);
color: #eee2e0;
text-shadow: 3px 3px 3px #281920;
border: 8px ridge #b7647e;
border-radius: 75px;
box-shadow: 0 4px 8px 0 #eee2e0, 0 6px 20px 0 #eee2e0;width: 100%;
width: 35%;
height: 125px;
font-size: 2.3vw;
align-self: flex-end;
margin: 0px 0px 65px 0px
`

const Selection = styled.select `
background-color: #eee2e0;
color: #281920;
border-radius: 10px;
width: 45%;
font-size: 1.5vw;
`
