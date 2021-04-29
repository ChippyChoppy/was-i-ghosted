import React from 'react'
import Questions from '../Components/Questions'

const QuestionsContainer = ({isGhosted, ghostState}) => {
    return (
        <div>
            <h1>questions</h1>
            <Questions isGhosted={isGhosted} ghostState={ghostState} />
        </div>

    )
}

export default QuestionsContainer