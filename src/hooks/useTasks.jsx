import { useContext } from "react";
import { TaskContext } from '../context/TaskContext';

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("Error!")
    }
    return context;
}