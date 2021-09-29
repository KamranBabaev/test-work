import React from "react";
import styles from './MainPage.module.css'
import {BestItem} from "../BestItem/BestItem";

export const MainPage = ({results}) => {

  console.log(results)
  return (
    <div className={styles.main}>
      <div className={styles.bests_items}>
        {
          results.length > 0
            ? results.map(res => <BestItem
              key={res.id}
              name={res.name}
              sum={res.sum}
            />)
            : <div>загрузка...</div>
        }
      </div>
      <button>
        повторить аукцион
      </button>
    </div>
  )
}