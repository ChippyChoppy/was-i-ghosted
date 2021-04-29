import React from 'react'
import Questions from '../Components/Questions'

const QuestionsContainer = ({isGhosted}) => {
    return (
        <div>
            <h1>questions</h1>
            <Questions isGhosted={isGhosted} />
        </div>

    )
}

export default QuestionsContainer