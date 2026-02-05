import { useState } from "react";
import TaskList from "../components/TaskList";
import "../styles/AddTask.css";

function AddTask() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;
        setTaskArray([task, ...taskArray]);
        setTask("");
    };

    const onDelete = (ind) => {
        setTaskArray(taskArray.filter((_, index) => index !== ind));
    };

    return (
        <div className="add-task-page">
            <div className="glass-card">
                <h2 className="form-title">Create New Task</h2>
                <form className="task-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="task">What needs to be done?</label>
                        <input
                            type="text"
                            id="task"
                            placeholder="Enter task description..."
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="due">Due Date</label>
                        <input
                            type="date"
                            id="due"
                            className="task-input date-picker"
                            placeholder="Enter due date"
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="label">Label</label>
                        <div className="select-wrapper">
                            <select
                                name="label"
                                id="label"
                                className="task-select"
                            >
                                <option value="" disabled selected>
                                    Choose a Label
                                </option>
                                <option value="education">Education</option>
                                <option value="sports">Sports</option>
                                <option value="market">Market</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Add to List
                    </button>
                </form>
                <TaskList tasks={taskArray} onDelete={onDelete} />
            </div>
        </div>
    );
}
export default AddTask;
