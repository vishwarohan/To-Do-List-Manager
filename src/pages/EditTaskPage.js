import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../features/tasksSlice";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditTaskPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const task = useSelector((state) => state.tasks.tasks.find(t => t.id.toString() === id));

    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [completed, setCompleted] = useState(task?.completed || false);

    const handleUpdateTask = () => {
        if (!title) {
            alert("Task title is required!");
            return;
        }

        dispatch(updateTask({ id: task.id, title, description, completed }));
        alert("Task updated!");
        navigate("/"); // Redirect to Home Page after updating task
    };

    if (!task) {
        return <p>Task not found!</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Task</h1>
            <div>
                <label className="block mb-2">
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full p-2 border rounded"
                    />
                </label>
                <label className="block mb-2">
                    Description:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full p-2 border rounded"
                    />
                </label>
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => setCompleted(!completed)}
                    />
                    Completed
                </label>
                <button
                    onClick={handleUpdateTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Update Task
                </button>
                <Link to="/" className="ml-4 text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default EditTaskPage;
