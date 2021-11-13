import React from "react";
import ReactDom from "react-dom";
import './index.css';
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux";


ReactDom.render(
    <App />,
    document.getElementById("root")

);

