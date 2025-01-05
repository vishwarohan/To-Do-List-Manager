import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../features/tasksSlice";
import { useParams, Link, useNavigate } from "react-router-dom";

// This component represents the Edit Task page, allowing users to modify an existing task.
const EditTaskPage = () => {
    // Extract the task ID from the URL parameters
    const { id } = useParams();

    // Hook to navigate programmatically
    const navigate = useNavigate();

    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Retrieve the specific task to edit from the Redux store
    const task = useSelector((state) => state.tasks.tasks.find(t => t.id.toString() === id));

    // Initialize state variables for the task properties
    const [title, setTitle] = useState(task?.title || "");
    const [description, setDescription] = useState(task?.description || "");
    const [completed, setCompleted] = useState(task?.completed || false);

    // Handle the task update logic
    const handleUpdateTask = () => {
        // Validation: Ensure the title is not empty
        if (!title) {
            alert("Task title is required!");
            return;
        }

        // Dispatch the updateTask action with the updated task details
        dispatch(updateTask({ id: task.id, title, description, completed }));
        alert("Task updated!"); // Notify the user of a successful update
        navigate("/"); // Redirect to the Home Page
    };

    // If the task is not found (invalid ID), show an error message
    if (!task) {
        return <p className="text-center text-red-500 text-lg">Task not found!</p>;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
            {/* Card container for the form */}
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {/* Page title */}
                <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Edit Task</h1>
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
                        className="block w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter task description" // Placeholder for user input
                    />
                    {/* Checkbox for task completion status */}
                    <label className="block mb-4 flex items-center">
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => setCompleted(!completed)} // Toggle completed state
                            className="mr-2"
                        />
                        <span className="text-lg font-semibold">Completed</span>
                    </label>
                    {/* Buttons for updating task and navigating back to home */}
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleUpdateTask} // Call handleUpdateTask on click
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
