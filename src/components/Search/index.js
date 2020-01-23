import React from 'react'
import './index.sass'

export default function Search({ onSearch }) {
    return <>   
        <section className="search">
            <form onSubmit={onSearch}>
                <div className="search__container container">
                    <h1 className="container__title">Search</h1>
                    <div className="container__searchvar">
                        <input className="container__criteria" type="text" name="query" placeholder="criteria"/>
                        <button className="container__submit">GO</button>
                    </div>
                </div>
            </form>
        </section>
    </>
}