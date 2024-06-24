Quest Engineer 1 Assignment
Project Overview
This project is a basic landing page developed using React, featuring a popup form that slides in from the right side of the screen when a button is clicked. The form allows users to connect with sales by providing their details. It fetches and submits data using provided APIs, includes error handling, user feedback mechanisms, and basic form validation.

Features
Landing Page:
Contains a header with navigation options.
Main section with a title, description, and buttons.
Banner showcasing different company icons and a button to connect with sales.
Popup Form:
Slides in from the right side of the screen when the "Connect With Sales" button is clicked.
Fetches form fields dynamically from an API.
Submits form data to an API with appropriate error handling and user feedback.
Two-stage form with validation and transition between stages.
Technologies Used
React:

Core library for building the user interface.
Utilized functional components and hooks (useState, useEffect) for state management and lifecycle methods.
Styled-Components:

For styling React components using tagged template literals.
Enables scoped styling and dynamic styling based on component props.
Axios:

For making HTTP requests to fetch and submit form data.
Provides a simple API for handling asynchronous operations.
JavaScript (ES6):

Leveraged modern JavaScript features such as arrow functions, template literals, destructuring, and async/await for cleaner and more readable code.
Project Structure
App.js: The main entry point of the application, rendering the Home component.
Home.js: Contains the landing page layout and logic for displaying the popup form.
PopupForm.js: The popup form component, handling form fetching, rendering, and submission logic.
Styled Components:
Defined within each component file using styled-components for modular and scoped styling.
Assets: Images used in the landing page are stored in an images directory.
How to Run the Project
Clone the Repository:

sh
Copy code
git clone https://github.com/vivekverma4669/quest-labs.git
Install Dependencies:
sh
Copy code
npm install
Start the Development Server:

sh
Copy code
npm start
View the Application:

Open your browser and navigate to http://localhost:3000 to view the landing page and interact with the popup form.
Error Handling
The application includes error handling for API requests, logging errors to the console, and providing user feedback through alerts.
Form Validation
Basic validation is implemented to ensure required fields are filled before submission. If validation fails, the form will not proceed to the next stage or submit.
Feedback and Improvements
Suggestions and improvements are welcome. Feel free to fork the repository and submit pull requests with enhancements or bug fixes.
License
This project is licensed under the MIT License. Feel free to use and modify the code as per your requirements.
