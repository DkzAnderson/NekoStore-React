import React, { useEffect } from 'react'
import Slider from 'react-slick'
import data from '../../scripts/data'
import { NavLink } from 'react-router-dom'

export const Hero = ({theme}) => {



  const styles = {
    main : `w-full rounded-b-lg ${theme == 'light' ? '' : 'bg-gradient-to-b from-transparent to-primary-100/20'}`,
    slider : {
      mainBox : 'w-full h-[590px] flex flex-col px-10 group',
      imageBox: `w-full h-[80%] cursor-pointer  rounded-lg shadow-lg ${theme == 'light' ? 'shadow-gray-500' : 'shadow-primary-300'}`,
      image: 'object-cover w-full h-full rounded-lg',
      txtBox: `flex p-2 justify-center ` ,
      txt: `font-bold text-3xl text-center cursor-pointer group-hover:underline ${theme == 'light' ? 'group-hover:text-secondary-400 text-black' : 'group-hover:text-primary-300 text-white'}`
    }
  }

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },

      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  }

  /*
      Faltan Funciones para
      Ir a los detalles de la serie
  */

      useEffect(()=>{
      },[theme])

  return (
    <div className={styles.main}>
      <div className='py-20'>
      <Slider {...settings}>
        {data.map((data)=>(
          <div key={data.name}
            
          >
            <NavLink
              to={`/details/${data.name}`}
              className={styles.slider.mainBox}
            >

            {/* image */}
            <div
              className={styles.slider.imageBox}

            >
            <img 
                className={styles.slider.image}
                src={data.images[0]} 
                alt={data.name+'-poster'} 
              />
            </div>
            {/* text */}
            <div className={styles.slider.txtBox}>
              <h2 className={styles.slider.txt}>
                {data.name}
              </h2>
            </div>
            </NavLink>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  )
}
