import { Header } from "./components/Header";
import { Input } from "./components/Input";

import styles from "./App.module.css";
import { Task, Tasks } from "./components/Tasks";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  function addNewTask(title: string) {
    const newList = [...taskList];
    newList.push({
      id: uuidv4(),
      title,
      isComplete: false,
    });
    setTaskList(newList);
  }

  function deleteTask(id: string) {
    const newList = taskList.filter((task) => task.id !== id);

    setTaskList(newList);
  }

  function completedTask(id: string) {
    const newList = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTaskList(newList);
  }

  return (
    <div className={styles.app}>
      <Header />
      <Input onNewTask={addNewTask} />

      <Tasks
        tasks={taskList}
        onDeleteTask={deleteTask}
        onCompletedTask={completedTask}
      />
    </div>
  );
};
