import "../styles/TaskItem.css";
import { useTasks } from "../hooks/useTasks";

function TaskItem({ data, index }) {
    const { deleteTask } = useTasks();

    return (
        <li className="task-item">
            <span className="task-text">{data.task}</span>
            <span>{data.due}</span>
            <span>{data.label}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
                <span className="icon">×</span>
            </button>
        </li>
    );
}
export default TaskItem;
