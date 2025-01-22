import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./components/ui/provider"; // Adjust path as needed
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);

// import { Provider } from "@/components/ui/provider"
// import React from "react"
// import ReactDOM from "react-dom/client"
// import App from "./App"

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Provider>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// );