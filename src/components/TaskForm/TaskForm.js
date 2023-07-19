import React, { useRef } from "react";

const TaskForm = (props) => {
    const taskRef = useRef()
    

    const addTask = (event) => {
        event.preventDefault()

        const currentValue = taskRef.current.value
        props.onAddTask(currentValue)
    }

    return (
        <form onSubmit={addTask}>
        <label htmlFor="task"></label>
        <input type="text" id="task" ref={taskRef}/>
    </form>
    )
}

export default TaskForm