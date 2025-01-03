import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksStart, fetchTasksSuccess, fetchTasksFailure } from "../features/tasksSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch();
    const { tasks, loading, error } = useSelector((state) => state.tasks);

    useEffect(() => {
        const fetchTasks = async () => {
            dispatch(fetchTasksStart());
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
                dispatch(fetchTasksSuccess(response.data));
            } catch (err) {
                dispatch(fetchTasksFailure(err.message));
            }
        };

        fetchTasks();
    }, [dispatch]);

    if (loading) return <p className="text-center text-lg font-semibold">Loading...</p>;
    if (error) return <p className="text-center text-red-500 text-lg">Error: {error}</p>;

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">To-Do List</h1>
            <div className="text-center mb-6">
                <Link
                    to="/add"
                    className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                >
                    Add Task
                </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tasks.map((task) => (
                    <li key={task.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
                        <p className="text-gray-600 mb-4">{task.description}</p>
                        <p className={`text-sm font-medium ${task.completed ? 'text-green-600' : 'text-yellow-600'}`}>
                            Status: {task.completed ? "Completed" : "Pending"}
                        </p>
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
