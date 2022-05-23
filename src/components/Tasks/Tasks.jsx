import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({ data }) => {
  // NOTE: do not delete `data-cy` key value pair
  
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {data.map(d => <Task key={d.id} data={d} /> )}
        
        {/* Task List */}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        <h2>Empty List</h2>
        <h4>Add a new task above</h4>
      </div>
    </>
  );
};

export default Tasks;
