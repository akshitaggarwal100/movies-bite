import React from 'react'
import Header from '../Components/Header/Header'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import { useEffect, useReducer } from 'react'
import './Pages.css'
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {

    const initialState = {
        page: 1,
        movi: []
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'loadMore':
                return { ...state, page: state.page + 1 }
            case 'setMovi':
                if (state.page > 1) {
                    return { ...state, trending: [...state.movi, ...action.payload] }
                }
                return { ...state, movi: action.payload }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5ef2e60d6b66a89510434011a82a5020&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${state.page}`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'setMovi', payload: data.results })
                console.log(state.movi.length, state.page * 20, state.page)
            })
    }, [state.page])

    // window.addEventListener('scroll', () => {
    //     if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    //         dispatch({ type: 'loadMore' })
    //     }
    // })

    return (
        <>
            <Header heading='TRENDING' />

            <InfiniteScroll
            next={() => dispatch({type: "loadMore"})}
            dataLength = {state.movi.length}
            hasMore={true}
            >
                <Body heading='MOVIE' content={state.trending} />
            </InfiniteScroll>

            <Footer active='movies' />
        </>
    )
}

export default Trending