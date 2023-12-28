import React, {useState} from 'react'
import memesData from '../memesData.js'

export default function Meme() {
    // State for the meme object
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg'
    }) 
    
    // State for all the meme images
    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes; // Access the memes array
        const randomMeme = memesArray[Math.floor(Math.random() * memesArray.length)]; // Get a random meme object from the array 
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImg: randomMeme.url
            }
        })
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
           <div className="meme">
                <img src={meme.randomImg} className="meme--image" />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>

    )
}