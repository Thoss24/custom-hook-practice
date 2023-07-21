import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import React, { useState, useEffect } from "react";
import useHttp from "./components/hooks/use-http";

function App() {
  const [tasksArray, setTasksArray] = useState([]);

  const applyFetchedData = (data) => {
    let tmpTasksArray = [];

    for (const key in data) {
      tmpTasksArray.push({
        id: key,
        text: data[key].text,
      });
    }
    setTasksArray(tmpTasksArray);
  }; // state updating functions are guaranteed to never change, therefore setTasksArray doesn't need to be set as a dependency

  const addTaskHandler = (task) => {
    console.log(task);
    setTasksArray((prevTasks) => prevTasks.concat(task));
  };

  const { fetchHttp } = useHttp();

  useEffect(() => { // passing the config data (url) and applyData function inside the fetchHttp method instead of the useHttp hook, means that the applyData and config data don't need to be used as dependencies because they
    fetchHttp({     // now parameters of fetchHttp instead of external dependencies of the useHttp hook
      url: "https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
    }, applyFetchedData)
  }, [fetchHttp])

  return (
    <div>
      <NewTask addTasks={addTaskHandler} />
      <Tasks tasks={tasksArray} />
    </div>
  );
}

export default App;
