import React from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  // let count = 0;
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button className={styles.btnCount} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button className={styles.btnCount} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
