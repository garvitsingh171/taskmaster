import "../styles/TaskItem.css";
import { useTasks } from "../hooks/useTasks";
import EditTask from "./EditTask";
import { useState } from "react";

function TaskItem({ data }) {
    const { deleteTask, completeTask } = useTasks();
    const [isEditOpen, setIsEditOpen] = useState(false);

    return (
        <>
            {isEditOpen && (
                <EditTask task={data} onClose={() => setIsEditOpen(false)} />
            )}
            <li className="task-item">
            <input
                className="check-btn"
                type="checkbox"
                checked={data.complete}
                onChange={() => completeTask(data.id)}
            />

            <span className={`task-text ${data.complete ? "completed" : ""}`}>
                {data.text}
            </span>
            <span className="task-date">{data.due || "No date"}</span>
            <span className="task-label">{data.label || "General"}</span>

            <div className="task-actions">
                <button
                    className="edit-btn"
                    onClick={() => setIsEditOpen(true)}
                    aria-label="Edit task"
                >
                    ✏️
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteTask(data.id)}
                    aria-label="Delete task"
                >
                    ×
                </button>
            </div>
        </li>
        </>
    );
}

export default TaskItem;
