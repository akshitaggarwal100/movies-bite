import React from 'react'
import Header from '../Components/Header/Header'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import { useEffect, useReducer } from 'react'
import './Pages.css'
import InfiniteScroll from 'react-infinite-scroll-component';


function Movies() {
    const initialState = {
        operation: 'movies',
        page: 1,
        genres: [],
        movies: [],
        query: '',
        heading: 'MOVIES'
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'loadMore':
                return { ...state, page: state.page + 1 }

            case 'setMovies':
                if (state.page > 1) {
                    return { ...state, movies: [...state.movies, ...action.payload] }
                }
                return { ...state, movies: action.payload }

            case 'search':
                return { ...state, operation: 'search', query: action.payload, heading: 'SEARCH RESULTS', page: 1 }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.operation === 'movies') {
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5ef2e60d6b66a89510434011a82a5020&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${state.page}&with_genres=${state.genres}`)
                .then(response => response.json())
                .then(data => dispatch({ type: 'setMovies', payload: data.results }))
        }

        else if (state.operation === 'search') {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=5ef2e60d6b66a89510434011a82a5020&language=en-US&query=${state.query}&page=${state.page}&include_adult=true`)
                .then(response => response.json())
                .then(data => dispatch({ type: 'setMovies', payload: data.results }))
        }
    }, [state.page, state.query])

    function onSearch(query) {
        dispatch({ type: 'search', payload: query })
    }

    return (
        <>
            <Header heading={state.heading} onSearch={onSearch} />

            <InfiniteScroll next={() => dispatch({ type: "loadMore" })} dataLength={state.movies.length} hasMore={true}>
                <Body heading={state.heading} content={state.movies} />
            </InfiniteScroll>

            <Footer active='movies' />
        </>
    )
}

export default Movies