import React from "react";
import SongListItem from "./SongListItem";

function SongList({songs}) {
    return(
        <div>
            <ul className="song-list">
                {songs.map((song) => (
                    <SongListItem 
                        song={song}
                        key={song.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SongList