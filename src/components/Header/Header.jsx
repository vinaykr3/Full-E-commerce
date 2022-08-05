/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    toggle ? setToggle(false) : setToggle(true);
  }
  const searchBtn = () => {
    console.log('search here..')
  }
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className={`px-6 w-full flex flex-col lg:items-center lg:flex-row flex-wrap justify-between`}>
            <div className="flex items-center">
              <button onClick={toggleBtn}
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                  </path>
                </svg>
              </button>
            </div>
            <div className={`navbar-collapse collapse grow items-center lg:h-auto transition-all ${toggle ? "h-auto" : "h-0"}`} id="navbarSupportedContentY">
              <ul className={`navbar-nav mr-auto ${toggle ? "block" : "hidden"}  lg:flex lg:flex-row`}>
                <li className="nav-item">
                  <Link to="/">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-blue-600 focus:text-gray-700 transition duration-150 ease-in-out font-semibold"
                     data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-blue-600 focus:text-gray-700 transition duration-150 ease-in-out font-semibold"
                     data-mdb-ripple="true" data-mdb-ripple-color="light">Products</a>
                    </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-blue-600 focus:text-gray-700 transition duration-150 ease-in-out font-semibold"
                     data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
                    </Link>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                  <Link to="services">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-blue-600 focus:text-gray-700 transition duration-150 ease-in-out font-semibold"
                     data-mdb-ripple="true" data-mdb-ripple-color="light">Services</a>
                    </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="search absolute top-[18px] right-9 md:right-20">
            <input type="text" className='border border-blue-300 outline-none px-2 w-20 focus:w-60 transition-all ease-in-out rounded-md ' placeholder='Search here...' />
            <FaSearch className='absolute top-[5px] right-1' onClick={searchBtn} />
          </div>
          <div className="login absolute top-[23px] md:top-[18px] right-0">
            <FaUser className='mx-4 md:hidden'/>
            <button className='hidden md:block mx-4 bg-blue-500 text-white rounded-md font-bold border border-blue-500 px-2'>Login</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header