import React from 'react'
import data from '../../scripts/data'
import { IoMdPlayCircle } from "react-icons/io";

export const SideBar = ({theme}) => {

  const styles = {
    main: 'hidden lg:flex ',
    list: 'w-full flex flex-col gap-2',
    itemList: `p-1 group cursor-pointer flex w-full items-center justify-between rounded-full shadow-[0px_0px_10px_4px] duration-500 shadow-transparent ${theme == 'light' ?'hover:bg-primary-400 hover:shadow-primary-400' :'hover:bg-primary-300/85 hover:shadow-primary-300'}`,
    liTxt : `text-[14px] group-hover:tracking-wider duration-300 font-semibold ${theme == 'light' ?'group-hover:text-white' :'text-secondary-400 group-hover:text-white'}`,
    liTag : `text-[12px] px-2 rounded-full font-bold duration-300 ${theme == 'light' ?'text-secondary-300 bg-secondary-400' :'bg-primary-100'}`,
    liIcon: `text-xl duration-500  ${theme == 'light' ?'text-white' :'text-primary-300 group-hover:text-white'}`
    
  }

  return (
    <div className={styles.main}
      data-aos="zoom-in"
    >
      <ul className={styles.list}>
        {data.map((data)=>(
          <li key={data.name}
            className={styles.itemList}
          >
            <IoMdPlayCircle className={styles.liIcon}/>
            <h5 className={styles.liTxt}>
            {data.name}
            </h5>
            <h5 
              className={styles.liTag}
            >
              ANIME
            </h5>
            
          </li>
        ))}
      </ul>
    </div>
  )
}
