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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">To-Do List</h1>
            <Link to="/add" className="text-blue-500">Add Task</Link>
            <ul className="mt-4">
                {tasks.map((task) => (
                    <li key={task.id} className="card">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.completed ? "Completed" : "Pending"}</p>
                        <Link to={`/edit/${task.id}`} className="text-blue-500">Edit</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
