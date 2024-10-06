'use client';

import { useEffect, useState } from "react";

export default function Home(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    useEffect(()=>{
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks){
            setTasks(JSON.parse(savedTasks));
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks]);
    const addTask = (e) =>{
        e.preventDefault();
        if (input.trim() === "") return;
        const newTask ={
            id:Date.now(),
            text:input,
            completed:false,
        }
        setTasks([...tasks, newTask]);
        setInput('');
    };
    return(<div>
       
        <h1>React Todo List</h1>
        <form onSubmit={addTask}>
            <input type="text"
            placeholder="Enter New Task"
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Add Task</button>
        </form>

        {tasks.map((task) => (
                        <li key={task.id}>
                            Name: {task.text}
                            Task ID: {task.id}

                        </li>
                    ))}
    </div>
 )
}