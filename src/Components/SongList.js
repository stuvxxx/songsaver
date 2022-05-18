import React from "react";
import SongListItem from "./SongListItem";

const 


function SongList({songs}) {
    return(
            <tbody className="song-list">
                {songs.map((song) => (
                    <SongListItem 
                        song={song}
                        key={song.id}
                    />
                ))}
            </tbody>
    )
}

export default SongList