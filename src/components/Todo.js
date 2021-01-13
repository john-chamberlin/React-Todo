import React from 'react'
import './Todo.css'

const Todo = props => {
    const {item, handleToggle} = props

    const handleClick = () => {
        handleToggle(item.id)
    }
    return(
        <div onClick={handleClick} className={`item${item.completed ? ' completed' : ''}`}>
            <p>{item.task}</p>
        </div>
    )
}

export default Todo