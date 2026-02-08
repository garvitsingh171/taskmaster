import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";
import "../styles/TaskList.css";

function TaskList() {
    const { tasks } = useTasks();

    if (tasks.length === 0) {
        return <p className="empty-text">No tasks added yet ✨</p>;
    }

    return (
        <ul className="task-list-container">
            {tasks.map((task, index) => (
                <TaskItem key={index} data={task} index={index} />
            ))}
        </ul>
    );
}

export default TaskList;
