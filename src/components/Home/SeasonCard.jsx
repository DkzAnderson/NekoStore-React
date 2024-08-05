import React from 'react'
import { NavLink } from 'react-router-dom'

export const SeasonCard = ({data,theme}) => {

  const styles = {
    main : 'flex flex-col py-2 group ',
    imageBox:'w-full h-[280px] lg:h-[360px] rounded-lg relative',
    imageBg:'absolute size-full bg-transparent rounded-lg',
    image:`w-full h-full object-cover shadow-[0px_0px_20px_7px] duration-300 shadow-transparent rounded-lg ${theme == 'light' ?' group-hover:shadow-primary-400' : 'group-hover:shadow-primary-300'}`,
    textBox: 'mt-3',
    text: `text-xl font-bold text-center duration-300 ${theme == 'light' ? 'group-hover:text-primary-400 text-black' : 'group-hover:text-primary-300 text-white'}`

  }

  return (
    <NavLink 
      to={`/details/${data.name}`}
      className={styles.main}
      data-aos='zoom-in'
    >
      {/*image */}
      <div className={styles.imageBox}>
        <div className={styles.imageBg}></div>
          <img 
            className={styles.image}
            src={data.images[0]} 
            alt="" 
          />
      </div>
      {/* text */}
      <div className={styles.textBox}>
        <h2 className={styles.text}>
          {data.name}
        </h2>
      </div>
    </NavLink>
  )
}
