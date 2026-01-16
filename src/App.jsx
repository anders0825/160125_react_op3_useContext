/* JSX
App.jsx
*/

import { useAppContext } from "./context/AppContext";

// react_modules:
import { useState } from "react";

// myComponents:
import Navbar from "./Components/Navbar";
import TodoList from "./Components/TodoList";

function App() {
  // JavaScript:

  const { theme } = useAppContext();

  return (
    <>
      <h1>Todo List:</h1>
      <Navbar />
      <TodoList />
    </>
  );
}

export default App;
