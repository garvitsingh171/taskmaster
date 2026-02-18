import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

function EditTask({ task, onClose }) {
    const { updateTask } = useTasks();
    const [formData, setFormData] = useState({
        text: task.text,
        due: task.due,
        label: task.label || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(task.id, formData);
        onClose();
    };

    const handleCancel = () => {
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Edit Task</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Task</label>
                        <input
                            type="text"
                            value={formData.text}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    text: e.target.value,
                                })
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Due Date</label>
                        <input
                            type="date"
                            value={formData.due}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    due: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label>Label</label>
                        <select
                            value={formData.label}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    label: e.target.value,
                                })
                            }
                        >
                            <option value="">-- Select Label --</option>
                            <option value="Education">Education</option>
                            <option value="Work">Work</option>
                            <option value="Market">Market</option>
                        </select>
                    </div>

                    <div className="modal-buttons">
                        <button type="submit">Update Task</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTask;
