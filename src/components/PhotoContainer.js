import React from "react";
import Photo from "./Photo";
import NotFound from "./NotFound";
import apiKey from "../config";


class PhotoContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      urlData: []
    }
  }

  // componentDidUpdate() {
  //   console.log()
  //   if (this.props.match.params !== this.props.match.params.searchValue) {
  //     fetch(
  //       `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${this.props.match.params}&per_page=24&format=json&nojsoncallback=1`
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         this.setState({
  //           urlData: data.photos,
  //         });
  //       console.log(this.state.urlData)
  //       });
  //   }
  // }
  
  render() {
    const results = this.props.images.photo
    let search = this.props.match.params.searchValue;
    

    return (
      <div className="photo-container">
        <h2>Results: {search}</h2>
        <h3>{this.props.title}</h3>
        <ul>

        { 
          results ? results.map(image => { return <Photo url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={image.title} key={ image.id } /> }) : <NotFound />
        }  
        
          {/* <li>
            <img
              src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
              alt=""
            />
          </li> */}

          {/* <!-- Not Found --> */}
          {/* <li class="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li> */}
        </ul>
      </div>
    );
  }
  

  
  
  
  // 
    
}

export default PhotoContainer;
