import React from 'react'
import trollFace from '../images/troll-face.png'

export default function Header() {
    return (
        <header className='header--container'>
        <img 
            src={trollFace}
            alt="Problem?"
            className='header--troll-face'/>
        <h1 className='header--title'>Meme Generator</h1>
            <h3 className='header--description'>React Course - Project 3</h3>
        </header>
    )
}