import React from "react"
import { useState } from "react"

function SongForm(props) {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("rock")
    const [stars, setStars] = useState("1")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const song = { title, artist, genre, stars }
        props.addSong(song)
    }


    return (
    <div className="song-form">
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            <label>Artist</label>
            <input 
                type="text"
                required 
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
                />
            <label>Genre</label>
            <select 
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            >
                <option value="rock">Rock</option>
                <option value="hiphop">Hip-Hop</option>
                <option value="pop">Pop</option>
                <option value="classic">Classic</option>
                <option value="techno">Techno</option>
                <option value="rnb">R&B</option>
                <option value="dutch">Dutch</option>
                <option value="experimental">Experimental</option>
            </select>
            <label>Stars</label>
            <select
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            >
                <option value="1star">1</option>
                <option value="2star">2</option>
                <option value="3star">3</option>
                <option value="4star">4</option>
                <option value="5star">5</option>
            </select>
            <button>Add Song</button>
        </form>
    </div>
    )
}


export default SongForm