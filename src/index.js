import "react-app-polyfill/stable";
import "core-js";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";

import store from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
