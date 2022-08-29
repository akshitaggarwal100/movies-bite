import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BiMovie } from 'react-icons/bi'
import { MdOutlineLocalMovies } from 'react-icons/md'
import { HiFire } from 'react-icons/hi'

function Footer(props) {
    return (
        <div className= {`footerBox ${props.mode === 'dark' ? 'footerBox_dm' : 'footerBox_lm'}`}>
            <div className='footerLinks'>
                <Link className={`link ${props.active === 'trending' ? props.mode === 'dark' ? 'activeL_dm' : 'activeL_lm' : props.mode === 'dark' ? 'notActiveL_dm' : 'notActiveL_lm'}`} to='/'>
                    <HiFire className='footerIcon' />
                    <div>TRENDING</div>
                </Link>

                <Link className={`link ${props.active === 'movies' ? props.mode === 'dark' ? 'activeL_dm' : 'activeL_lm' : props.mode === 'dark' ? 'notActiveL_dm' : 'notActiveL_lm'}`} to='/movies'>
                    <BiMovie className='footerIcon' />
                    <div>MOVIES</div>
                </Link>

                <Link className={`link ${props.active === 'series' ? props.mode === 'dark' ? 'activeL_dm' : 'activeL_lm' : props.mode === 'dark' ? 'notActiveL_dm' : 'notActiveL_lm'}`} to='/series'>
                    <MdOutlineLocalMovies className='footerIcon' />
                    <div>SERIES</div>
                </Link>
            </div>
        </div>
    )
}

export default Footer