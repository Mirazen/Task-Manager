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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Input ur task"
            />

            <label htmlFor='deadline'>
                <input
                    type='checkbox'
                    checked={hasCheckMark}
                    onChange={(e) => setHasCheckMark(e.target.checked)}
                />
                Set deadline
            </label>

            {hasCheckMark && (
                <input
                    type='date'
                    min={new Date().toISOString().split('T')[0]}
                    value={selectedDeadline}
                    onChange={(e) => setSelectedDeadline(e.target.value)}
                />
            )}

            <button type="submit">add</button>
        </form>
    );
}