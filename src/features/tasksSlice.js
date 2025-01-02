import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: { tasks: [], loading: false, error: null },
    reducers: {
        fetchTasksStart: (state) => { state.loading = true; },
        fetchTasksSuccess: (state, action) => {
            state.loading = false;

            // Avoid duplicating tasks that may already exist
            const fetchedTasks = action.payload.filter(
                (fetchedTask) => !state.tasks.some((task) => task.id === fetchedTask.id)
            );

            state.tasks = [
                ...state.tasks, // Retain existing tasks (e.g., added locally)
                ...fetchedTasks.map((task) => ({
                    ...task,
                    description: `Description for task ${task.id}`, // Add mock description
                })),
            ];
        },

        fetchTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addTask: (state, action) => {
            const newTask = {
                id: state.tasks.length + 1, // Generate a new ID
                title: action.payload.title,
                description: action.payload.description || "No description provided",
                completed: false, // Default status
            };
            state.tasks.push(newTask);
        },

        updateTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(t => t.id === action.payload.id);
            if (taskIndex > -1) {
                state.tasks[taskIndex] = action.payload;
            }
        },
    },
});


export const { addTask, updateTask, fetchTasksFailure, fetchTasksStart, fetchTasksSuccess } = tasksSlice.actions;

export default tasksSlice.reducer;
