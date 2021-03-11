// import logo from './logo.svg';
// import './App.css';
import "../css/index.css"
import Photo from "./Photo";
import Nav from "./Nav";
import NotFound from "./NotFound";
import SearchForm from "./SearchForm";
import PhotoContainer from "./PhotoContainer";
import apiKey from "../config";

function App() {
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

export default App;
