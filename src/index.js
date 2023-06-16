import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
