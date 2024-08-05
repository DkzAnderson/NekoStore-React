import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Hero } from './Hero'
import { Popular } from './Popular'
import { LastEpisodes } from './LastEpisodes'
import { SideBar } from './SideBar'
import { NavBar } from '../NavBar/NavBar'

export const Home = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  const styles = {
    main : 'flex flex-col items-center w-full font-nunito',
    content: 'w-full max-w-[1200px]',
    header: `h-[80px] border-b-[12px]  mb-10 mt-20 rounded-t-2xl flex items-center px-4 ${theme == 'light' ? 'bg-primary-400 border-black' : 'bg-primary-300/75 border-primary-100/70'}`,
    headerTxt: 'font-bold text-xl sm:text-2xl',
    body: 'grid lg:grid-cols-2 w-full py-5',
    bodyTop: 'col-span-2 grid grid-cols-4 lg:gap-x-5'
  }

  useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    Aos.refresh();
  },[])


  return (
    <section className={styles.main}
      data-aos='fade-up'
    >
      <NavBar theme={theme} setTheme={setTheme} element={element} />
      {/* content */}
      <div className={styles.content}>
        <Hero theme={theme} />

        {/* body header */}
        <div className='px-2'
          data-aos="zoom-in"
        >
          <div className={styles.header}>
            <h2 className={styles.headerTxt}>
              NekoStore tu Fuende de Anime online gratis HD
            </h2>
          </div>
        </div>
        {/* body */}
        <div className={styles.body}>
          <div className={styles.bodyTop}>
            <SideBar theme={theme} />
            <LastEpisodes theme={theme} />
          </div>

          <Popular theme={theme} />

        </div>
      </div>


    </section>

  )
}
