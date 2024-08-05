import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export const EpisodeList = ({episodes,theme,id,s}) => {

    const [listIsOpen,setListOpen] = useState(false);

    const HandleListOpen = ()=>{
        setListOpen(!listIsOpen);
    }

    let styles = {
        main: `w-full p-5 rounded-lg flex flex-col gap-5 items-center ${theme == 'light' ? 'bg-gradient-to-bl from-primary-100 to-primary-400/50' : 'bg-gradient-to-br from-primary-300/75 to-primary-100/50'}`,
        btn: `flex gap-5 items-center group ${theme == 'light' ? 'text-secondary-400 ' : 'text-white hover:text-primary-100'}`,
        btnTxt: `text-2xl duration-200 group-hover:tracking-widest ${theme == 'light' ? '' : ''}`,
        icon: `text-2xl duration-300 animate-pulse`,

        mainList : 'w-full py-2 flex-col gap-5 duration-300 ',
        itemList : `flex gap-5 group rounded cursor-pointer ${theme == 'light' ? 'hover:bg-primary-400' : 'hover:bg-primary-300'}`,
        imageBox : 'size-20 rounded-l overflow-hidden',
        image    : 'size-full object-cover',
        detailsBox:`flex flex-col gap-2 ${theme == 'light' ? 'group-hover:text-white' : 'group-hover:text-secondary-400 text-white'}`,
        title    : 'mt-2 font-bold',
        cap      : 'font-light'
    }


    listIsOpen ? styles.mainList+='flex opacity-100' : styles.mainList+='hidden opacity-0';

  return (
    <section className={styles.main}>
        <button 
            className={styles.btn}
            onClick={()=>HandleListOpen()}
        >
            <MdKeyboardDoubleArrowDown className={styles.icon}/>
            <h5 className={styles.btnTxt}>
                Más episodios de la Temporada
            </h5>
        </button>
    <ul className={styles.mainList}>
        {episodes.episodes.map((ep,index)=>(
            <li key={index} >
                <NavLink className={styles.itemList}
                    to={`/media/${id}/${s}/${index}`}
                >
                    <div className={styles.imageBox}>
                        <img
                            className={styles.image}
                            src={episodes.image}
                            alt=""
                        />
                    </div>

                    <div className={styles.detailsBox}>
                        <h4 className={styles.title}>
                            Temporada {Number(s)+1}
                        </h4>
                        <h5 className={styles.cap}>
                            Episodio {index + 1}
                        </h5>
                    </div>
                </NavLink>
            </li>
        ))}
    </ul>
    </section>

  )
}
