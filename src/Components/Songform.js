import React from "react"
import { useState } from "react"

function SongForm(props) {
    const [title, setTitle] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("rock")
    const [stars, setStars] = useState("1 Star")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const song = { title, artist, genre, stars }
        props.addSong(song)
    }


    return (
    <div className="song-form-container">
        <form onSubmit={handleSubmit}>
            <div>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            </div>
            <div>
            <input 
                type="text"
                required 
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
                />
            </div>
            <div>
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
            </div>
            <div>
            <select
            value={stars}
            onChange={(e) => setStars(e.target.value)}
            >
                <option value="1">1 Star</option>
                <option value="2">2 Star</option>
                <option value="3">3 Star</option>
                <option value="4">4 Star</option>
                <option value="5">5 Star</option>
            </select>
            </div>
            <button className="add-btn">Add Song</button>
        </form>
        </div>
    )
}


export default SongForm