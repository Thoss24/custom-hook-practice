import React, { useRef } from "react";

const TaskForm = (props) => {
    const taskRef = useRef()
    

    const addTask = (event) => {
        event.preventDefault()

        const currentValue = taskRef.current.value
        props.onEnterTask(currentValue)
    }

    return (
        <form onSubmit={addTask}>
        <label htmlFor="task"></label>
        <input type="text" id="task" ref={taskRef}/>
        <button>ADD TASK</button>
    </form>
    )
}

export default TaskForm