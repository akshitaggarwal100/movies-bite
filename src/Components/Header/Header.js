import './Header.css'
import Logo from './Logo'
import { FaSearch } from 'react-icons/fa'
import { useRef } from 'react'

function Header(props) {
    const query = useRef('')

    function onSearch(query) {
        props.onSearch(query)
    }

    return (
        <nav className='navbar'>
            <Logo />
            <div className='searchBox'>
                <input type="text" placeholder='Search...' className='searchBar' ref={query} />
                <FaSearch className='searchIcon' onClick={() => onSearch(query.current.value)} />
            </div>
            <h1 className='heading'>{props.heading}</h1>
        </nav>
    )
}

export default Header