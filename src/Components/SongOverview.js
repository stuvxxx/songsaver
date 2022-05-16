import React from "react";


class SongOverview extends React.Component {
    constructor() {
      super()
      this.state = 
      {
        songs: []
      }
  
    }
  
    addSong = (song) => {
                          // do something to change the state
    }
  
    render() {
      return (
        <div>
                <SongForm addSong={this.addSong}/>
                                          <table style={{width: "100%"}}>
                          <tr className="song-header">  
                                  <th className="song-row__item">Song</th>
                                  <th className="song-row__item">Artist</th>
                                  <th className="song-row__item">Genre</th>
                                  <th className="song-row__item">Rating</th>
                                </tr>
                                  </table>
                <SongList songs={this.state.songs}/>
        </div>
      );
    }
  }
  
  export default SongOverview;