import React from 'react'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './Todo.css'

const tasks = [
  {
    thing: 'Walk Kilo',
    id: 1,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      tasks: tasks
    }
  }

  // addTask method
  addTask = newTaskName => {
    this.setState({
      tasks: [...this.state.tasks, {
        thing: newTaskName,
        id: Date.now(),
        complete: false
      }]
    })
  }

  // toggleCompleted method
  toggleCompleted = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            complete: !task.complete
          }
        }
        return task
      })
    })
  }

  // clearCompleted button
  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        if (task.complete) {
          return false
        }
        return true
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTask={this.addTask}
        />
        <TodoList
          tasks={this.state.tasks}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
