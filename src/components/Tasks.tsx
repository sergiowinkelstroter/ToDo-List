import { Trash } from "phosphor-react";
import styles from "../styles/Tasks.module.css";

import { EmptyTasks } from "./EmptyTasks";

export interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TasksProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onCompletedTask: (id: string) => void;
}

export const Tasks = ({ tasks, onDeleteTask, onCompletedTask }: TasksProps) => {
  const completedTasks = tasks.filter((task) => task.isComplete).length;

  return (
    <main className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <p className={styles.tasksCreated}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.tasksCompleted}>
          Concluídas{" "}
          <span>
            {completedTasks} de {tasks.length}
          </span>
        </p>
      </div>
      <div>
        {tasks.length === 0 ? (
          <EmptyTasks />
        ) : (
          tasks.map((task) => (
            <div key={task.id} className={styles.task}>
              <div>
                <input
                  type="checkbox"
                  onClick={() => onCompletedTask(task.id)}
                />
                <p className={task.isComplete ? styles.titlecompleted : ""}>
                  {task.title}
                </p>
              </div>
              <button onClick={() => onDeleteTask(task.id)}>
                <Trash size={24} />
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
};
