import React from "react";

function SongListItem({song}) {
    return (
    <li 
        key={song.id}
        className="song-list-item"
        value={song.title}
        >
            <div>{song.title}</div>
            <div>{song.artist}</div>
            <div>{song.genre}</div>
            <div>{song.stars}</div>
        </li>
        )
}

export default SongListItem