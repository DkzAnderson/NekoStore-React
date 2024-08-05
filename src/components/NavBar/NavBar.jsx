import React, { useState } from 'react'
import logo from '../../assets/General/Neko-Store-logo.png'
import { DarkMode } from './DarkMode';
import { GoSearch } from "react-icons/go";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';


export const NavBar = ({theme,setTheme,element}) => {

  const navigate = useNavigate();
  const [showMenu,setShowMenu] = useState(false);
  const [showCategories,setShowCategories] = useState(false);

  const HandleShowMenu = ()=>{
    setShowMenu(!showMenu);
    setShowCategories(false);
  }

  const HandleShowCategories = ()=>{
    setShowCategories(!showCategories);
  }

  const Search = (e)=>{
    e.preventDefault();
    const value = e.target.valueToSearch.value

    if(value.length <= 2){
      alert('Por favor Introduzca al menos 3 carácteres para la búsqueda.')
    } else{
      navigate(`/search-result/${value}`);
    }
  }

  // estilos inicio
  const styles = {
    header: 'w-full head relative flex justify-center items-center '+`${theme == 'light' ? 'bg-primary-100 shadow-lg ' : 'bg-gradient-to-br from-primary-100 to-primary-300/80 shadow-lg shadow-gray-400'}`,
    main: 'w-full max-w-[dvw] relative pr-2 z-40 sm:pr-0 sm:w-[90%] flex items-center justify-between',
    logoBox: 'w-24',
    logo: 'size-full object-contain',

    section:{
      main: 'hidden sm:flex gap-5',
      ul  : 'flex gap-4 px-2',
      li  : `cursor-pointer duration-300 ${theme == 'light' ? 'hover:text-secondary-400 hover:underline hover:tracking-wider ' : 'hover:text-secondary-400'}`,
      link: '',
      inputBox: 'flex items-center justify-between duration-300 w-[150px] hover:w-[250px] bg-white border border-transparent rounded-full overflow-hidden px-4',
      input: 'focus:outline-none max-w-[80%] text-black',
      icon: 'min-w-[10%] text-lg text-black'
    },

    categories:{
      main: 'group/category',
      box : 'flex items-center gap-2',
      text: 'cursor-default duration-300 hover:text-secondary-400 hover:underline ',
      ul  : `absolute w-32 group-hover/category:flex flex-col gap-1 rounded-lg overflow-hidden ${theme == 'light' ? 'group-hover/category:bg-white/75' : 'group-hover/category:bg-black/75 text-secondary-400'}`,
      li  : `hidden cursor-pointer group-hover/category:flex py-2 px-5 hover:tracking-widest duration-300 ${theme == 'light' ? 'hover:bg-secondary-400' : 'hover:text-white hover:bg-primary-300 '}`,
      icon: 'text-xl duration-500 group-hover/category:rotate-180'
    },

  }

  const mobile = {
    btnOpenMenu : 'flex sm:hidden text-3xl',
    btnBox: 'flex relative size-14',
    menu : {
      main: 'absolute left-0 z-0 duration-300 w-full h-auto flex-col items-end '+`${theme == 'light' ? 'bg-gradient-to-br from-primary-100 to-primary-100/80' : 'bg-black/75 text-secondary-400'}`,
      list : 'w-full h-full flex flex-col',
      itemList:' w-full py-2 flex justify-center ',
      categorieTitle : 'w-full justify-center py-2 flex gap-4',
      categorieIcon : 'text-2xl duration-500 rotate-180',
      categorieList : 'w-full flex-col ',
      categorieListItem: 'py-2 text-center '

    },

    searchBar: {
      main : `flex justify-center w-full py-2 `,
      inputBox:`flex duration-300 px-2 justify-between rounded-full py-1 items-center ${theme == 'dark' ? 'bg-gradient-to-tr from-primary-100/50 to-primary-300/50 text-white' : 'bg-white text-black'}`,
      input: `px-4 bg-transparent outline-none`,
      icon : 'text-lg'
    }
  }

  let menuIcon = {
    top : `absolute rounded-full h-[4px] duration-300 ${theme == 'light' ? ' bg-black' : 'bg-gray-300'}`,
    lower:`absolute rounded-full h-[4px] duration-300 ${theme == 'light' ? ' bg-black' : 'bg-gray-300'}`
  }
  
  if(showMenu){
    // true = menu abierto
    menuIcon.top   += ' left-3 top-6 w-7  transform -rotate-45';
    menuIcon.lower += ' left-3 top-6 w-7 transform rotate-45';
    mobile.menu.main += ' transform translate-y-[105px]'
    setTimeout(()=>{
      
    },300)
  }else{
    // false = menu cerrado
    mobile.menu.main += ' top-0 opacity-0 transform -translate-y-[24vh]'
    menuIcon.top += ' left-3 top-5 w-7 transform rotate-0';
    menuIcon.lower+=' left-3 top-7 w-7 transform rotate-0'
    
    setTimeout(()=>{
      
    },300)
  }

  if(showCategories){
    // abierto
    mobile.menu.categorieList += 'flex ';
    mobile.menu.main += ' -top-6';
    mobile.menu.categorieIcon += ' transform rotate-[0deg]'

  } else {
    // cerrado
    mobile.menu.categorieList += 'hidden';
    mobile.menu.main += ' -top-6';

  }
  // estilos final

  const categories = [
    {
      name:'Acción',
      link:'/search-result/Acción'
    },
    {
      name:'Aventura',
      link:'/search-result/Aventura'
    },
    {
      name:'Fantasía',
      link:'/search-result/Fantasía'
    },
    {
      name:'Isekai',
      link:'/search-result/Isekai'
    },
    {
      name:'Shonen',
      link:'/search-result/Shonen'
    },
  ]

  const menu = [
    {
      name:'Inicio',
      link:'/home'
    }
    
  ]

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
    <header className={styles.header}>
          <div className={styles.main}>
      {/* Logo */}
      <NavLink 
        className={styles.logoBox}
        to={'/home'}
      >
        <img
          className={styles.logo}
          src={logo}
          alt="Neko-Store-Logo"
        />
      </NavLink>
      {/* cambiar tema */}
      <div className='flex items-center gap-10'>

        <DarkMode theme={theme} setTheme={setTheme} element={element}/>

        <button
          className={mobile.btnOpenMenu}
          onClick={() => HandleShowMenu()}
        >
          <div className={mobile.btnBox}>
            <span className={menuIcon.top}></span>
            <span className={menuIcon.lower}></span>
          </div>
        </button>
      </div>
      {/* barra de navegación movil */}
      <div className={mobile.menu.main}>
        {/* search bar */}
        <div className={mobile.searchBar.main}>
          <form 
            className={mobile.searchBar.inputBox}
            onSubmit={(e)=>Search(e)}
          >
            <input
              type="text"
              placeholder='buscar...'
              className={mobile.searchBar.input}
              name='valueToSearch'
            />
            <GoSearch className={mobile.searchBar.icon}/>
          </form>

        </div>
        {/* menu list */}
        <ul className={mobile.menu.list}>

          {menu.map((data) => (
            <li key={data.name}
              className={mobile.menu.itemList}
            >
              <NavLink to={data.link}>
                {data.name}
              </NavLink>
            </li>
          ))}

          {/* categorías */}
          <li className='w-full'>
            <span
              className={mobile.menu.categorieTitle}
              onClick={() => HandleShowCategories()}
            >
              <h4>
                Categorías
              </h4>

              <MdOutlineArrowDropUp
                className={mobile.menu.categorieIcon}
              />
            </span>
            <ul className={mobile.menu.categorieList}>
              {categories.map((data) => (
                <li key={data.name}
                  className={mobile.menu.categorieListItem}
                >
                  <NavLink to={data.link}>
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {/* Tablets, desktop */}
      <div className={styles.section.main}>
        {/*categorías */}
        <ul className={styles.section.ul}>
          {menu.map((data) => (
            <li key={data.name} className={styles.section.li}>
              <NavLink to={data.link}>
              {data.name}
              </NavLink>
            </li>
          ))}
          <li className={styles.categories.main}>
            <span className={styles.categories.box}>
              <h4 className={styles.categories.text}>
                Categorías
              </h4>
              <MdOutlineArrowDropUp className={styles.categories.icon} />
            </span>

            <ul className={styles.categories.ul}>
              {categories.map((data) => (
                <li key={data.name} className={styles.categories.li}>
                  <NavLink to={data.link}>
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        {/* barra de busqueda */}
        <form className={styles.section.inputBox}
          
        >
          <input
            className={styles.section.input}
            type="text"
            placeholder='buscar'
            name='valueToSearch'
          />
          <GoSearch className={styles.section.icon} />
        </form>
      </div>

    </div>
    </header>
  )
}
