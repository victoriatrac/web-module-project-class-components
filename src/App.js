import React from 'react'
// import ReactDOM from 'react-dom'

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
// import './Todo.css'
// import { render } from '@testing-library/react'

const global_tasks = [
  {
      name: 'Feed the dog',
      id: 123,
      done: false
  },
  {
      name: 'Water the plants',
      id: 124,
      done: false
  }
]

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          tasks: global_tasks
      }
  }

  addTask = (taskName) => {
      this.setState({
          tasks:
              [
                  ...this.state.tasks,
                  {
                      name: taskName,
                      id: Date.now(),
                      done: false
                  }
              ]
      })
  }

  toggleDone = (taskId) => {
      this.setState({
          tasks: this.state.tasks.map(task => {
              if (task.id === taskId) {
                  return {
                      ...task,
                      done: !task.done
                  }
              }
              return task;
          })
      })
  }

  clearDone = () => {
      this.setState({
          tasks: this.state.tasks.filter(task => {
              return !task.done
          })
      })
  }

  render() {
      return(
          <div className='App'>
              <div className='header'>
                  <h1>To Do</h1>
                  <TodoForm addItem={this.addItem} />
              </div>
              <TodoList
                  clearDone={this.clearDone}
                  tasks={this.state.tasks}
                  toggleDone={this.toggleDone}
              />
          </div>
      )
  }
}

export default App