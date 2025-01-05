import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasksSlice";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// This component represents a page where users can add new tasks.
const AddTaskPage = () => {
    // State variables to hold the task title and description
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Hook to programmatically navigate to other pages
    const navigate = useNavigate();

    // Function to handle the task addition process
    const handleAddTask = () => {
        // Validation: Ensure the task title is not empty
        if (!title) {
            alert("Task title is required!");
            return;
        }

        // Create a new task object with a unique ID
        const newTask = {
            id: uuidv4(), // Generate a unique ID
            title, // Title from user input
            description, // Description from user input
            completed: false, // Default task completion status
        };

        // Dispatch the `addTask` action to add the task to the Redux store
        dispatch(addTask(newTask));

        // Redirect to the home page after successfully adding the task
        navigate("/");
    };

    return (
        // Main container with padding, background, and centered content
        <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
            {/* Card container for the form */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {/* Page title */}
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Add Task</h1>
                <div>
                    {/* Label and input for task title */}
                    <label className="block text-lg font-semibold mb-2">Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Update title state
                        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task title" // Placeholder for user input
                    />
                    {/* Label and textarea for task description */}
                    <label className="block text-lg font-semibold mb-2">Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} // Update description state
                        className="block w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task description" // Placeholder for user input
                    />
                    {/* Buttons for adding task and navigating back to home */}
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleAddTask} // Call handleAddTask on click
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

