import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./components/Course/Bookcontext.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <BookProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </BookProvider>
    </AuthProvider>
  </BrowserRouter>
);
