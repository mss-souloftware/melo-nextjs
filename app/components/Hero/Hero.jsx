import React from 'react'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className='my-16'>
            <div className={`${styles.heroSec} px-4 mx-auto`}>
                <h1 className='text-black text-4xl'>Hangout without the Hangover</h1>
                <p>DAYTIME CRAZY, NIGHTTIME HAZY - ALL VIBES, NO LIES!</p>
            </div>
            <div className="mx-auto max-w-5 my-10">
                <svg width="17" height="280" viewBox="0 0 17 280" fill="none" data-stick-cursor="true" class="parallax hero_illustration__YB0We"><path d="M8 0v278" stroke="#FFB800" stroke-width="1.5"></path><path d="M8 0v278" stroke="#FFFBF0" stroke-width="1.5"></path><path d="M1 270.733L8.267 278l7.266-7.267" stroke="#FFB800" stroke-width="1.5"></path><path d="M1 270.733L8.267 278l7.266-7.267" stroke="#FFFBF0" stroke-width="1.5"></path></svg>
            </div>
        </section>
    )
}