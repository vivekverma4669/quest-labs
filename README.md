<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quest Engineer 1 Assignment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
    </style>
</head>
<body>

    <h1>Quest Engineer 1 Assignment</h1>

    <h2>Project Overview</h2>
    <p>
        This project is a basic landing page developed using React, featuring a popup form that slides in from the right side of the screen when a button is clicked. The form allows users to connect with sales by providing their details. It fetches and submits data using provided APIs, includes error handling, user feedback mechanisms, and basic form validation.
    </p>

    <h2>Features</h2>
    <h3>Landing Page:</h3>
    <ul>
        <li>Contains a header with navigation options.</li>
        <li>Main section with a title, description, and buttons.</li>
        <li>Banner showcasing different company icons and a button to connect with sales.</li>
    </ul>

    <h3>Popup Form:</h3>
    <ul>
        <li>Slides in from the right side of the screen when the "Connect With Sales" button is clicked.</li>
        <li>Fetches form fields dynamically from an API.</li>
        <li>Submits form data to an API with appropriate error handling and user feedback.</li>
        <li>Two-stage form with validation and transition between stages.</li>
    </ul>

    <h2>Technologies Used</h2>
    <h3>React:</h3>
    <ul>
        <li>Core library for building the user interface.</li>
        <li>Utilized functional components and hooks (<code>useState</code>, <code>useEffect</code>) for state management and lifecycle methods.</li>
    </ul>

    <h3>Styled-Components:</h3>
    <ul>
        <li>For styling React components using tagged template literals.</li>
        <li>Enables scoped styling and dynamic styling based on component props.</li>
    </ul>

    <h3>Axios:</h3>
    <ul>
        <li>For making HTTP requests to fetch and submit form data.</li>
        <li>Provides a simple API for handling asynchronous operations.</li>
    </ul>

    <h3>JavaScript (ES6):</h3>
    <ul>
        <li>Leveraged modern JavaScript features such as arrow functions, template literals, destructuring, and async/await for cleaner and more readable code.</li>
    </ul>

    <h2>Project Structure</h2>
    <ul>
        <li><strong>App.js</strong>: The main entry point of the application, rendering the <code>Home</code> component.</li>
        <li><strong>Home.js</strong>: Contains the landing page layout and logic for displaying the popup form.</li>
        <li><strong>PopupForm.js</strong>: The popup form component, handling form fetching, rendering, and submission logic.</li>
        <li><strong>Styled Components</strong>: Defined within each component file using <code>styled-components</code> for modular and scoped styling.</li>
        <li><strong>Assets</strong>: Images used in the landing page are stored in an <code>images</code> directory.</li>
    </ul>

    <h2>How to Run the Project</h2>
    <h3>Clone the Repository:</h3>
    <pre>
<code>git clone https://github.com/vivekverma4669/quest-labs.git</code>
    </pre>
    
    <h3>Install Dependencies:</h3>
    <pre>
<code>npm install</code>
    </pre>
    
    <h3>Start the Development Server:</h3>
    <pre>
<code>npm start</code>
    </pre>
    
    <h3>View the Application:</h3>
    <p>
        Open your browser and navigate to <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> to view the landing page and interact with the popup form.
    </p>

    <h2>Error Handling</h2>
    <p>
        The application includes error handling for API requests, logging errors to the console, and providing user feedback through alerts.
    </p>

    <h2>Form Validation</h2>
    <p>
        Basic validation is implemented to ensure required fields are filled before submission. If validation fails, the form will not proceed to the next stage or submit.
    </p>

    <h2>Feedback and Improvements</h2>
    <p>
        Suggestions and improvements are welcome. Feel free to fork the repository and submit pull requests with enhancements or bug fixes.
    </p>

    <h2>License</h2>
    <p>
        This project is licensed under the MIT License. Feel free to use and modify the code as per your requirements.
    </p>

</body>
</html>
