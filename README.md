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

This is a React based application created with the create-react-app tool.

The aim of this app is to create a professional CV web application.

The application supports desktop, mobile, and tablet browsers. It has an adaptable layout.

Routing is set up with the React-router-dom library. The app has two pages -  the Home page and the About page.  Learn More and Go Back buttons are used for navigating between the pages.

The app uses MirageJS mocking library which mocks fetching data from and posting data to a server.

The navigation side menu allows end users to navigate across the main sections on the About page. It is implemented with the React scroll library. Every menu option is a Link component provided by the library. Its attributes determine the target element to which the app should scroll upon clicking, set the speed of scrolling, and make the Link highlighted when scroll is at its target position. The navigation menu can be hidden to increase the working space of the main resume application page. The menu slides in and out upon pressing the hamburger icon. 
The application supports back-to-top functionality.

The state management is organized locally (useState hook) for components with simple logic and globally (Redux) for components with more complex logic.

The useState hook is used for the following features:
- Navigation panel slide-in/slide-out on an icon click,
- Skills form hide / show on a button click,
- Portfolio filtering functionality.

The portfolio component displays portfolio items which can be filtered using the tabs. This functionality is implemented with the Isotope library. Isotope filters items based on class selectors. Clicking on All, UI or Code tabs will save the respective class selector to the state, and this will trigger screen update where only items with the selected classnames will be displayed and the rest will be hidden from view. To ensure the screen is updated every time the class selector changes after a tab click, Isotope arrange method is called from the useLayoutEffect hook with the filter selector set as a dependency.

Redux is used for components with a relatively complex logic. The app utilizes the following Redux-toolkit methods:
- configureStore for setting up the store,
- createSlice which generates action creators and the reducer function,
- createAsyncThunk for generating thunks.

Redux is used for managing the state of Education and Skills components.

Education component fetches its content from the server (MirageJS). CreateAsyncThunk API is used to generate a thunk function for fetching the data. Extrareducers added to the Education slice allow conditional rendering depending on the status of the request. If the status is loading, fulfilled or rejected, React respectively renders a spinning wheel, fetched data or error message.

The Skills component consists of a form which is hidden by default and the skills bar component. The form is implemented with the help of Formik library. The user can enter a skill name and range, and upon clicking on the Add button the new skill will appear in the bar chart below. The form input is subject to validation. The validation function as well as onSubmit event handlers are passed in the useFormik hook.

The contacts component shows a list of contact details. When the user presses Email, the system mail agent opens automatically.

For test implementation, the Jest tool was used.