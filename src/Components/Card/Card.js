import './Card.css'

function Card({ title, poster, date, type }) {
    return (
        <div className="cardBox">
            <img className="cardImage" src={`https://image.tmdb.org/t/p/w300${poster}`} alt={`${title} poster`} />
            <div className="dataBox">
                <h2>{title}</h2>
                <div className='lowerDataBox' >
                    <h3>{type}</h3>
                    <h3>{date}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card