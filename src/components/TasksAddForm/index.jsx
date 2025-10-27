import { useState } from 'react';

export default function TasksAddForm({ onAdd }) {
    const [inputValue, setInputValue] = useState('')
    const [hasCheckMark, setHasCheckMark] = useState(false)
    const [selectedDeadline, setSelectedDeadline] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === '') return;

        onAdd({
            text: inputValue.trim(),
            deadline: hasCheckMark ? selectedDeadline : null,
        })

        setInputValue('')
        setHasCheckMark(false)
        setSelectedDeadline('')
    }

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="d-flex gap-2 mb-2">
                <input
                    type="text"
                    className="form-control"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Input ur task"
                />
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </div>

            <div className="form-check mb-2">
                <input
                    className="form-check-input"
                    type='checkbox'
                    checked={hasCheckMark}
                    onChange={(e) => setHasCheckMark(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="deadlineCheck">
                    Set deadline
                </label>
            </div>

            {hasCheckMark && (
                <div>
                    <input
                        type='date'
                        min={new Date().toISOString().split('T')[0]}
                        className="form-control"
                        value={selectedDeadline}
                        onChange={(e) => setSelectedDeadline(e.target.value)}
                    />
                </div>
            )}
        </form>
    );
}