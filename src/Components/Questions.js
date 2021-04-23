import React from 'react'

const Questions = () => {
    return (
        <form>
        <h3>How many times did y'all see each other?</h3>
        <select>
            <option value="once">Once</option>
            <option value="twice">Twice</option>
            <option value="thrice">Thrice</option>
        </select>
        <h3>Did y'all kiss... or more?</h3>
        <select>
            <option value="heck yes!">Heck yes!</option>
            <option value="nope">Nope</option>
        </select>
        <h3>Was contact made or attempted after?</h3>
        <select>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        </form>
    )
}

export default Questions