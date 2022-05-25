import React from "react";
import TaskHeader from "./components/TaskHeader";

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
