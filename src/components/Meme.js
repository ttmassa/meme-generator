import React from 'react'
import memesData from '../memesData.js'

export default function Meme() {
    function handleClick() {
        const memesArray = memesData.data.memes;
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)];
        console.log(randomMeme.url);
        
    }

    return (
        <main className='meme--container'>
            <div className='meme--form'>
                <input 
                    className='meme--input'
                    type='text'
                    autoFocus
                    placeholder='Top Text'
                />
                <input 
                    className='meme--input'
                    type='text'
                    placeholder='Bottom Text'
                />
                <button 
                    className='meme--button'
                    type='submit'
                    onClick={handleClick}

                >
                    Get a new meme image  🖼
                </button>
            </div>
        </main>

    )
}