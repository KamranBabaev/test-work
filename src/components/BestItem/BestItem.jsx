import React from "react";
import styles from './BestItem.module.css'

export const BestItem = ({key, name, sum}) => {
  return (
    <div className={styles.item}>
      <div key={key} className={styles.name}>{name}</div>
      <div className={styles.sum}>{sum}</div>
    </div>
  )
}