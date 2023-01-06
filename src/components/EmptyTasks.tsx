import { ClipboardText } from "phosphor-react";

import styles from "../styles/EmptyTasks.module.css";

export const EmptyTasks = () => {
  return (
    <div className={styles.empty}>
      <ClipboardText size={74} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
};
