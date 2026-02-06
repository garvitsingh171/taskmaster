import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskList from "../components/TaskList";
import "../styles/AddTask.css";

function AddTask() {
    const { addTask } = useTasks();
    const [formData, setFormData] = useState({task: '', due: '', label: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData) return;
        addTask(formData);
        setFormData({task: '', due: '', label: ''});
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
                            value={formData.task}
                            onChange={(e) => setFormData({...formData, task: e.target.value})}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="due">Due Date</label>
                        <input
                            type="date"
                            id="due"
                            className="task-input date-picker"
                            placeholder="Enter due date"
                            value={formData.due}
                            onChange={(e) => setFormData({...formData, due: e.target.value})}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="label">Label</label>
                        <div className="select-wrapper">
                            <select
                                name="label"
                                id="label"
                                className="task-select"
                                value={formData.label}
                                onChange={(e) => setFormData({...formData, label: e.target.value})}
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
                <TaskList/>
            </div>
        </div>
    );
}
export default AddTask;
