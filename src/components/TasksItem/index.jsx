export default function TasksItem({ task, removeTask, toggleTaskComplete }) {
    const formatDate = (date) => {
        const [year, month, day] = date.split('-')
        return date ? `${day}.${month}.${year}` : ''
    }

    const itemClasses = `list-group-item border rounded shadow-sm p-3 mb-2 bg-white ${
        task.isCompleted ? 'bg-success bg-opacity-10' : ''
    }`

    const toggleTaskStrikethrough = `fw-bold ${task.isCompleted ? 'bg-success bg-opacity-10 text-decoration-line-through' : ''}`

    const textStyle = {
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        color: task.isCompleted ? '#6c757d' : '#212529',
    }

    const toggleDeadlineColor = `badge border ${task.isCompleted ? 'bg-success text-white' : 'bg-danger text-dark'}`

  return (
    <li className={itemClasses}>
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1 me-2" style={{ minWidth: 0 }}>
            <div className="d-flex align-items-center">
                <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={toggleTaskComplete}
                    className="form-check-input me-3 mt-0"
                    style={{ cursor: 'pointer', transform: 'scale(1.3)' }}
                />
                <div
                    className={toggleTaskStrikethrough}
                    style={textStyle}
                >
                    {task.text}
                </div>
            </div>

            <div className="d-flex flex-column gap-1 mt-2 ms-4">
                <span className="badge bg-light text-dark border">
                    Created at: {task.date}
                </span>
                {task.deadline && (
                    <span className={toggleDeadlineColor}>
                        Deadline: {formatDate(task.deadline)}
                    </span>
                )}
            </div>
        </div>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={removeTask}
        >
          Delete
        </button>
      </div>
    </li>
  );
}