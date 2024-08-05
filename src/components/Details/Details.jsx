import React, { useEffect } from 'react'
import { useState } from 'react'
import data from '../../scripts/data'
import { Season } from './Season'
import { NavBar } from '../NavBar/NavBar'
import './Scroll.css'
import { useParams } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Details = () => {

  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  
  const params = useParams();

  const [details,setDetails] = useState(data[0]);
  const [background,setBackground] = useState(data[0].images[0]);

  const HandleBackground = ()=>{
    setBackground(details.images[0])
  }

  const styles = {

    main: 'p-4 pb-20 sm:pb-40 w-full flex gap-10 flex-col min-h-[90vh] max-w-[1200px]',
    content: 'flex relative size-full justify-center pb-20',
    detailsBox: `z-20 w-full grid gap-5 p-2 rounded-lg ${theme == 'light' ? 'bg-slate-500/75 ' : 'bg-slate-900/75'}`,
    title: 'text-3xl font-bold',
    tag : `px-2 py-0.5 text-white font-bold rounded-full place-self-start ${theme == 'light' ? 'bg-secondary-400 text-black' : 'bg-primary-100'}`,
    description:`sm:text-lg ${theme == 'light' ? 'text-gray-950' : 'text-gray-300 '}`,

    lowerBox: 'z-20 grid justify-items-center items-start sm:grid-cols-2 gap-10 sm:gap-5',
    imageBox: `w-[90%] max-w-[340px] h-[520px] rounded-lg overflow-hidden shadow-[0px_0px_15px_10px] ${theme == 'light' ? 'shadow-primary-400 ' : 'shadow-primary-300' } `,
    image: 'object-cover bg-black size-full',

    seasonsBox: `scroll w-full flex flex-col h-auto max-h-[520px] max-w-[500px] overflow-auto rounded-lg py-2 z-20 ${theme=='light' ? 'bg-primary-100/85' : 'bg-gradient-to-br from-primary-300 to-primary-100/85'}`,
    itemBox : 'flex w-full'

  }
  // recarga del componente al cambiar parametros de serie
  useEffect(() => {
    const filter = data.filter(item => item.name == params.id);
    setDetails(filter[0])
  }, [params])

  // recarga de componente al cambiar de tema
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <section className='flex flex-col items-center size-full font-nunito'>
      <NavBar theme={theme} setTheme={setTheme} element={element} />
      {/* content */}
      <div className={styles.content}>
        <div className={styles.main}>
          {/*Textos*/}
          <div className={styles.detailsBox}>
            <h2 className={styles.title}>
              {details.name}
            </h2>
            <h4 className={styles.tag}>
              ANIME
            </h4>
            <p className={styles.description}>
              {details.description}
            </p>
          </div>
          {/* inferior */}
          <div className={styles.lowerBox}>
            {/* Imagen */}
            <div className={styles.imageBox}>
              <img
                className={styles.image}
                src={details.images[0]}
                alt=""
              />
            </div>
            {/* Temporadas */}
            <div className={styles.seasonsBox}>
              {details.seasons.map((data, index) => (
                <div
                  key={index}
                  className={styles.itemBox}
                >
                  <Season data={data} theme={theme} serieName={details.name} season={index}/>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* fondo */}
        <div className='absolute size-full top-0 left-0 z-0 '>
          <div className='absolute z-10 size-full bg-gradient-to-br from-black/20 to-black'></div>
          <img
            className='size-full z-0 object-cover'
            src={details.images[2]}
            alt=""
          />
        </div>
      </div>

      <Footer theme={theme} setTheme={setTheme} element={element}/>
    </section>
  )
}
