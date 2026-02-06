import { useState } from "react";
import { TaskContext } from './TaskContext';

export const TaskProvider = ({ children }) => {
    const [taskArray, setTaskArray] = useState([]);

    const addTask = (task) => {
        setTaskArray([task, ...taskArray]);
    }

    const deleteTask = (ind) => {
        setTaskArray(taskArray.filter((_, index) => index !== ind));
    }

    return (
        <TaskContext.Provider value={{tasks: taskArray, addTask, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}
