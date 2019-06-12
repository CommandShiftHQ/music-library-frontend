import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get('https://music-library-api.herokuapp.com/artists').then(response => {
      const artists = response.data;
      this.setState({artists});
    });
  }

  renderArtists = () => {
    const { artists } = this.state;
    if(artists.length === 0) {
      return null;
    }

    return <div>{artists.map(artist => {
      return <React.Fragment><span key={artist._id}>{artist.name} - {artist.genre}</span><br/><br/></React.Fragment>
    })}</div>
  }

  render() {
    return (
      <div className="aksjhdjaskdh">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p class="aksjdfh">React is awesome!</p>
          {this.renderArtists()}
        </header>
      </div>
    );
  }
}

export default App;
