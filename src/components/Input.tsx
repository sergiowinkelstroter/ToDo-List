import { PlusCircle } from "phosphor-react";

import styles from "../styles/Input.module.css";
import { useState } from "react";

interface InputProps {
  onNewTask: (title: string) => void;
}

export const Input = ({ onNewTask }: InputProps) => {
  const [title, setTitle] = useState("");

  function handleNewTask() {
    onNewTask(title);
    setTitle("");
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <button className={styles.button} onClick={handleNewTask}>
        <span>Criar</span> <PlusCircle size={18} />
      </button>
    </div>
  );
};
