import React from "react";

function SongListItem(props) {
    return (
    <tr 
        key={props.song.id}
        className="song-list-item"
        value={props.song.title}
        >
        <th>{props.song.title}</th>
        <th>{props.song.artist}</th>
        <th>{props.song.genre}</th>
        <th>{props.song.stars}<button onClick={() => props.handleDel(props.song.id)}>del</button></th>
    </tr>
        )
}

export default SongListItem