import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDoData = [
  {
    task: 'finish this project',
    id: 123,
    completed: false
  },
  {
    task: 'pet dog',
    id: 321,
    completed: false
  },
  {
    task: 'eat dinner',
    id: 456,
    completed: false,
  },
  {
    task: 'take a shower',
    id: 789,
    completed: false
  }
]




class App extends React.Component {
  state = {
    data: toDoData
  }

  handleAddTask = (taskName) => {

    const task = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    const newToDoList = [...this.state.data, task]

    this.setState ({
      data: newToDoList
    })
  }

  handle

  handleCompleted = () => {
    const newToDoList = this.state.data.filter(task => {
      return (!task.completed)
    })
    this.setState({
      data: newToDoList
    })
  }


  handleToggle = (taskId) => {
    this.setState({
      data: this.state.data.map(task=>{
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return(task)
      })
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList data ={this.state.data} handleToggle={this.handleToggle}/>
        <TodoForm handleAddTask={this.handleAddTask} handleCompleted={this.handleCompleted}/>
      </div>
    );
  }
}

export default App;
