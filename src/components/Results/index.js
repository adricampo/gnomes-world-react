import React from 'react'
import './index.sass'

export default function Results({ items, onItemRender }) {
    return <ul className="results">   
        {items.length > 0 ? items.map(item => onItemRender(item)) : <li className="results__no-results">NO RESULTS..</li>} 
    </ul>
}