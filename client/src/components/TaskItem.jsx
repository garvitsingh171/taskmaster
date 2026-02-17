import "../styles/TaskItem.css";
import { useTasks } from "../hooks/useTasks";

function TaskItem({ data }) {
    const { deleteTask, updateTask } = useTasks();

    const handleEdit = () => {
        const newText = prompt("Edit Task:", data.text)

        if (!newText) return;

        updateTask(data.id, { text: newText})
    }
    return (
        <li className="task-item">
            <span className="task-text">{data.text}</span>
            <span className="task-date">{data.due || "No date"}</span>
            <span className="task-label">{data.label || "General"}</span>

            <button 
                className="edit-btn"
                onClick={handleEdit}
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
        </li>
    );
}

export default TaskItem;
