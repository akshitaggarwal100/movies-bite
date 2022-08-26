import React from 'react'
import './Body.css'
import Card from '../Card/Card'

function Body(props) {
    let mediaType;
    switch (props.heading) {
        case 'MOVIES':
            mediaType = 'movie'
            break
        case 'SERIES':
            mediaType = 'TV Series'
            break
    }
    return (
        <div className='contentBox'>
            <div className='cards'>
                {props.content.map((media) => {
                    return <Card key={media.id} title={media.title || media.name} poster={media.poster_path} date={media.release_date || media.first_air_date} type={props.heading === 'TRENDING' || 'SEARCH RESULTS' ? media.media_type === 'tv' ? 'TV Series' : 'movie' : mediaType} />
                })}
            </div>
        </div>
    )
}

export default Body