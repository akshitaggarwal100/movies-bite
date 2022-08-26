import React from 'react'
import Header from '../Components/Header/Header'
import Body from '../Components/Body/Body'
import Footer from '../Components/Footer/Footer'
import { useEffect, useReducer } from 'react'
import './Pages.css'
import InfiniteScroll from 'react-infinite-scroll-component'

function Trending() {

    const initialState = {
        operation: 'trending',
        timeWindow: 'day',
        page: 1,
        trending: [],
        query: '',
        heading: 'TRENDING'
    }

    function reducer(state, action) {
        switch (action.type) {
            case 'setTimeWindow':
                return { ...state, page: 1, timeWindow: action.payload }

            case 'loadMore':
                return { ...state, page: state.page + 1 }

            case 'setTrending':
                if (state.page > 1) {
                    return { ...state, trending: [...state.trending, ...action.payload] }
                }
                return { ...state, trending: action.payload }

            case 'search':
                return { ...state, operation: 'search', query: action.payload, heading: 'SEARCH RESULTS', page: 1 }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if (state.operation === 'trending') {
            fetch(`https://api.themoviedb.org/3/trending/all/${state.timeWindow}?api_key=5ef2e60d6b66a89510434011a82a5020&page=${state.page}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({ type: 'setTrending', payload: data.results })
                })
        }

        else if (state.operation === 'search') {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=5ef2e60d6b66a89510434011a82a5020&language=en-US&query=${state.query}&page=${state.page}&include_adult=true`)
                .then(response => response.json())
                .then(data => dispatch({ type: 'setTrending', payload: data.results }))
        }
    }, [state.page, state.timeWindow, state.query])

    function onSearch(query) {
        dispatch({ type: 'search', payload: query })
    }

    return (
        <>
            <Header heading={state.heading} onSearch={onSearch} />
            <div className={state.operation === 'trending' ? 'timeWindow' : 'disable'}>
                <div onClick={() => dispatch({ type: 'setTimeWindow', payload: 'day' })} className={state.timeWindow === 'day' ? 'time active' : 'time notActive'}>Day</div>
                <div onClick={() => dispatch({ type: 'setTimeWindow', payload: 'week' })} className={state.timeWindow === 'week' ? 'time active' : 'time notActive'}>Week</div>
            </div>

            <InfiniteScroll next={() => dispatch({ type: "loadMore" })} dataLength={state.trending.length} hasMore={true}>
                <Body heading={state.heading} content={state.trending} />
            </InfiniteScroll>

            <Footer active='trending' />
        </>
    )
}

export default Trending