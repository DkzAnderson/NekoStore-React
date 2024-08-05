import React from 'react'
import { EpisodeCard } from './EpisodeCard'
import data from '../../scripts/data'
import { GiSevenPointedStar } from "react-icons/gi";

export const LastEpisodes = ({theme}) => {

  const styles = {
    main: 'col-span-4 lg:col-span-3 flex flex-col px-2 relative overflow-hidden',
    title: 'col-span-2 mb-5 text-2xl font-semibold z-20',
    episodeList: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 py-2 gap-x-2 gap-y-5 z-20'

  }

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>
        Ultimos Episodios
      </h2>
      <div className={styles.episodeList}>
        {data.map((data)=>(
          <div key={data.name}>
           <EpisodeCard  data={data} theme={theme}/>
          </div>
        ))}
      </div>
        {/* background */}
    </div>
  )
}
