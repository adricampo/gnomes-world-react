import React from 'react'
import './index.sass'

export default function Landing({ onMainPage }) {
    return  <> 
        <section className="landing">
            <div className="landing__container container" onClick={event => {
                event.preventDefault()
                onMainPage()
                }}>
                <h1 className="container__title">Welcome to Gnomes Land</h1>                
            </div>
         </section>
    </>
}