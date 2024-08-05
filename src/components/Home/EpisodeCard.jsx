import React, { useEffect, useState } from 'react'
import data from '../../scripts/data'
import { NavLink } from 'react-router-dom'

export const EpisodeCard = ({data,theme}) => {

  const styles = {
    main: `w-full h-[150px] group relative flex items-end rounded-lg cursor-pointer shadow-[0px_0px_7px_6px] shadow-transparent duration-500 ${theme == 'light' ? 'hover:shadow-primary-400' : 'hover:shadow-primary-300 '}`,
    imageBox: 'size-full flex overflow-hidden rounded-lg duration-500',
    image: 'z-0 top-0 size-full  object-cover group-hover:scale-150 duration-500',
    imageBg: 'absolute rounded-lg z-10 size-full bg-gradient-to-b from-transparent to-black/50 group-hover:to-black duration-500',
    txtMainBox: 'absolute text-white z-20 p-1 w-full ',
    title: '',
    txtLowerBox:'flex text-[12px] justify-between',
    lowerTxt:'bg-orange-500/85 rounded-full px-2'
  }



  const [season,setSeason] = useState(1);
  const [episode,setEpisode] = useState(1);
  const [url,setUrl] = useState('');

  const HandleSeason = ()=>{
    let s;
    if(data.seasons.length <= 1){
      s = 1
      setSeason(s)
      return 0
    } else {
      s = data.seasons.length;
      setSeason(s)
      return s-1
    }

  }

  const HandleEpisode = (value)=>{
    let ep = data.seasons[value].episodes.length;
    setEpisode(ep)
    return (ep-1);
  }

  const getUrl = ()=>{
    let name = data.name
    let season = HandleSeason();
    let episode = HandleEpisode(season);
    setUrl(`/media/${name}/${season}/${episode}`);
  }

  useEffect(()=>{
    getUrl();
  },[url])



  return (
    <article
      data-aos='zoom-in'
    >
      <NavLink 
        className={styles.main}
        to={url}
      >
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src={data.images[1]}
            alt={data.name + '-poster'}
          />
        </div>
        <div className={styles.imageBg}></div>
        {/* textos */}
        <div className={styles.txtMainBox}>
          <h5 className={styles.title}>
            {data.name}
          </h5>
          <div className={styles.txtLowerBox}>
            <h5 className={styles.lowerTxt}>
              Temporada {season}
            </h5>
            <h5 className={styles.lowerTxt}>
              Episodio {episode}
            </h5>
          </div>
        </div>
      </NavLink>
    </article>
  )
}
