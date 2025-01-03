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
        return <p className="text-center text-red-500 text-lg">Task not found!</p>;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Edit Task</h1>
                <div>
                    <label className="block text-lg font-semibold mb-2">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task title"
                    />
                    <label className="block text-lg font-semibold mb-2">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task description"
                    />
                    <label className="block mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => setCompleted(!completed)}
                            className="mr-2"
                        />
                        <span className="text-lg font-semibold">Completed</span>
                    </label>
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleUpdateTask}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Update Task
                        </button>
                        <Link
                            to="/"
                            className="text-blue-500 hover:text-blue-600 font-medium"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTaskPage;
