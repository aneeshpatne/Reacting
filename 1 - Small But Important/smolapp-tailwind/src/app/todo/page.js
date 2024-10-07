'use client';
import { useEffect, useState, useCallback } from "react";

export default function Home() {
    const [task, setTask] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [userInput, setInput] = useState('');

    useEffect(() => {
        setIsClient(true);
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTask(JSON.parse(savedTasks));
        }
    }, []);

    const saveTasks = useCallback((tasksToSave) => {
        try {
            console.log('Saving tasks to localStorage:', tasksToSave);
            localStorage.setItem('tasks', JSON.stringify(tasksToSave));
        } catch (error) {
            console.error("Error saving tasks to localStorage:", error);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            saveTasks(task);
        }
    }, [task, isClient, saveTasks]);

    const addData = (e) => {
        e.preventDefault();
        if (userInput.trim() === "") return;
        const newData = {
            id: Date.now(),
            text: userInput,
            completed: false,
        }
        setTask(prevTasks => [...prevTasks, newData]);
        setInput('');
    }

    const deleteData = (id) => {
        setTask(prevTasks => prevTasks.filter((task) => task.id !== id));
    };

    if (!isClient) {
        return (<div>Loading</div>); 
    }

    return (
        <div>
            <form onSubmit={addData}>
                <input 
                    type="text"
                    placeholder="Enter task name"
                    value={userInput}
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {task.map((t) =>
                    <li key={t.id}>
                        {t.text}
                        <button onClick={() => deleteData(t.id)}>DELETE</button>
                    </li>
                )}
            </ul>
        </div>
    );
}