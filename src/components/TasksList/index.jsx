import TasksItem from "../TasksItem"

export default function TasksList({ tasks, removeTask }) {
    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <TasksItem
                    key={task.id}
                    task={task}
                    removeTask = {() => removeTask(task.id)}
                />
            ))}
        </ul>
    )
}