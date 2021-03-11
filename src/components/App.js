// import logo from './logo.svg';
// import './App.css';
import "../css/index.css"
import Photo from "./Photo";
import Nav from "./Nav";
import NotFound from "./NotFound";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import apiKey from "../config";
import React from "react";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=basketball&per_page=24&format=json&nojsoncallback=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
        data: data.photos
        })
        console.log(data.photos)
      })
      
  }

  render() {
    return (
      <div className="App container">
        
        <Photo />
        <Nav />
        <NotFound />
        <SearchForm />
        <PhotoContainer />
      </div>
    );
  } 
}

export default App;
