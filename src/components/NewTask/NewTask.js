import useHttp from "../hooks/use-http";
import React, { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";

const NewTask = (props) => {
    const [error, setError] = useState(null);
  
    const fetch = async (taskText) => {
        try {
            const response = await fetch('https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', {
                method: 'POST',
                body: JSON.stringify({text: taskText}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error("Request Failed")
            }
    
            const responseData = await response.json()
    
            let id = responseData.name // firebase specific => 'name' contains generated id
            let task = {id: id, text: taskText}

            console.log(taskText)

            props.addTasks(task)
    
        } catch (error) {
            setError("Something went wrong!")
        }
        
    }

    return (
        <div>
        <TaskForm onAddTask={fetch}/>
        </div>
    )
   
};

export default NewTask