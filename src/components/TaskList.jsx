import TaskItem from "./TaskItem";
import "../styles/TaskList.css";

function TaskList({ tasks, date, label, onDelete }) {
    return (
        <ul className="task-list-container">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    date={date}
                    label={label}
                    onDelete={() => onDelete(index)}
                />
            ))}
        </ul>
    );
}
export default TaskList;
