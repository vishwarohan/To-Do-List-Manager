import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddTaskPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddTask = () => {
        if (!title) {
            alert("Task title is required!");
            return;
        }

        const newTask = {
            id: uuidv4(), // Generate a unique ID for each task
            title,
            description,
            completed: false,
        };

        dispatch(addTask(newTask)); // Dispatch to Redux store
        navigate("/"); // Redirect to Home Page after adding task
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Add Task</h1>
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
                        className="block w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task description"
                    />
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleAddTask}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Add Task
                        </button>
                        <Link to="/" className="text-blue-500 hover:text-blue-600 font-medium">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskPage;
