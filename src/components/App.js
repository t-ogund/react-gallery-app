import "../css/index.css";
import Nav from "./Nav";
import NotFound from "./NotFound";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import apiKey from "../config";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    
//Setting initial state
    this.state = {
      catsData: [],
      dogsData: [],
      computersData: [],
      searchData: [],
      urlData: [],
    };

    this.performSearch = this.performSearch.bind(this);
  }

//where all the api calls are being made within componentDidMount
  componentDidMount() {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          catsData: data.photos.photo,
        });
      });

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          dogsData: data.photos.photo,
        });
      });

    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          computersData: data.photos.photo,
        });
      });
  }

  //performSearch function performs api call on search query
  performSearch(query) {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          searchData: data.photos.photo,
        });
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <SearchForm onSearch={this.performSearch} />
          <Nav
            cats={this.state.catsData}
            dogs={this.state.dogsData}
            computers={this.state.computersData}
          />
          <Switch>
            <Route exact path="/" />
            <Route
              path="/cats"
              cats={this.state.catsData}
              render={({ match }) => (
                <PhotoContainer
                  match={match}
                  images={this.state.catsData}
                  title="Cats"
                />
              )}
            />
            <Route
              path="/dogs"
              dogs={this.state.dogsData}
              render={({ match }) => (
                <PhotoContainer
                  match={match}
                  images={this.state.dogsData}
                  title="Dogs"
                />
              )}
            />
            <Route
              path="/computers"
              computers={this.state.computersData}
              render={({ match }) => (
                <PhotoContainer
                  match={match}
                  images={this.state.computersData}
                  title="Computers"
                />
              )}
            />
            <Route
              path="/search/:searchValue"
              render={({ match }) => (
                <PhotoContainer match={match} images={this.state.searchData} />
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
