import React from 'react'
import data from '../../scripts/data'
import { SeasonCard } from './SeasonCard'

export const Popular = ({theme}) => {

  const styles = {
    main: 'px-2 col-span-2 mt-10',
    title: 'font-semibold text-2xl py-5 mb-5',
    serieList: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-5 py-2 gap-2'
  }

  return (
    <div className={styles.main}>

      <h2 className={styles.title}>
        Popular
      </h2>
      
      <ul className={styles.serieList}>
        {data.map((data)=>(
          <li key={data.name}>
            <SeasonCard data={data} theme={theme}/>
          </li>
        ))}
      </ul>
    </div>
  )
}
