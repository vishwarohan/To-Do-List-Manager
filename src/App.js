import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import { Provider } from "react-redux";
import store from "./store";

// The `App` component serves as the root component of the application.
const App = () => (
  // Wrapping the entire application with the Redux `Provider` to make the store accessible to all components
  <Provider store={store}>
    {/* Setting up the React Router for client-side routing */}
    <Router>
      {/* Define the routes for the application */}
      <Routes>
        {/* Home Page route */}
        <Route path="/" element={<HomePage />} />
        {/* Add Task Page route */}
        <Route path="/add" element={<AddTaskPage />} />
        {/* Edit Task Page route with dynamic `id` parameter */}
        <Route path="/edit/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App; 
