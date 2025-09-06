// react-dom/client module antey seperate file -- createRoot function
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// // App() ---> <App />
createRoot(document.getElementById("root")).render(<App />);
