import React from 'react'
import { NavLink } from 'react-router-dom'

export const Result = ({data,theme}) => {

    const styles = {
        main : `cursor-pointer rounded-lg group shadow-[0px_0px_10px_10px] ${theme == 'light' ? 'shadow-primary-400' : 'shadow-primary-300'}`,
        topBox: 'flex w-full h-[300px] ',
        image: 'size-full object-cover rounded-t-lg',
        lowerBox: ` rounded-b-lg ${theme == 'light' ? 'bg-primary-400/85' : 'bg-primary-300/85'}`,
        text: `text-2xl font-bold py-2 text-center ${theme == 'light' ? 'group-hover:text-white' : 'group-hover:text-primary-100' }`

    }

  return (
      <article className={styles.main}
          data-aos="zoom-in"
      >
          <NavLink to={`/details/${data.name}`}>
              <div className={styles.topBox}>
                  <img
                      className={styles.image}
                      src={data.images[2]}
                      alt={data.name + '-poster'}
                  />
              </div>
              <div className={styles.lowerBox}>
                  <h2 className={styles.text}>
                      {data.name}
                  </h2>
              </div>
          </NavLink>

      </article>
  )
}
