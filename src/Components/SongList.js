import React from "react";
import SongListItem from "./SongListItem";

function SongList(props) {
    return(
            <tbody className="song-list">
                {props.songs.map((song) => (
                    <SongListItem 
                        song={song}
                        key={song.id}
                        handleDel={props.handleDel}
                    />
                ))}
            </tbody>
    )
}

export default SongList