import React from 'react'
import './index.sass'

export default function Detail({ item: { name, thumbnail, hair_color, weight, height, friends, professions, age }, onBack }) { 
    return <>  <section className="detail">
        <h2 className="detail__name-age">{name} - ({age} years)</h2>
        <img className="detail__image" src={thumbnail} />
        <div className="detail__sizes">
            <p className="detail__weight">Weight: {weight}</p>
            <p className="detail__height">Height: {height}</p>
        </div>
        <span className="detail__hair_color">Hair color: {hair_color}</span>
        <span className="detail__friends">Friend of: {friends.join(', ')}</span>
        <span className="detail__professions">Professions: {professions.join(', ')}</span>
       <div className="detail__button-container">
            <button className="detail__back" onClick={event => {
                event.preventDefault()

                onBack()
            }}>Go back</button>
        </div>
    </section>

    </>
}