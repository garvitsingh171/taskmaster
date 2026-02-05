import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, onDelete }) {
    return (
        <ul className="task-list-container">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
}
export default TaskList;
