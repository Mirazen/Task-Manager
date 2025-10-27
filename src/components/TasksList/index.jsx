import TasksItem from "../TasksItem"

export default function TasksList({ tasks, removeTask }) {
    return (
        <ul>
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