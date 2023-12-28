import React, {useState,useEffect} from 'react'

export default function Meme() {
    const apiUrl = "https://api.imgflip.com/get_memes"

    // State of the meme
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImg: 'http://i.imgflip.com/1bij.jpg'
    }) 
    
    // State for all the meme images
    const [allMemeImages, setAllMemeImages] = useState({})

    // Fetch the meme images from the API
    useEffect(() => {
        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${res.status}`)
                } else {
                    console.log("Succès de la requête!")
                }

                return res.json();
            })
            .then(data => setAllMemeImages(data))
            .catch(error => console.log("Erreur lors de la requête:", error)
        );
    },[])
    

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

    function handleChange(event) {
        const {name,value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className='meme--container'>
            <div className='meme--form'>
                <input 
                    className='meme--input'
                    type='text'
                    autoFocus
                    placeholder='Top Text'
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className='meme--input'
                    type='text'
                    placeholder='Bottom Text'
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
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
                <img src={meme.randomImg} className="meme--image" alt='Meme'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}