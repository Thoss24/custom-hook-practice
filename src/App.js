import NewTask from "./components/NewTask/NewTask";
import React, { useState, useEffect } from "react";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasksArr, setTasksArr] = useState([])
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json');

      if (!response.ok) {
          throw new Error("Request Failed")
      }

      const responseData = await response.json()

      let tasksArray = []

      for (const key in responseData) {
        tasksArray.push({
          id: key, 
          text: responseData[key].text
        });
      }

      setTasksArr(tasksArray)
  } catch (error) {
      setError("Something went wrong!")
  }
  
};

useEffect(() => {
  fetchTasks()
}, []);

const addTaskHandler = (task) => {
  console.log(task)
  setTasksArr((prevTasks) => prevTasks.concat(task))
};

  return (
    <div>
      <NewTask addTasks={addTaskHandler}/>
      <Tasks tasks={tasksArr}/>
    </div>
  );
}

export default App;
