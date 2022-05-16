import React from "react";
import SongForm from "./SongForm";


class SongOverview extends React.Component {
    constructor(props) {
      super(props)
      this.state = 
      {
        songs: []
      }
    this.addSong = this.addSong.bind(this)


    }
    addSong = (song) => {
        song.id = this.state.songs.length + 1
        this.setState({
          songs: [
            ...this.state.songs, { song },
          ],
        });
      };
      
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
        </div>
      );
    }
  }
  
  export default SongOverview;