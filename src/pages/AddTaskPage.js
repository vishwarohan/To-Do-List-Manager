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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Add Task</h1>
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
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </button>
                <Link to="/" className="ml-4 text-blue-500 hover:underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default AddTaskPage;
