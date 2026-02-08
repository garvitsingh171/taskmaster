import "../styles/TaskItem.css";
import { useTasks } from "../hooks/useTasks";

function TaskItem({ data, index }) {
    const { deleteTask } = useTasks();

    return (
        <li className="task-item">
            <span className="task-text">{data.task}</span>
            <span className="task-date">{data.due || "No date"}</span>
            <span className="task-label">{data.label || "General"}</span>

            <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
                aria-label="Delete task"
            >
                ×
            </button>
        </li>
    );
}

export default TaskItem;
