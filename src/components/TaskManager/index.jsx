import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TasksList from '../TasksList';
import TasksAddForm from '../TasksAddForm';

export default function TaskManager () {
    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        const newTask ={
            id: uuidv4(),
            text: task.text,
            date: new Date().toLocaleString('ru-RU').split(',')[0],
            deadline: task.deadline,
            isCompleted: false,
        }
        setTasks(list => [newTask, ...list])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !==id))
    }

    const toggleTaskComplete = (id) => {
        setTasks(prevTask =>
            prevTask.map((task) =>
                task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
            )
        )
    }

    return( 
        <div>
            <TasksAddForm  onAdd={addTask} />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                toggleTaskComplete={toggleTaskComplete}
            />
        </div>
    )
}