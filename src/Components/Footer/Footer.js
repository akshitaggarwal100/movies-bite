import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BiMovie } from 'react-icons/bi'
import { MdOutlineLocalMovies } from 'react-icons/md'
import { HiFire } from 'react-icons/hi'

function Footer(props) {
    return (
        <div className='footerBox'>
            <div className='footerLinks'>
                <Link className={props.active === 'trending' ? 'link activeL' : 'link notActiveL'} to='/'>
                    <HiFire className='footerIcon' />
                    <div>TRENDING</div>
                </Link>

                <Link className={props.active === 'movies' ? 'link activeL' : 'link notActiveL'} to='/movies'>
                    <BiMovie className='footerIcon' />
                    <div>MOVIES</div>
                </Link>

                <Link className={props.active === 'series' ? 'link activeL' : 'link notActiveL'} to='/series'>
                    <MdOutlineLocalMovies className='footerIcon' />
                    <div>SERIES</div>
                </Link>
            </div>
        </div>
    )
}

export default Footer