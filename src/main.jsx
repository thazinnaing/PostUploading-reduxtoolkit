import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { fetchUsers } from "./features/users/userSlices.jsx";
import { BrowserRouter } from "react-router-dom";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
