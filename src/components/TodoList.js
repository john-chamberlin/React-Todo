// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'



class TodoList extends React.Component {

    render() {
        const {data} = this.props   
        return (
            <div>
                {data.map(item => (
                    <Todo key={item.id} item={item} handleToggle={this.props.handleToggle}/>
                ))}
            </div>
        )
    }
}

export default TodoList