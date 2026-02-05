function TaskItem({ task, onDelete }) {
    return (
        <li className="task-item">
            <span className="task-text">{task}</span>
            <button className="delete-btn" onClick={onDelete}>
                <span className="icon">×</span>
            </button>
        </li>
    );
}
export default TaskItem;