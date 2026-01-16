/* JSX
AppContext.jsx
*/

import { COLORTHEME } from "../config/theme/colorTheme";

import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  // Theme:

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Change CSS root colors
  useEffect(() => {
    const colors = COLORTHEME[theme];
    const root = document.documentElement;

    root.style.setProperty("--text-main", colors.textMain);
    root.style.setProperty("--text-alt", colors.textAlt);
    root.style.setProperty("--bg-main", colors.bgMain);
    root.style.setProperty("--bg-alt", colors.bgAlt);
    root.style.setProperty("--accent-main", colors.accentMain);
    root.style.setProperty("--accent-alt", colors.accentAlt);
  }, [theme]);

  // DEBUG Fn: console.log(theme) onToggleTheme
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  // Todo:

  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        todoList,
        addTodo,
        toggleTodo,
        deleteTodo,

        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContextProvider");
  }
  return context;
}
