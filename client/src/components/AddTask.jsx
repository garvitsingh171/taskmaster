import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import "../styles/AddTask.css";

function AddTask() {
    const { addTask } = useTasks();
    const [formData, setFormData] = useState({
        text: "",
        due: "",
        label: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.text.trim()) {
            alert("Task can't be empty");
            return;
        }

        const newTask = {
            ...formData,
            id: Date.now(),
            completed: false
        }

        addTask(newTask);
        setFormData({ text: "", due: "", label: "" });
    };

    return (
        <div className="add-task-container">
            <h2 className="form-title">Create New Task</h2>

            <form className="task-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Task</label>
                    <input
                        type="text"
                        placeholder="Enter task..."
                        value={formData.text}
                        onChange={(e) =>
                            setFormData({ ...formData, text: e.target.value })
                        }
                    />
                </div>

                <div className="input-group">
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={formData.due}
                        onChange={(e) =>
                            setFormData({ ...formData, due: e.target.value })
                        }
                    />
                </div>

                <div className="input-group">
                    <label>Label</label>
                    <select
                        value={formData.label}
                        onChange={(e) =>
                            setFormData({ ...formData, label: e.target.value })
                        }
                    >
                        <option value="">Choose a label</option>
                        <option value="Education">Education</option>
                        <option value="Sports">Sports</option>
                        <option value="Market">Market</option>
                    </select>
                </div>

                <button className="submit-btn">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
