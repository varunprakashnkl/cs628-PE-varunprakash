# Cities Application

## Input
The application takes input from the user through an interactive form. Users can enter a city's **name, country, and population**. The form ensures all fields are filled before submission. Additionally, users can select a city from the displayed list to view its details.

## Process
When a user submits a new city, the data is added to the application's state using React's `useState` hook. React Router manages navigation between pages, ensuring smooth transitions between the **Cities List, Add City, and City Details** sections. The app dynamically updates the city list and maintains state without requiring a page refresh.

## Output
The output displays a well-structured list of cities with clickable links. When a user adds a city, it appears immediately in the list. Clicking on a city shows detailed information, including **name, country, and population**. The responsive UI ensures a clean and user-friendly experience.
