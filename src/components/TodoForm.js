import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            taskName: ''
        }
    }

    handleChanges = e => {
        this.setState({ taskName: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTask(this.state.taskName)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    value={this.state.taskName}
                    type='text'
                    name='task'
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm