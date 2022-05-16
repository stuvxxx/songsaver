import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";


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
            ...this.state.songs, song,
          ],
        });
        console.log(this.state.songs)
      };

    render() {
      return (
        <div>
                <SongForm addSong={this.addSong}/>
                  <table style={{width: "100%"}}>   
                    <tbody>    
                      <tr className="song-header">  
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                      </tr>
                    </tbody>
                  </table>

               <SongList songs={this.state.songs}/>
        </div>
      );
    }
  }
  
  export default SongOverview;