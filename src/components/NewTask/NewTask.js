import useHttp from "../hooks/use-http";
import TaskForm from "../TaskForm/TaskForm";

const NewTask = (props) => {
  const { fetchHttp: getTask } = useHttp(); // renaming convention applied to fetchHttp function. makes

  const addTaskHandler = async (taskText) => {
    const applyFetchedData = (data) => {
      let id = data.name; // firebase specific => 'name' contains generated id
      let task = { id: id, text: taskText };
        console.log(taskText)
      props.addTasks(task);
    };
    getTask(
      {
        url: "https://custom-hooks-react-http-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
            'Content-Type' : 'application/json'
        },
      },
      applyFetchedData
    );
  };

  return (
    <div>
      <TaskForm onEnterTask={addTaskHandler} />
    </div>
  );
};

export default NewTask;
