import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ AddData}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [ value , setValue] = useState("");
  return (
    <div className={styles.todoForm}>
      <input value={value} onChange={(e)=> setValue(e.target.value)} data-cy="add-task-input" type="text" placeholder="Add task..." />
      <button onClick={()=> AddData(value)} data-cy="add-task-button">+</button>   
        
      
    </div>
  );
};

export default AddTask;
