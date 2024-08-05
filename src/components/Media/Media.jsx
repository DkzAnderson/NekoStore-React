import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { NavBar } from '../NavBar/NavBar';
import data from '../../scripts/data';
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { EpisodeList } from './EpisodeList';

export const Media = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  const navigate = useNavigate();

  const [url,setUrl] = useState('');
  const [season,setSeason] = useState(0);
  const [episode,setEpisode] = useState(0);
  const [list,setList] = useState(data[0].seasons[0])

  const params = useParams();

  const styles = {
    main : 'w-full flex flex-col font-nunito',
    content: 'flex flex-col items-center w-full mt-5 px-2 max-w-[1200px]',
    mediaBox: `flex w-full flex-col gap-2 max-w-[1000px] rounded-lg ${theme == 'light' ? 'bg-primary-400/85' : 'bg-primary-300'}`,
    iframe: 'w-full h-[350px] md:h-[500px] rounded-t-lg',
    lowerBox: 'flex w-full justify-between p-2',
    afterBtn: 'hover:-rotate-45 duration-300',
    nextBtn : 'hover:rotate-45 duration-300',
    icons: 'text-3xl text-white',

    detailsBox: 'flex w-full sm:w-[80%] flex-col gap-2 mt-5',
    title: 'font-bold text-2xl text-white',
    detailsLowerBox: 'flex gap-2 text-white',
    season: 'font-bold',
    episode: ''
  }
  // recarga del componente al cambiar parametros de serie
  useEffect(() => {
    data.forEach(element => {
      if (element.name == params.id) {
        setUrl(element.seasons[params.season].episodes[params.episode])
        setSeason(params.season)
        setEpisode(params.episode)
        setList(element.seasons[params.season])
      }
    });

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
    <section className={styles.main}>
      <NavBar theme={theme} setTheme={setTheme} element={element}/>
        {/* content */}
      <div className='w-full flex justify-center min-h-[82vh]'>
        <div className={styles.content}>
          {/* mediaPlayer */}
          <div className={styles.mediaBox}>
            <iframe 
              className={styles.iframe} 
              src={url}
              allowFullScreen
            />
            {/* buttons box */}
            <span className={styles.lowerBox}>
              {episode <= 0 ?
                <button disabled>
                  <MdCancel className='text-3xl text-white'/>
                </button> :
                <NavLink className={styles.afterBtn}
                  to={`/media/${params.id}/${season}/${Number(episode)-1}`}
                >
                  <BsFillArrowLeftCircleFill className={styles.icons} />
                </NavLink>
              }
              {
                episode >= list.episodes.length-1 ?
                  <button>
                    <MdCancel className='text-3xl text-white'/>
                  </button>
                  :
                  <NavLink className={styles.nextBtn}
                    to={`/media/${params.id}/${season}/${Number(episode) + 1}`}
                  >
                    <BsFillArrowRightCircleFill className={styles.icons} />
                  </NavLink>
              }


            </span>
          </div>
          {/* textos */}
          <div className={styles.detailsBox}>
            <h2 className={styles.title}>
              {params.id}
            </h2>
            <span className={styles.detailsLowerBox}>
            <h4 className={styles.season}>
              Temporada {Number(params.season)+1}
            </h4>
            <h5 className={styles.episode}>
              Episodio {Number(params.episode)+1}
            </h5>
            </span>

          </div>
          {/* capitulos */}
          <div className='w-full sm:w-[80%] px-2 mt-5 mb-20'>
            <EpisodeList episodes={list} theme={theme} id={params.id} s={params.season}/>
          </div>
        </div>
      </div>
    </section>
  )
}
