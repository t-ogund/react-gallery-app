// import logo from './logo.svg';
// import './App.css';
import "../css/index.css";
import Photo from "./Photo";
import Nav from "./Nav";
import NotFound from "./NotFound";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import apiKey from "../config";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      catsData: [],
      dogsData: [],
      computersData: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          catsData: data.photos,
        });
        console.log(data.photos);
        console.log("Cats Data: ", this.state.catsData);
      });

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          dogsData: data.photos,
        });
        console.log(data.photos);
        console.log("Dogs Data: ", this.state.dogsData);
      });

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          computersData: data.photos,
        });
        console.log(data.photos);
        console.log("Computers Data: ", this.state.computersData);
        console.log("Drilled Computers Data: ", this.state.computersData.photo);
      });
  }

  performSearch(query) {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          searchData: data.photos,
        });
        console.log(data.photos);
        console.log("Search Data: ", this.state.searchData);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          {/* <SearchForm /> */}
          <Nav
            cats={this.state.catsData}
            dogs={this.state.dogsData}
            computers={this.state.computersData}
          />
          <Switch>
            <Route
              path="/cats"
              cats={this.state.catsData}
              render={() => (
                <PhotoContainer images={this.state.catsData} title="Cats" />
              )}
            />
            <Route
              path="/dogs"
              dogs={this.state.dogsData}
              render={() => (
                <PhotoContainer images={this.state.dogsData} title="Dogs" />
              )}
            />
            <Route
              path="/computers"
              computers={this.state.computersData}
              render={() => (
                <PhotoContainer
                  images={this.state.computersData}
                  title="Computers"
                />
              )}
            />
            <SearchForm onSearch={this.performSearch} />
            <PhotoContainer images={this.state.data} />
          </Switch>
          {/* <Photo /> */}
          {/* <NotFound /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
