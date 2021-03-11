// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'

import Task from './Task'

const TaskList = props => {
    return (
        <div className='todo-list'>
            {props.tasks.map(task => (
                <Task key={task.id} task={task} toggleDone={props.toggleDone} />
            ))}
            <button onClick={props.clearDone} className='clear-btn'>
                Clear Complete
            </button>
        </div>
    )
}

export default TaskList