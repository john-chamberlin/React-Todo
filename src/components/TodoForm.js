import React from 'react'

class TodoForm extends React.Component {

    state = {
        inputValue: ''
    }

    handleChanges = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddTask(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} type= 'text' name='task' onChange={this.handleChanges}/>
                <button>Add Task</button>
                <button onClick = {this.props.handleCompleted}>Clear Completed</button>
            </form>
        )
    }
    
}

export default TodoForm;