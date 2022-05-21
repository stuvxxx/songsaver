import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";



class SongOverview extends React.Component {
    constructor(props) {
      super(props)
      this.state = 
      {
        songs: [],
        filteredSongs: []
      }

    this.addSong = this.addSong.bind(this)
    this.handleDel = this.handleDel.bind(this)


    }
    addSong = (song) => {
      const uniqueIdHelper = Math.floor(Math.random() * 100000000000);
        song.id = uniqueIdHelper + song.title
        this.setState({
          songs: [
            ...this.state.songs, song,
          ],
        });
        console.log(this.state.songs)
      };

      sortByAscendingTitle() {
        let sortedAsceding = this.state.songs.sort((a, b) => {
          const nameA = a.title.toUpperCase()
          const nameB = b.title.toUpperCase()
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({
          songs: sortedAsceding
        });
      }
      sortByDecedingTitle() {
        let sortedDeceding = this.state.songs.sort((a, b,) => {
          const nameA = a.title.toUpperCase()
          const nameB = b.title.toUpperCase()
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({
          songs: sortedDeceding
        });
      }

      sortByAscendingArtist() {
        let sortedAsceding = this.state.songs.sort((a, b) => {
          const nameA = a.artist.toUpperCase()
          const nameB = b.artist.toUpperCase()
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({
          songs: sortedAsceding
        });
      }
      
      sortByDecedingArtist() {
        let sortedDeceding = this.state.songs.sort((a, b,) => {
          const nameA = a.artist.toUpperCase()
          const nameB = b.artist.toUpperCase()
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        this.setState({
          songs: sortedDeceding
        });
      }

      handleDel(idToDelete) {
        const newSongList = this.state.songs.filter(song => song.id !== idToDelete)
        this.setState({
          songs: newSongList}
        )
      }

      setDefault() {
        const arr1 = this.state.songs
        const arr2 = this.state.filteredSongs
        const arr3 = [...arr1, ...arr2]
        this.setState({
          songs: arr3,
          filteredSongs: []
        })
      }


      handleFilter(idToFilter) {
        if(idToFilter === "all") {
          const arr1 = this.state.songs
          const arr2 = this.state.filteredSongs
          const arr3 = [...arr1, ...arr2]
          this.setState({
            songs: arr3,
            filteredSongs: []
          })
        }
        else {
        const arr1 = this.state.songs
        const arr2 = this.state.filteredSongs
        const arr3 = [...arr1, ...arr2]
        const newSongList = arr3.filter(song => song.genre === idToFilter)
        const filteredSongList = arr3.filter(song => song.genre !== idToFilter)
        this.setState({
          songs: newSongList, 
          filteredSongs: filteredSongList
        })}
      }


    render() {
      return (
        <div>
          <SongForm addSong={this.addSong}/>
            <table className="song-table" style={{width: "100%"}}>   
              <tbody>    
                <tr className="song-header">  
                  <th className="song-row__item">Songs
                    <button className="sort-btn" onClick={() => this.sortByAscendingTitle()}>a/z</button>
                    <button className="sort-btn" onClick={() => this.sortByDecedingTitle()}>z/a</button>
                  </th>
                  <th className="song-row__item">Artists
                    <button className="sort-btn" onClick={() => this.sortByAscendingArtist()}>a/z</button>
                    <button className="sort-btn" onClick={() => this.sortByDecedingArtist()}>z/a</button>
                  </th>
                  <th className="song-row__item">Genres
                    <select className="genre-menu" onChange={(e) => this.handleFilter(e.target.value)}>
                      <option value="all">Show All</option>
                      <option value="rock">Rock</option>
                      <option value="hiphop">Hip-Hop</option>
                      <option value="pop">Pop</option>
                      <option value="classic">Classic</option>
                      <option value="techno">Techno</option>
                      <option value="rnb">R&B</option>
                      <option value="dutch">Dutch</option>
                      <option value="experimental">Experimental</option>
                    </select>
                  </th>
                  <th className="song-row__item">Rating</th>
                </tr>
              </tbody>
                <SongList handleDel={this.handleDel} songs={this.state.songs}/>
              </table>
        </div>
      );
    }
  }
  
  export default SongOverview;