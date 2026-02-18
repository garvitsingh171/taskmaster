import { useState } from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks((prev) => [task, ...prev]);
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const updateTask = (id, updatedData) => {
        setTasks((prev) =>
            prev.map((task) => {
                return task.id === id ? { ...task, ...updatedData } : task;
            }),
        );
    };

    const completeTask = (id) => {
        setTasks((prev) => {
            return prev.map((task) => {
                return task.id === id
                    ? { ...task, complete: !task.complete }
                    : task;
            });
        });
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, deleteTask, updateTask, completeTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};
