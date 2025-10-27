export default function TasksItem({ task, removeTask }) {
    const formatDate = (date) => {
        const [year, month, day] = date.split('-')
        return date && `${day}.${month}.${year}`
    }

    return (
        <li>
            <div>
                <span onDoubleClick={() => {}}>
                    {task.text}
                </span>
                <br />
                <small>Created at: {task.date}</small>
                {task.deadline && (
                    <span>
                        Deadline: {formatDate(task.deadline)}
                    </span>
                )}
            </div>
            <div>
                <button onClick={removeTask}>Delete Task</button>
            </div>
        </li>
    )
}