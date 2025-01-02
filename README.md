# To-Do List Manager

A responsive web application for managing tasks, built using React.js, Redux Toolkit, and React Router DOM. The application fetches tasks from a dummy API (JSONPlaceholder) and allows users to add, edit, and view tasks. The app includes a clean and modern user interface with responsive design for an optimal experience across devices.

---

## Features

- **Home Page:** Displays a list of tasks fetched from the API, along with newly added tasks. Each task shows a title, description, and status (completed/pending).
- **Add Task Page:** Allows users to create a new task with a title and optional description. Newly added tasks appear on the home page.
- **Edit Task Page:** Enables users to update a task's title, description, and status.
- **State Management:** Utilizes Redux Toolkit for efficient state management.
- **API Integration:** Fetches initial tasks from `https://jsonplaceholder.typicode.com/todos`.
- **Modern UI:** Built with Tailwind CSS for styling and a clean, responsive design.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js) or yarn

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vishwarohan/To-Do-List-Manager.git
   cd todo-list-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open the app in your browser at:
   ```
   http://localhost:3000
   ```

---

## File Structure

```
.
|-- public/
|   |-- index.html
|-- src/
|   |-- components/
|   |   |-- AddTaskPage.jsx
|   |   |-- EditTaskPage.jsx
|   |   |-- HomePage.jsx
|   |-- features/
|   |   |-- tasksSlice.js
|   |-- App.js
|   |-- index.js
|-- package.json
```

- **components/**: Contains the React components for different pages.
- **features/**: Manages Redux slices (tasksSlice.js).
- **App.js**: Defines routes and main app structure.

---

## Usage

### Adding a Task
1. Navigate to the "Add Task" page.
2. Enter a task title and an optional description.
3. Click "Add Task" to save. The task will appear on the home page.

### Editing a Task
1. On the home page, click "Edit" next to the task you want to update.
2. Modify the title, description, or status.
3. Save changes to update the task.

---

## Technologies Used

- **React.js:** For building the UI components.
- **Redux Toolkit:** For state management.
- **React Router DOM:** For navigation.
- **Axios:** For making API calls.
- **Tailwind CSS:** For responsive styling.

---

## Known Issues

- Tasks fetched from the API are read-only; only newly added tasks can be edited.
- Data is not persisted across page reloads as it uses a mock API.

---

## Future Enhancements

- Integrate a backend API for persistent storage.
- Add user authentication and task filtering.
- Improve the design and accessibility.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a mock API.
- [Redux Toolkit](https://redux-toolkit.js.org/) and [React Router](https://reactrouter.com/) documentation.
- Inspiration from various task management apps.

