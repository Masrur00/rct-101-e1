import React, { useState } from "react";
import AddTask from "./AddTask/AddTask"
import TaskHeader from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks";
import styles from "./taskApp.module.css";
import task from "../data/tasks.json"

const TaskApp = () => {
  const [data,setData] = useState(task);
  
  const AddData = (val)=> {
    
      const newData = 
        {
          "id": data.length + 1,
          "text": val,
          "done": false,
          "count": 786,
        }
      
      setData([...data, newData])
      
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask AddData={AddData} />
      <Tasks data={data} /> 
    </div>
  );
};

export default TaskApp;
