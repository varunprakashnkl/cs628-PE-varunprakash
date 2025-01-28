# **ToDo List App - CS628 PE03**

## **Input**  
The application allows users to enter a task description in an input field. When the user clicks the "Add Task" button, the task is stored in the application state. Each task is displayed dynamically in the ToDo list with an associated "Delete" button.

## **Process**  
The app is built using **React** with the `useState` hook for state management. When a task is added, it updates the list by modifying the `tasks` array. The `.map()` function is used to render the tasks dynamically. Clicking the "Delete" button removes the task by filtering it out from the state.

## **Output**  
The user sees an interactive ToDo list where tasks appear in a styled list format. Tasks can be removed instantly, providing a responsive and clean interface. The design enhances usability with a simple yet effective UI.
