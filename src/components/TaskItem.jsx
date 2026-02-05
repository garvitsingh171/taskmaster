function TaskItem({ task, date, onDelete }) {
    return (
        <li className="task-item">
            <span className="task-text">{task}</span>
            <span>{date}</span>
            <button className="delete-btn" onClick={onDelete}>
                <span className="icon">×</span>
            </button>
        </li>
    );
}
export default TaskItem;