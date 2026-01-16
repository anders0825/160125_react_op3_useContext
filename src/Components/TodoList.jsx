/* JSX
TodoList
*/

import { useAppContext } from "../context/AppContext";

export default function TodoList() {
  const { todoList, toggleTodo, deleteTodo } = useAppContext();

  return (
    <>
      <ul id="TodoList-cont">
        {todoList.map((todo) => (
          <li className="todo-card" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <input className="card-input" value={todo.text} type="text" />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
