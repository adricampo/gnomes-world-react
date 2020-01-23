import React from 'react'
import './index.sass'

export default function Landing({ onMainPage }) {
    return  <> 
        <section className="landing">
            <div className="landing__container container">
                <h1 className="container__title">Welcome to Gnomes Land</h1>
                <div className="container__options">Please, proceed to <p onClick={event => {
                    event.preventDefault()

                    onMainPage()
                }}>OUR COMMUNITY</p>
                </div>
            </div>
         </section>
    </>
}