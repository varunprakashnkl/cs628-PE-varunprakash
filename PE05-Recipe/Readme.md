## **Input**
The **Add Recipe** feature allows users to input the following details:
- **Recipe Name**: A text input field where users enter the name of the recipe.
- **Ingredients**: A multiline text field where users list ingredients, separated by commas.
- **Instructions**: A multiline text field where users provide step-by-step cooking instructions.
- **Select Existing Recipe** (Optional): A dropdown to select an already existing recipe for reference.

Users interact with these fields through a form and submit the details by clicking the **"Add Recipe"** button.

---

## **Process**
1. When the user enters details and submits the form:
   - The input data is captured and stored in a **React state**.
   - A **POST request** is sent to the backend (`/api/recipes`) using **Axios**.
   - If the request is successful:
     - The new recipe is added to the database.
     - The user receives a success message.
     - The page navigates back to the homepage.
   - If an error occurs, it is logged, and the user is notified.

2. When the component loads:
   - A **GET request** is sent to fetch existing recipes.
   - The data is displayed in the dropdown for selection.

---

## **Output**
- Upon successful submission, the new recipe appears in the **Recipe List** page.
- The form fields reset, and the user receives a **confirmation alert**.
- If an error occurs, an appropriate **error message** is displayed in the console.

---

### **Example**
**Input:**
```
Recipe Name: "Chocolate Cake"
Ingredients: "Flour, Sugar, Cocoa Powder, Eggs, Milk, Butter"
Instructions: "1. Mix all ingredients. 2. Bake for 30 minutes."
```

**Process:**
- Form submission triggers API request.
- Recipe is added to the database.
- Page redirects to the home screen.

**Output:**
- The new recipe appears in the list of available recipes.
- Success alert: `"Recipe added successfully!"`
- Any errors are displayed in the console.
