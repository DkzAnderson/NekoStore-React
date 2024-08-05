import React, { useEffect, useState } from 'react'
import { NavBar } from '../NavBar/NavBar'
import { useParams } from 'react-router-dom'
import data from '../../scripts/data'
import { Result } from './Result'



export const SearchResult = ({theme,setTheme,element}) => {

    const params = useParams();
    const [list,setList] = useState([]);
    const [isCategory,setCategory] = useState(false);

    const styles = {
        main : 'flex flex-col size-full items-center  min-h-[88vh]',
        content:{
            main: 'flex max-w-[1200px] flex-col gap-5 py-5',
            title: 'text-3xl text-center font-bold',
            list: 'grid sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 justify-items-center gap-5',
            li : 'p-4 max-w-[350px]'
        }
    }

    const categories = [
        {
          name:'Acción',
          link:'/search-result/action'
        },
        {
          name:'Aventura',
          link:'/search-result/adventure'
        },
        {
          name:'Fantasía',
          link:'/search-result/fantasy'
        },
        {
          name:'Isekai',
          link:'/search-result/isekai'
        },
        {
          name:'Shonen',
          link:'/search-result/shonen'
        },
    ]


    const SearchResults = ()=>{
        let searchCategory = false;
        let dataFilter = [];

        categories.forEach(element => {
            if(element.name == params.id){
                searchCategory = true;
            } 
        });

        if(searchCategory){
                data.forEach(item => {
                    item.categories.forEach(element => {
                        if(element == params.id){
                            dataFilter.push(item);
                        }
                    });
                });

        } else {
            dataFilter = data.filter( item =>{
                return item.name.toLowerCase().includes(params.id.toLocaleLowerCase());
            });
        }

        setCategory(searchCategory);
        setList(dataFilter);
    }

    useEffect(()=>{
        SearchResults();
    },[params])

  return (
    <section className={styles.main}>
        <NavBar theme={theme} setTheme={setTheme} element={element}/>
            {/* content */}
        <div className='px-2'>
            {list.length >= 1 ? 
                <div className={styles.content.main}>
                    <h2 className={styles.content.title}>
                        Resultados para la búsqueda de {isCategory && 'la categoría'} : {params.id}
                    </h2>
                    <ul className={styles.content.list}>
                        {list.map((data)=>(
                            <li 
                                key={data.name}
                                className={styles.content.li}
                            >
                                <Result data={data} theme={theme}/>
                            </li>
                        ))}
                    </ul>
                </div> 
                : 
                <div className={styles.content.main}>
                    <h2 className={styles.content.title}>
                        No se encontraron resultados para : {params.id}
                    </h2>
                </div>
            }
        </div>
    </section>
  )
}
