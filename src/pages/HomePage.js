import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure } from "../features/tasksSlice";
import axios from "axios";
import { Link } from "react-router-dom";

// This component represents the home page of the application, displaying a list of tasks.
const HomePage = () => {
    // Hook to dispatch actions to the Redux store
    const dispatch = useDispatch();

    // Use the Redux `useSelector` hook to access the `tasks`, `loading`, and `error` state from the store
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    // Fetch tasks from an API when the component mounts
    useEffect(() => {
        const fetchTasks = async () => {
            // Dispatch an action to indicate task fetching has started
            dispatch(fetchTasksStart());
            try {
                // Make an API call to fetch tasks
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
                // Dispatch success action with the fetched data
                dispatch(fetchTasksSuccess(response.data));
            } catch (err) {
                // Dispatch failure action if there's an error
                dispatch(fetchTasksFailure(err.message));
            }
        };

        fetchTasks(); // Call the fetchTasks function
    }, [dispatch]); // Dependency array ensures the effect runs only when `dispatch` changes

    // Show a loading message while tasks are being fetched
    if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;

    // Show an error message if there was an issue fetching tasks
    if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Page title */}
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">To-Do List</h1>
            {/* Button to navigate to the Add Task page */}
            <div className="text-center mb-6">
                <Link
                    to="/add"
                    className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                >
                    Add Task
                </Link>
            </div>
            {/* Task list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Loop through tasks and display each one */}
                {tasks.map((task) => (
                    <li key={task.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        {/* Task title */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
                        {/* Task description */}
                        <p className="text-gray-600 mb-4">{task.description}</p>
                        {/* Task status (completed or pending) */}
                        <p className={`text-sm font-medium ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                            Status: {task.completed ? "Completed" : "Pending"}
                        </p>
                        {/* Edit task link */}
                        <div className="mt-4">
                            <Link
                                to={`/edit/${task.id}`}
                                className="text-blue-500 hover:text-blue-600 font-medium"
                            >
                                Edit
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage; 
