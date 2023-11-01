import React from 'react'

export default function Header() {
    return (
        <header className='header--container'>
            <div className='header--title'>
                <img 
                    src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                    alt="Problem?"
                    className='header--troll-face'/>
                <h1 className='header--meme-generator'>Meme Generator</h1>
            </div>
            <h3 className='header--description'>React Course - Project 3</h3>
        </header>
    )
}