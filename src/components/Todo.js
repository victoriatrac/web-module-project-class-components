import React from 'react'

const Todo = props => {
    const handleClick = e => {
        e.preventDefault()
        props.toggleCompleted(props.task.id)
    }

    return (
        <div
            onClick={handleClick}
            className={`task${props.task.complete ? ' complete' : ''}`}
        >
            <p>{props.task.thing}</p>
        </div>
    )
}

export default Todo