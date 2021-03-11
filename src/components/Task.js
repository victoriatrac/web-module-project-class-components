// {props.tasks.map(item => (
//     <div
//         onClick={() => toggleDone(props.task.id)}
//         className={`task${props.task.done ? ' complete' : ''}`}
//     >
//         <p>{props.task.done}</p>
//     </div>

import React from 'react'

const Task = props => {
    return (
        <div
            onClick={() => props.toggleDone(props.task.id)}
            className={`task${props.task.done ? ' done' : ''}`}>
                <p>{props.task.name}</p>
            </div>
    )
}

export default Task