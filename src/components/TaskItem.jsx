import "../styles/TaskItem.css";

function TaskItem({ task, date, label, onDelete }) {
    return (
        <li className="task-item">
            <span className="task-text">{task}</span>
            <span>{date}</span>
            <span>{label}</span>
            <button className="delete-btn" onClick={onDelete}>
                <span className="icon">×</span>
            </button>
        </li>
    );
}
export default TaskItem;
