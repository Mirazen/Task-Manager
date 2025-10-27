export default function TasksItem({ task, removeTask }) {
    const formatDate = (date) => {
        const [year, month, day] = date.split('-')
        return date && `${day}.${month}.${year}`
    }

  return (
    <li className="list-group-item border rounded shadow-sm p-3 mb-2 bg-white">
      <div className="d-flex justify-content-between align-items-start">
        <div className="flex-grow-1 me-2" style={{ minWidth: 0 }}>
            <div
                className="fw-bold"
                style={{
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    whiteSpace: 'normal',
                }}
            >
                {task.text}
            </div>
            <div className="d-flex flex-column gap-1 mt-2">
                <span className="badge bg-light text-dark border">
                    Created at: {task.date}
                </span>
                {task.deadline && (
                    <span className="badge bg-light text-dark border">
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