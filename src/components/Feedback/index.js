import React from 'react'
import './index.sass'

export default function ({ message, onClose }) {
    return  <> 
        <section class="feedback hide">
            <div class="feedback__container">
                <i class="close fas fa-times" onClick={ event => {
                event.preventDefault()

                onClose()
            }}>></i>
                <span class="feedback__icon">¡¡</span>
                <p class="feedback__message">{message}</p>
                <span class="feedback__icon">!!</span>
            </div>
        </section>
    </>
}