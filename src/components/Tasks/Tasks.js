
const Tasks = (props) => {
    return (
        <div>
            {props.tasks.map((item) => (
                <h1>{item.text}</h1>
            ))}
        </div>
    )
}

export default Tasks;