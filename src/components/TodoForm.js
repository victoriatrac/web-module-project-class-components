import React from 'react'

class TodoForm extends React.Component {

    constructor() {
        super()
        this.state = {
            newTaskName: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newTaskName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.newTaskName)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.newTaskName}
                    type="text"
                    name="task"
                    onChange={this.handleChanges}
                />
                <button>Add task</button>
            </form>
        )
    }
}

export default TodoForm