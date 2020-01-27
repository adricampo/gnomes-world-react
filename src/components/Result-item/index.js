import React from 'react'
import './index.sass'

export default function ResultItem({ item: { id, name, thumbnail, hair_color, professions, age }, onClick }) { 
    return <li className="results__item">
            <a href="#" className="item" onClick={event => {
            event.preventDefault()

            onClick(id)
            }}>
                <h2 className="item__name-age">{name} - {age} years</h2>
                <img className="item__image" src={thumbnail} alt={name} />
                <span className="item__hair_color">Hair color: {hair_color}</span>
                <span className="item__professions">Professions: {professions.join(', ')}</span>
            </a>
    </li> 
}