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
      console.log("running addsong")
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
        console.log("running sortByAscendingTitle")
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
        console.log("running sortByDecedingTitle")
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
        console.log("running sortByAscendingArtist")
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
        console.log("running sortByDecedingArtist")
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
        console.log("Running HandleDel")
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
        console.log("runnning handleFilter2")
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
        <div><button onClick={() => console.log(this.state)}>checkstate</button>
                <SongForm addSong={this.addSong}/>
                  <table style={{width: "100%"}}>   
                    <tbody>    
                      <tr className="song-header">  
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                      </tr>
                      <tr>
                        <th>
                            <button onClick={() => this.sortByAscendingTitle()}>asc</button>
                            <button onClick={() => this.sortByDecedingTitle()}>dec</button>
                        </th>
                        <th>
                            <button onClick={() => this.sortByAscendingArtist()}>asc</button>
                            <button onClick={() => this.sortByDecedingArtist()}>dec</button>
                        </th>
                        <th>
                          <label> Filter on Genre
                          <select onChange={(e) => this.handleFilter(e.target.value)}>
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
                            </label>
                        </th>
                      </tr>
                    </tbody>
                    <SongList handleDel={this.handleDel} songs={this.state.songs}/>
                  </table>

        </div>
      );
    }
  }
  
  export default SongOverview;