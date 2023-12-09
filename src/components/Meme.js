import React, {useState} from 'react'
import memesData from '../memesData.js'

export default function Meme() {
    const [memeImage, setMemeImage] = useState('') // State for the meme image

    function getMemeImage() {
        const memesArray = memesData.data.memes; // Access the memes array
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]; // Get a random meme object from the array 
        const memeUrl = randomMeme.url;
        setMemeImage(memeUrl)
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
                    onClick={getMemeImage}

                >
                    Get a new meme image  🖼
                </button>
            </div>
            <img 
                src={memeImage}
                alt='Meme'
                className='meme--image'
            />
        </main>

    )
}