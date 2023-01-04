import { PlusCircle } from "phosphor-react";

import styles from "../styles/Input.module.css";

export const Input = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button}>
        <span>Criar</span> <PlusCircle size={18} />
      </button>
    </div>
  );
};
