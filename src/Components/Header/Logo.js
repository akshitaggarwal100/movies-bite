import React from 'react'
import { BiMoviePlay } from 'react-icons/bi';
import './Header.css'

function Logo() {
    return (
        <div onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })} className='header_logo'>
            <BiMoviePlay className='logo' />
            <div className='logoText'>
                <h1>Movies Bite</h1>
                <h2>By Akshit Aggarwal</h2>
            </div>
        </div>
    )
}

export default Logo