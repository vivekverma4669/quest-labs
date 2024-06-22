<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>

<h1>Quest Engineer 1 Assignment</h1>

<h2>Objective</h2>
<p>This project implements a popup form that slides in from the right side of the screen when a button is clicked. The form uses provided APIs to fetch and submit data.</p>

<h2>Features</h2>
<ul>
    <li>A button on the landing page triggers the form popup.</li>
    <li>The form slides in smoothly from the right side of the screen.</li>
    <li>Form data is fetched from an API and displayed in the form.</li>
    <li>The form includes basic validation before submission.</li>
    <li>Error handling and user feedback mechanisms are included.</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li>React</li>
    <li>Axios</li>
    <li>CSS for styling and animations</li>
</ul>

<h2>Project Structure</h2>
<pre><code>/src
  /components
    Buttons
    Inputs
  App.js
  index.js
  api.js
/public
  index.html
/README.md
</code></pre>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js</li>
    <li>npm (or yarn)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone &lt;repository-url&gt;
cd &lt;repository-directory&gt;</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
</ol>

<h3>Running the App</h3>
<ol>
    <li>Start the development server:
        <pre><code>npm start</code></pre>
    </li>
    <li>Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> in your browser to view the app.</li>
</ol>

<h2>API Details</h2>
<ul>
    <li><strong>Generate User ID and Token:</strong> <code>POST https://staging.questprotocol.xyz/api/loginwithexternaluserid</code></li>
    <li><strong>Get Form Data:</strong> <code>GET https://staging.questprotocol.xyz/api/getcampaigndetails</code></li>
    <li><strong>Submit Form:</strong> <code>POST https://staging.questprotocol.xyz/api/verifycampaignaction</code></li>
</ul>

<h2>Environment Variables</h2>
<p>Set the following environment variables in your <code>.env</code> file:</p>
<pre><code>REACT_APP_API_KEY=k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe
REACT_APP_ENTITY_AUTHENTICATION_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6ImUtYjY2YmNhMjQtZjZjZS00NDg5LWIyZTktZTI0YTkwZTA0ODc3IiwiaWF0IjoxNzE4ODcyODg0fQ.O0DEB_S-dirK4MMa2nm0yqwDhdCtdvTySPGpmCGAqqU
REACT_APP_ENTITY_ID=e-b66bca24-f6ce-4489-b2e9-e24a90e04877
REACT_APP_CAMPAIGN_ID=c-14d4f959-5999-4308-af48-37549b89eec7
</code></pre>

<h2>How it Works</h2>
<h3>App Component</h3>
<ul>
    <li>Contains a button that triggers the popup form.</li>
    <li>Manages the state for whether the form is open or closed.</li>
</ul>

<h3>PopupForm Component</h3>
<ul>
    <li>Generates a user ID when the form is opened.</li>
    <li>Fetches form data from the API using the generated user ID.</li>
    <li>Displays the form fields dynamically based on the fetched data.</li>
    <li>Validates the form fields before submission.</li>
    <li>Submits the form data to the API.</li>
    <li>Handles and displays errors during data fetching and form submission.</li>
</ul>

<h3>Styling and Animation</h3>
<ul>
    <li>The form slides in from the right using CSS animations.</li>
    <li>The form is styled to be user-friendly and responsive.</li>
</ul>

<h2>Error Handling</h2>
<ul>
    <li>Proper error messages are displayed if the form data fails to load or if the form submission fails.</li>
    <li>Form validation ensures required fields are filled out before submission.</li>
</ul>

<h2>Deployment</h2>
<ol>
    <li>Build the app for production:
        <pre><code>npm run build</code></pre>
    </li>
    <li>Deploy the contents of the <code>build</code> directory to your preferred hosting service.</li>
</ol>

<h2>Submission</h2>
<ol>
    <li>Submit the source code via a GitHub repository link.</li>
    <li>Ensure the code is well-documented and organized.</li>
    <li>Deploy the app and share a link to it.</li>
    <li>Include setup instructions and a video walkthrough of the app's functionality.</li>
</ol>

</body>
</html>
