import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { PiCopyrightFill } from "react-icons/pi";

export const Footer = ({theme}) => {

  const styles = {
    main : `w-full py-5 sm:py-10 flex justify-center ${theme=='light' ? 'bg-gradient-to-br from-primary-400 to-secondary-400' : 'bg-gradient-to-br from-primary-300 to-primary-100'}`,

    content: 'w-[90%] max-w-[1200px] flex flex-col gap-5 sm:flex-row items-center sm:items-start',
    txtBox: 'w-full flex flex-col items-center', 
    title : 'font-bold text-2xl sm:text-3xl',
    txt : 'font-light',
    span : 'flex items-center gap-2',
    txt2 : 'font-light',
    copyRightIcon: 'text-2xl',

    iconsBox: 'flex gap-5',
    icon: `text-4xl sm:text-5xl hover:scale-125 duration-300 ${theme=='light' ? 'hover:text-primary-100/85' : 'hover:text-secondary-400'} `
  }

  const urls = {
    fb : '',
    twit: '',
    git: ''
  }

  return (
    <section className={styles.main}>
      <div className={styles.content}>
        {/* textos */}
          <div className={styles.txtBox}>
            <h1 className={styles.title}>
              NekoStore 
            </h1>
            <h4 className={styles.txt}>
              ningún vídeo se encuentra alojado en nuestros servidores.
            </h4>
            <span className={styles.span}>
              <PiCopyrightFill className={styles.copyRightIcon}/>
              <h4 className={styles.txt2}>Anderson Ollarves Web 2024</h4>
            </span>
          </div>
        { /* redes */}
          <div className={styles.iconsBox}>
            <FaFacebook className={styles.icon}/>
            <AiFillTwitterCircle className={styles.icon}/>
            <FaGithub className={styles.icon}/>
          </div>
      </div>
    </section>
  )
}
