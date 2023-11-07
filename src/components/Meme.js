import React from 'react'

export default function Meme() {
    return (
        <form className='meme--container'>
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
            >Get a new meme image  🖼</button>
            
        </form>
    )
}