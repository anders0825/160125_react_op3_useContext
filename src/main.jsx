/* JSX
main.jsx
*/

import { AppContextProvider } from "./context/AppContext.jsx";

// react_modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// App.jsx - component:
import App from "./App.jsx";

// css:
import "./styles/global.css";
import "./styles/index.css";
import "./styles/App.css";

// myComponents:

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
