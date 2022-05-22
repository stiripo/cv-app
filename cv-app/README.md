# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

# About the Project

This is a single-page React-based application created with the Create React App tool.

The aim of this app is to create a personal professional CV web application that allows users to have a working prototype to introduce themselves to an audience.

The application supports desktop, mobile, and tablet browsers. It has an adaptable layout. Screen size breakpoints for media queries are > 600px and < 600px.

For CSS implementation, SCSS pre-processor based on node-sass was used.
The app has two views, or pages, - the Home page and the About page. The routing is set up with the React Router Dom library.

The app is built from independent components which are reused throughout the app. Some components are more complex and consist of other basic components.

The Navigation side menu allows end users to navigate across the main sections on the About page (react scroll library).
The menu supports hide/show functionality to increase the working space of the main resume application page (the menu slides in and out upon pressing the hamburger icon).

The application supports back-to-top functionality. When the user presses the back-to-top button, the browser scrolls to the top of the page (react scroll library).
The Go Back button takes the user back to the Home page.

The app uses MirageJS (API mocking library) which mocks fetching data from and posting data to the server. The education component is built asynchronously. Its asynchronous logic is implemented with the help of MirageJs and createAsyncThunk. When the data is being fetched and the status is 'loading', the Education component renders an animated spinning wheel. When the data is fetched and the status is 'fulfilled', the data is rendered. If the data didn’t load, an error message is rendered.

The app state is implemented through Redux (for Education and Skills components).
For less complex functionalities useState hook is used (the Nav panel slide-in/slide-out functionality, Skills form).

The Skills component consists of the form which is hidden by default and the skills bar component. The form is implemented with the help of the React Formik library.
The user can enter a skill name and range, and upon clicking on the Add button, the new skill will appear in the bar chart below.

The Skills state is empty by default. When the page is loaded, the app checks if there’s anything in the localStorage, and adds this data to the Redux store. This data is rendered on the page. If the localStorage is empty, the skills data is fetched from the mock server (MirageJS), and added to the store. When the user adds a new skill, this data is added to the Redux store and posted to the mock server (MirageJS), and the skills state is also copied to the localStorage (through middleware). On reload, the state is updated with the data from the localStorage.

Connecting the skills state with the localStorage ensures that when the user reloads the browser page, the last entered skills are rendered in the Skills bar component.

The Portfolio component displays portfolio items which can be filtered using tabs. This functionality is implemented with the help of Isotope layouts.
When hovering over a portfolio item, a box with description and a link to the item slides into view.

The contacts component shows a list of contact details. When the user presses Email, the system mail agent opens automatically.

For test implementation, the Jest tool was used.
The test coverage threshold was set to 40% in Jest config.
