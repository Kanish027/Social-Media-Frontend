// Import necessary dependencies from React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import the main component of the application
import App from "./App";

// Import BrowserRouter for routing capabilities
import { BrowserRouter as Router } from "react-router-dom";

// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Import custom CSS for additional styling
import "./index.css";

// Import Provider to provide Redux store to the application
import { Provider } from "react-redux";

// Import the Redux store
import store from "./app/store";

// Create a root for React rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the root of the application, providing Redux store and Router
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
