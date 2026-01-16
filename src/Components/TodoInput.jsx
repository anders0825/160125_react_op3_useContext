/* JSX
TodoInput
*/

import DarkAddIcon from "../assets/icons/DarkAdd_icon.png";
import LightAddIcon from "../assets/icons/LightAdd_icon.png";

import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function TodoInput() {
  const { theme, addTodo } = useAppContext();

  const [text, setText] = useState("");

  async function onSubmit() {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  }

  return (
    <>
      <section id="TodoInput-cont">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          placeholder="Task..."
        />
        <img
          src={theme === "dark" ? LightAddIcon : DarkAddIcon}
          alt="Add_Icon"
          onClick={() => onSubmit()}
        />
      </section>
    </>
  );
}
