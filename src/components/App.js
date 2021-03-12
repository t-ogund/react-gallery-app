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
      data: [],
    };
  }

  componentDidMount() {
    
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=basketball&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data.photos,
        });
        console.log(data.photos);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <SearchForm />
          <Nav images={this.state.data} />
          <Switch>
          <Route path="/cats" component={PhotoContainer} />
          <Route path="/dogs" component={PhotoContainer} />
          <Route path="/computers" component={PhotoContainer} />
          {/* <Route path="/search" component={SearchForm} /> */}

          {/* <Route path="/search" component={SearchForm} /> */}

          {/* <Dog />
          <Cat />
          <Computer /> */}
          {/* <SearchForm /> */}
            {/* <PhotoContainer images={this.state.data} /> */}
          </Switch>
          {/* <Photo /> */}
          {/* <NotFound /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
