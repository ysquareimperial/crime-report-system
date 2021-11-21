import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from "./registerServiceWorker";
import { UserProvider } from "./contextApi/UserContext"
import { BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
    <UserProvider>
        <Router>
            <App />
        </Router>
    </UserProvider>, document.getElementById("root"));
registerServiceWorker();
