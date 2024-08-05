import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Scroll.css'
import { NavLink } from 'react-router-dom';

export const Season = ({data,theme,serieName,season}) => {

  let styles = {
    main  : `w-full flex flex-col items-center px-8`,
    listBox  : 'w-full flex group justify-between px-1 py-2 relativle cursor-pointer',
    title : `text-xl font-bold ${theme == 'light' ? ' group-hover:text-primary-400' : 'group-hover:text-primary-100 '}`,
    icon  : `text-xl duration-300 ${theme == 'light' ? 'group-hover:text-primary-400' : 'group-hover:text-primary-100'}`,
    list  : `scroll gap-2 flex rounded-lg flex-col w-full overflow-auto items-center duration-300`,
    
    itemList: {
      main : `p-1 w-full gap-3 flex text-center cursor-pointer rounded-lg hover:tracking-widest duration-300 ${theme == 'light' ? 'hover:bg-primary-400 hover:text-white' : 'hover:bg-primary-100 '}`,
      txtBox:'flex flex-col items-start mt-2 gap-2',
      title: 'text-lg font-bold',
      episode : 'text-sm ',
      imageBox:'size-24 overflow-hidden rounded-lg',
      image  : 'size-full object-cover'
    }
  }

  const [dropwdow,dropwdowIsOpen] = useState(false);

  const HandleOpenDropdown = ()=>{
    dropwdowIsOpen(!dropwdow);
  }

  dropwdow ? styles.list += ' h-auto py-2' : styles.list += ' h-0';
  dropwdow ? styles.itemList.main += ' h-auto ' : styles.itemList.main += ' h-0 '; 
  dropwdow ? styles.icon +=' transform rotate-180' : styles.icon += ' transfrom rotate-0'

  return (
    <div className={styles.main}>
      {/* titulo de la lista */}
      <span 
        className={styles.listBox}
        onClick={()=>HandleOpenDropdown()}
      > 
        <h2 className={styles.title}>
          {data.name}
        </h2>

        <IoIosArrowDown className={styles.icon}/>
      </span>
      {/* lista de episodios */}
      <ul className={styles.list}>
        {data.episodes.map((episode,index)=>{
          let cap = index+1
          return (
            <li key={index} className='w-full'>
              <NavLink
              className={styles.itemList.main}
                to={`/media/${serieName}/${season}/${index}`}
              >
              <div className={styles.itemList.imageBox}>
                <img
                  className={styles.itemList.image}
                  src={data.image}
                  alt={data.name + '-poster'}
                />
              </div>


              <div className={styles.itemList.txtBox}>
                <h4 className={styles.itemList.title}>
                  {data.name}
                </h4>
                <h5 className={styles.itemList.episode}>
                  Episodio {cap}
                </h5>
              </div>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
